import { Product } from '@/types'
import Link from 'next/link'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const firstImage = product.metadata.product_images?.[0]

  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        {/* Product Image */}
        <div className="relative h-64 bg-gray-200">
          {firstImage ? (
            <img
              src={`${firstImage.imgix_url}?w=600&h=512&fit=crop&auto=format,compress`}
              alt={product.metadata.product_name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          
          {/* Stock Badge */}
          {!product.metadata.in_stock && (
            <div className="absolute top-2 right-2">
              <span className="px-2 py-1 bg-red-500 text-white text-xs font-semibold rounded">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
            {product.metadata.product_name}
          </h3>
          
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">
              ${product.metadata.price.toFixed(2)}
            </p>
            
            {product.metadata.in_stock && (
              <span className="text-sm text-green-600 font-medium">
                In Stock
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}