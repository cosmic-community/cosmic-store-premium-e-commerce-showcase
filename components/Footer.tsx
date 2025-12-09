export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-xl font-bold text-white">Cosmic Store</span>
            </div>
            <p className="text-sm text-gray-400">
              Premium products with authentic customer reviews.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-sm hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm hover:text-white transition-colors">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <p className="text-sm text-gray-400">
              Built with Next.js and powered by Cosmic CMS
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Cosmic Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}