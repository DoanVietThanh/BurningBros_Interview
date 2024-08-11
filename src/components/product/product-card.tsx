import { Ref } from "react"
import { Product } from "@/types/product.type"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
  innerRef?: Ref<HTMLDivElement>
}

const ProductCard = ({ product, innerRef, ...props }: ProductCardProps) => {
  return (
    <div
      {...props}
      ref={innerRef}
      className="w-full h-[360px] border-2 shadow-lg rounded-lg p-4 overflow-hidden cursor-pointer flex flex-col justify-between hover:scale-105 transition-all duration-200 ease-in-out"
    >
      <div className="flex justify-center overflow-hidden">
        <img src={product.images[0]} alt="image" className="object-cover " />
      </div>
      <div className=" text-center font-semibold">
        <p>{product.title}</p>
        <p className="text-center text-yellow-500 font-semibold">$ {product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard
