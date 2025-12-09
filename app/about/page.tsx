import { getPageBySlug } from '@/lib/cosmic'
import { Page } from '@/types'

export default async function AboutPage() {
  const page = await getPageBySlug('about') as Page | null

  if (!page) {
    return (
      <div className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <p className="text-gray-600">Content coming soon...</p>
        </div>
      </div>
    )
  }

  const { metadata } = page

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {metadata.hero_heading && (
              <h1 className="text-5xl font-bold mb-6">
                {metadata.hero_heading}
              </h1>
            )}
            {metadata.hero_subheading && (
              <p className="text-xl text-blue-100">
                {metadata.hero_subheading}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      {metadata.hero_image && (
        <section className="py-12">
          <div className="container">
            <img 
              src={`${metadata.hero_image.imgix_url}?w=2400&h=800&fit=crop&auto=format,compress`}
              alt={metadata.page_title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Content Section */}
      {metadata.content && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div dangerouslySetInnerHTML={{ __html: metadata.content }} />
            </div>
          </div>
        </section>
      )}

      {/* Mission Statement */}
      {metadata.mission_statement && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                {metadata.mission_statement}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Values Section */}
      {metadata.values && Array.isArray(metadata.values) && metadata.values.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metadata.values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}