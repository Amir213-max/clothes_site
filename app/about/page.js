import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FAF6F3] to-[#FFFDFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#2A1E19] mb-6">
            Our Story
          </h1>
          <p className="text-xl text-[#8C7E77] max-w-3xl mx-auto leading-relaxed">
            ÉTOILE was born from a simple belief: every piece of clothing should be as unique as the person wearing it. 
            We combine timeless elegance with modern customization to create your perfect wardrobe.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#FFFDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Mission" 
                subtitle="Empowering personal style through luxury customization"
                className="text-left mb-8"
              />
              <div className="space-y-6 text-[#8C7E77]">
                <p>
                  We believe that fashion should be personal, sustainable, and accessible. Our mission is to 
                  democratize luxury fashion by making high-quality, customizable clothing available to everyone.
                </p>
                <p>
                  Every piece in our collection is designed to be a canvas for your personal style, crafted 
                  with the finest materials and attention to detail that luxury fashion demands.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#C9A47A] to-[#8C7E77] rounded-2xl shadow-2xl"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#2A1E19] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#FAF6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Our Values" 
            subtitle="The principles that guide everything we do"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A47A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-4">Creativity</h3>
              <p className="text-[#8C7E77]">
                We celebrate individual expression and provide the tools for you to create something truly unique.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A47A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-4">Sustainability</h3>
              <p className="text-[#8C7E77]">
                We're committed to ethical practices and sustainable materials that respect both people and planet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A47A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-4">Quality</h3>
              <p className="text-[#8C7E77]">
                Every piece is crafted with meticulous attention to detail and the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FFFDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The passionate individuals behind ÉTOILE"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#C9A47A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-2">Sarah Chen</h3>
              <p className="text-[#C9A47A] mb-4">Founder & Creative Director</p>
              <p className="text-[#8C7E77] text-sm">
                With over 15 years in luxury fashion, Sarah brings a unique vision to personalized design.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-[#C9A47A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-2">Marcus Rodriguez</h3>
              <p className="text-[#C9A47A] mb-4">Head of Technology</p>
              <p className="text-[#8C7E77] text-sm">
                Marcus leads our innovation in creating seamless customization experiences.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-[#C9A47A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👩‍🎨</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-2">Emma Thompson</h3>
              <p className="text-[#C9A47A] mb-4">Lead Designer</p>
              <p className="text-[#8C7E77] text-sm">
                Emma's artistic vision shapes every collection and customization option we offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A1E19] text-[#FAF6F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to Create?
          </h2>
          <p className="text-xl text-[#8C7E77] mb-8 max-w-2xl mx-auto">
            Join thousands of customers who have discovered the joy of personalized luxury fashion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/designer">
              <Button size="lg" variant="secondary">
                Start Designing
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="outline" className="border-[#FAF6F3] text-[#FAF6F3] hover:bg-[#FAF6F3] hover:text-[#2A1E19]">
                Browse Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
