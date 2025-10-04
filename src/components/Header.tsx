import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Facebook } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-lg border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Horsforth in Bloom Logo"
                quality={100}
                height={48}
                width={130}
              />
              <div className="absolute -inset-1 bg-orange-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            <Link 
              href="/" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/sustainability" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-green-400 hover:bg-green-400/15 transition-all duration-200 font-medium"
            >
              Sustainability
            </Link>
            <Link 
              href="/sites" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-pink-500 hover:bg-pink-500/15 transition-all duration-200 font-medium"
            >
              Sites Covered
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-orange-400 hover:bg-orange-400/15 transition-all duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Facebook Link */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white shadow-md hover:shadow-lg transition-all duration-200"
          >
            <Link 
              href="https://www.facebook.com/HorsforthInBloom" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Facebook className="h-4 w-4" />
              <span>Follow us</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden py-4 border-t border-orange-400/20">
          <nav className="flex flex-col space-y-1">
            <Link 
              href="/" 
              className="px-4 py-3 rounded-lg text-gray-700 hover:text-orange-400 hover:bg-orange-400/15 transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/sustainability" 
              className="px-4 py-3 rounded-lg text-gray-700 hover:text-green-400 hover:bg-green-400/15 transition-all duration-200 font-medium"
            >
              Sustainability
            </Link>
            <Link 
              href="/sites" 
              className="px-4 py-3 rounded-lg text-gray-700 hover:text-pink-500 hover:bg-pink-500/15 transition-all duration-200 font-medium"
            >
              Sites Covered
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-3 rounded-lg text-gray-700 hover:text-orange-400 hover:bg-orange-400/15 transition-all duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
