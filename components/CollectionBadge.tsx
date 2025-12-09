import { Collection } from '@/types'
import Link from 'next/link'

interface CollectionBadgeProps {
  collection: Collection
}

export default function CollectionBadge({ collection }: CollectionBadgeProps) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors"
    >
      {collection.metadata.collection_name}
    </Link>
  )
}