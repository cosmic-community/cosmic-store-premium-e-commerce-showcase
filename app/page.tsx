import { getProducts, getCollections, getAllReviews } from '@/lib/cosmic'
import { Product, Collection, Review } from '@/types'
import ProductGrid from '@/components/ProductGrid'
import CollectionCard from '@/components/CollectionCard'
import ReviewCard from '@/components/ReviewCard'
import Hero from '@/components/Hero'

export default async function HomePage() {
  const [products, collections, reviews] = await Promise.all([
    getProducts(),
    getCollections(),
    getAllReviews()
  ])

  // Get featured products (first 6)
  const featuredProducts = (products as Product[]).slice(0, 6)
  
  // Get recent reviews (first 3)
  const recentReviews = (reviews as Review[]).slice(0, 3)

  return (
    <div>
      <Hero />
      
      {/* Collections Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(collections as Collection[]).map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <a href="/products" className="text-primary hover:underline">
              View all products →
            </a>
          </div>
          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}