import data from '@/data/data.json';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

export default function SavedDesignsPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle 
          title="Your Saved Designs" 
          subtitle="All your creative designs, ready to customize or add to cart."
          className="mb-12"
        />

        {data.savedDesigns.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#C9A47A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎨</span>
            </div>
            <h3 className="font-serif text-2xl text-[#2A1E19] mb-4">No Saved Designs Yet</h3>
            <p className="text-[#8C7E77] mb-8 max-w-md mx-auto">
              Start creating your perfect pieces with our designer tool. Your designs will appear here once you save them.
            </p>
            <Link href="/designer">
              <Button size="lg">
                Start Designing
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.savedDesigns.map((design) => (
              <div key={design.id} className="bg-[#FFFDFC] rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={design.preview}
                    alt={design.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#2A1E19] mb-2">
                    {design.title}
                  </h3>
                  <p className="text-[#8C7E77] text-sm mb-4">
                    Saved on {new Date(design.date).toLocaleDateString()}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Link href={`/designer?design=${design.id}`}>
                      <Button variant="outline" size="sm">
                        ✏️ Edit
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      🗑️ Delete
                    </Button>
                    <Button size="sm">
                      🛒 Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-[#FFFDFC] rounded-2xl p-8 shadow-lg">
            <h3 className="font-serif text-2xl text-[#2A1E19] mb-4">Ready to Create?</h3>
            <p className="text-[#8C7E77] mb-6">
              Start a new design or browse our collection for inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/designer">
                <Button size="lg">
                  Create New Design
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" size="lg">
                  Browse Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
