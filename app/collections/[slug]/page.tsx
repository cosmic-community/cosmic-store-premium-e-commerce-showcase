// app/collections/[slug]/page.tsx
import { getCollectionBySlug, getProductsByCollection } from '@/lib/cosmic'
import { Collection, Product } from '@/types'
import { notFound } from 'next/navigation'
import ProductGrid from '@/components/ProductGrid'

export default async function CollectionPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  const collection = await getCollectionBySlug(slug)

  if (!collection) {
    notFound()
  }

  const typedCollection = collection as Collection
  const products = await getProductsByCollection(typedCollection.id)

  return (
    <div className="py-16">
      <div className="container">
        {/* Collection Header */}
        <div className="mb-12">
          {typedCollection.metadata.featured_image && (
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <img
                src={`${typedCollection.metadata.featured_image.imgix_url}?w=1200&h=512&fit=crop&auto=format,compress`}
                alt={typedCollection.metadata.collection_name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h1 className="text-4xl font-bold text-white text-center">
                  {typedCollection.metadata.collection_name}
                </h1>
              </div>
            </div>
          )}
          
          {!typedCollection.metadata.featured_image && (
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {typedCollection.metadata.collection_name}
            </h1>
          )}
          
          {typedCollection.metadata.description && (
            <p className="text-lg text-gray-600 max-w-3xl">
              {typedCollection.metadata.description}
            </p>
          )}
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <ProductGrid products={products as Product[]} />
        ) : (
          <p className="text-gray-600 text-center py-12">
            No products found in this collection.
          </p>
        )}
      </div>
    </div>
  )
}