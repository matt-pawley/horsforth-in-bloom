import Link from 'next/link'
import { Facebook, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <span className="text-orange-400">Horsforth</span> in <span className="text-green-400">Bloom</span>
            </h3>
            <p className="text-gray-600 text-sm">
              A community volunteer group that plants flowers, herbs and vegetables 
              throughout Horsforth to create a welcoming and joyful place for everyone to enjoy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <span className="text-pink-500">Quick</span> Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-600 hover:text-orange-400 transition-colors text-sm">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/sites" className="text-gray-600 hover:text-orange-400 transition-colors text-sm">
                  Sites Covered
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-orange-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Get in <span className="text-green-400">Touch</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <a 
                  href="mailto:horsforthinbloom@gmail.com" 
                  className="text-gray-600 hover:text-orange-400 transition-colors text-sm"
                >
                  horsforthinbloom@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <a 
                  href="tel:0777093594" 
                  className="text-gray-600 hover:text-orange-400 transition-colors text-sm"
                >
                  Peter Mallot: 07770 93594
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Facebook className="h-4 w-4 text-pink-500" />
                <a 
                  href="https://www.facebook.com/HorsforthInBloom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-500 transition-colors text-sm"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Horsforth in Bloom. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Visit <a href="https://horsforth.town/links/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">horsforth.town/links/</a> for more local information
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
