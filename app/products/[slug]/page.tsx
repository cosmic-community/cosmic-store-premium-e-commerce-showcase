// app/products/[slug]/page.tsx
import { getProductBySlug, getReviewsByProduct } from '@/lib/cosmic'
import { Product, Review } from '@/types'
import { notFound } from 'next/navigation'
import ProductImages from '@/components/ProductImages'
import ReviewCard from '@/components/ReviewCard'
import CollectionBadge from '@/components/CollectionBadge'

export default async function ProductPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const typedProduct = product as Product
  const reviews = await getReviewsByProduct(typedProduct.id)

  // Calculate average rating
  const averageRating = reviews.length > 0
    ? reviews.reduce((acc: number, review: Review) => {
        const rating = parseInt(review.metadata.rating.key)
        return acc + rating
      }, 0) / reviews.length
    : 0

  return (
    <div className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductImages images={typedProduct.metadata.product_images || []} />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {typedProduct.metadata.product_name}
            </h1>

            {/* Price and Stock */}
            <div className="flex items-center gap-4 mb-6">
              <p className="text-3xl font-bold text-primary">
                ${typedProduct.metadata.price.toFixed(2)}
              </p>
              {typedProduct.metadata.in_stock ? (
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                  In Stock
                </span>
              ) : (
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded">
                  Out of Stock
                </span>
              )}
            </div>

            {/* SKU */}
            {typedProduct.metadata.sku && (
              <p className="text-gray-600 mb-6">SKU: {typedProduct.metadata.sku}</p>
            )}

            {/* Collections */}
            {typedProduct.metadata.collections && typedProduct.metadata.collections.length > 0 && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Collections:</p>
                <div className="flex flex-wrap gap-2">
                  {typedProduct.metadata.collections.map((collection) => (
                    <CollectionBadge key={collection.id} collection={collection} />
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {typedProduct.metadata.description && (
              <div className="prose prose-sm max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: typedProduct.metadata.description }} />
              </div>
            )}

            {/* Reviews Summary */}
            {reviews.length > 0 && (
              <div className="border-t pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.round(averageRating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-lg font-semibold">{averageRating.toFixed(1)}</span>
                  <span className="text-gray-600">({reviews.length} reviews)</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        {reviews.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Customer Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review: Review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}