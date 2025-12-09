export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">
            Discover Premium Products
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Shop our curated collection of quality products backed by authentic customer reviews
          </p>
          <div className="flex gap-4">
            <a 
              href="/products" 
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}