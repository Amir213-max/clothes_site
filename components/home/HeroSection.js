import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#FAF6F3] via-[#FFFDFC] to-[#FAF6F3] dark:from-[#1C1715] dark:via-[#2A1E19] dark:to-[#1C1715] pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#C9A47A]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8C7E77]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C9A47A]/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="inline-block px-4 py-2 bg-[#C9A47A]/10 text-[#C9A47A] text-sm font-medium rounded-full border border-[#C9A47A]/20">
                  ✨ Luxury Customization
                </span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#2A1E19] dark:text-[#F5F2EF] leading-[1.1] font-bold">
                Design Your
                <span className="block bg-gradient-to-r from-[#C9A47A] to-[#8C7E77] bg-clip-text text-transparent">
                  Perfect Wardrobe
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-[#8C7E77] dark:text-[#B8B0AC] max-w-2xl leading-relaxed">
                Create personalized luxury clothing that reflects your unique style. 
                From concept to creation, ÉTOILE brings your vision to life with 
                <span className="font-semibold text-[#2A1E19] dark:text-[#F5F2EF]"> premium craftsmanship</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/designer">
                <Button size="lg" className="w-full sm:w-auto shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center space-x-2">
                    <span>Start Designing</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 hover:bg-[#2A1E19] hover:text-[#FAF6F3] transform hover:scale-105 transition-all duration-300">
                  <span className="flex items-center space-x-2">
                    <span>Shop Collection</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </span>
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2A1E19] dark:text-[#F5F2EF]">10K+</div>
                <div className="text-sm text-[#8C7E77] dark:text-[#B8B0AC]">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2A1E19] dark:text-[#F5F2EF]">4.9★</div>
                <div className="text-sm text-[#8C7E77] dark:text-[#B8B0AC]">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#2A1E19] dark:text-[#F5F2EF]">100%</div>
                <div className="text-sm text-[#8C7E77] dark:text-[#B8B0AC]">Custom Made</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
                alt="Luxury fashion design"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E19]/30 via-transparent to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-6 right-6 bg-[#FFFDFC]/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[#2A1E19]">Live Design</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#C9A47A] to-[#8C7E77] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-[#8C7E77] to-[#C9A47A] rounded-full opacity-15 blur-2xl"></div>
            
            {/* Floating cards */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-[#FFFDFC] rounded-2xl p-4 shadow-xl border border-[#8C7E77]/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#C9A47A] rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#2A1E19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2A1E19]">Premium Quality</div>
                  <div className="text-xs text-[#8C7E77]">Handcrafted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
