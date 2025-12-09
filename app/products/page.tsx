import { getProducts } from '@/lib/cosmic'
import { Product } from '@/types'
import ProductGrid from '@/components/ProductGrid'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">All Products</h1>
        <ProductGrid products={products as Product[]} />
      </div>
    </div>
  )
}