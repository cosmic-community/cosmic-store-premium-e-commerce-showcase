import { Review } from '@/types'

interface ReviewCardProps {
  review: Review
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const rating = parseInt(review.metadata.rating.key)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Review Text */}
      {review.metadata.review_text && (
        <p className="text-gray-700 mb-4 line-clamp-4">
          "{review.metadata.review_text}"
        </p>
      )}

      {/* Customer Info */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div>
          <p className="font-semibold text-gray-900">
            {review.metadata.customer_name}
          </p>
          {review.metadata.product && (
            <p className="text-sm text-gray-600">
              {review.metadata.product.title}
            </p>
          )}
        </div>
        
        {review.metadata.verified_purchase && (
          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
            Verified
          </span>
        )}
      </div>
    </div>
  )
}