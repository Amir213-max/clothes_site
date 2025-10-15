'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FFFDFC]/95 dark:bg-[#2A1E19]/95 backdrop-blur-md shadow-lg border-b border-[#8C7E77]/10 dark:border-[#B8B0AC]/10' 
        : 'bg-[#FFFDFC] dark:bg-[#2A1E19] shadow-sm border-b border-[#8C7E77]/20 dark:border-[#B8B0AC]/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
<Link href="/" className="flex items-center space-x-3 group">
  <Image
    src="/images/logo.jpeg" // ✅ ضع امتداد الصورة الصحيح (مثلاً .png أو .svg)
    alt="ÉTOILE Logo"
    width={50}
    height={50}
    className="rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
  />

</Link>

          {/* <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C9A47A] to-[#8C7E77] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="text-[#2A1E19] font-serif font-bold text-xl">É</span>
            </div>
            <span className="font-serif text-2xl text-[#2A1E19] dark:text-[#F5F2EF] group-hover:text-[#C9A47A] transition-colors duration-300">
              ÉTOILE
            </span>
          </Link> */}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A47A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/shop" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 font-medium relative group">
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A47A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/designer" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 font-medium relative group">
              Designer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A47A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/about" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A47A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/contact" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9A47A] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-2">
            <Link href="/saved-designs" className="p-3 text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 rounded-xl hover:bg-[#C9A47A]/10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link href="/cart" className="p-3 text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 rounded-xl hover:bg-[#C9A47A]/10 relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#C9A47A] text-[#2A1E19] text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-lg">
                0
              </span>
            </Link>
            <Link href="/profile" className="p-3 text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 rounded-xl hover:bg-[#C9A47A]/10">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-all duration-300 rounded-xl hover:bg-[#C9A47A]/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#8C7E77]/20 dark:border-[#B8B0AC]/20 py-6 bg-[#FFFDFC]/95 dark:bg-[#2A1E19]/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-colors duration-300 py-2 font-medium">
                Home
              </Link>
              <Link href="/shop" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-colors duration-300 py-2 font-medium">
                Shop
              </Link>
              <Link href="/designer" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-colors duration-300 py-2 font-medium">
                Designer
              </Link>
              <Link href="/about" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-colors duration-300 py-2 font-medium">
                About
              </Link>
              <Link href="/contact" className="text-[#2A1E19] dark:text-[#F5F2EF] hover:text-[#C9A47A] transition-colors duration-300 py-2 font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
