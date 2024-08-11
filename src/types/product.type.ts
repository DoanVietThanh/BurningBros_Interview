type Dimensions = {
  width: number
  height: number
  depth: number
}

type Review = {
  reviewerName: string
  rating: number
  comment: string
  date: string
}

export type Product = {
  id: number
  title: string
  description: string
  brand: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  minimumOrderQuantity: number
  availabilityStatus: "In Stock" | "Out of Stock" | "Preorder"
  images: string[]
  thumbnail: string
  dimensions: Dimensions
  weight: number
  sku: string
  tags: string[]
  returnPolicy: string
  shippingInformation: string
  warrantyInformation: string
  meta: {
    barcode: string
    qrCode: string
    createdAt: string
    updatedAt: string
  }
  reviews: Review[]
}

export type ProductLists = {
  products: Product[]
  total: number
  skip: number
  limit: number
}
