'use client'

import { useState } from 'react'

interface ProductImagesProps {
  images: Array<{
    url: string
    imgix_url: string
  }>
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <svg className="w-24 h-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    )
  }

  // Changed: Added explicit undefined check for array access
  const selectedImage = images[selectedIndex]
  if (!selectedImage) {
    return null
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={`${selectedImage.imgix_url}?w=1200&h=768&fit=crop&auto=format,compress`}
          alt="Product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                selectedIndex === index
                  ? 'border-primary'
                  : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=320&h=160&fit=crop&auto=format,compress`}
                alt={`Product ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}