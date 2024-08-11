import { getProductSearch } from "@/actions/get-product-search"
import ComponentLoading from "@/components/loading"
import ProductCard from "@/components/product/product-card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Product, ProductLists } from "@/types/product.type"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useDebounce } from "@uidotdev/usehooks"
import { ChangeEvent, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

function HomePage() {
  const [searchValue, setSearchValue] = useState("")
  const debouncedSearchValue = useDebounce(searchValue, 500) // 500ms debounce delay
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const fetchProducts = async ({ pageParam = 0 }: { pageParam: number }) => {
    return getProductSearch({ searchValue: debouncedSearchValue, pageParam })
  }

  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["final-products", debouncedSearchValue],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const skip = lastPage.products?.length ? allPages.length : undefined
      return skip
    },
  })

  const content = data?.pages.flatMap((productLists: ProductLists, pageIndex: number) =>
    productLists.products.map((product: Product, productIndex: number) => {
      const isLastProduct = productLists.products.length === productIndex + 1
      return (
        <ProductCard
          innerRef={isLastProduct ? ref : undefined}
          key={`${product.id}-${pageIndex}-${productIndex}`}
          product={product}
        />
      )
    })
  )

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, inView])

  return (
    <div>
      <div className="flex items-center justify-center whitespace-nowrap gap-4">
        <Label htmlFor="search-product" className="text-xl">
          Search Product
        </Label>
        <Input
          id="search-product"
          placeholder="Search Product"
          value={searchValue}
          onChange={handleSearchChange}
          className="w-1/2"
        />
      </div>
      {status === "pending" && <ComponentLoading />}
      {status === "error" && <div>Error</div>}
      {content?.length === 0 && (
        <div className="text-center text-2xl text-red-700 mt-8 font-semibold">Product not found!</div>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-8 mt-8">{content}</div>
      {isFetchingNextPage && <ComponentLoading />}
    </div>
  )
}

export default HomePage
