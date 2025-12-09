import { Collection } from '@/types'
import Link from 'next/link'

interface CollectionCardProps {
  collection: Collection
}

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <div className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        {collection.metadata.featured_image ? (
          <img
            src={`${collection.metadata.featured_image.imgix_url}?w=1200&h=512&fit=crop&auto=format,compress`}
            alt={collection.metadata.collection_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
        )}
        
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h3 className="text-2xl font-bold mb-2">
              {collection.metadata.collection_name}
            </h3>
            {collection.metadata.description && (
              <p className="text-sm text-white/90 line-clamp-2">
                {collection.metadata.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}