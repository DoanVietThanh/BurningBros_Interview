import { searchLimit } from "@/constants"

type getProductSearchType = {
  searchValue: string
  pageParam: number
}

const API_URL = import.meta.env.VITE_API_URL

export const getProductSearch = async ({ searchValue, pageParam }: getProductSearchType) => {
  const response = await fetch(
    `${API_URL}/search?q=${searchValue.trim()}&limit=${searchLimit}&skip=${pageParam * searchLimit}`
  )
  const products = await response.json()
  return products
}
