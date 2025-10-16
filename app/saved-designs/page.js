'use client';

import data from '@/data/data.json';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SavedDesignsPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle 
          title={t('savedDesigns.title')} 
          subtitle={t('savedDesigns.subtitle')}
          className="mb-12"
        />

        {data.savedDesigns.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#C9A47A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🎨</span>
            </div>
            <h3 className="font-serif text-2xl text-[#2A1E19] mb-4">{t('savedDesigns.noSavedDesignsYet')}</h3>
            <p className="text-[#8C7E77] mb-8 max-w-md mx-auto">
              {t('savedDesigns.startCreatingPerfectPieces')}
            </p>
            <Link href="/designer">
              <Button size="lg">
                {t('savedDesigns.startDesigning')}
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
                    {t('savedDesigns.savedOn')} {new Date(design.date).toLocaleDateString()}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Link href={`/designer?design=${design.id}`}>
                      <Button variant="outline" size="sm">
                        ✏️ {t('savedDesigns.edit')}
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      🗑️ {t('savedDesigns.delete')}
                    </Button>
                    <Button size="sm">
                      🛒 {t('savedDesigns.addToCart')}
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
            <h3 className="font-serif text-2xl text-[#2A1E19] mb-4">{t('savedDesigns.readyToCreate')}</h3>
            <p className="text-[#8C7E77] mb-6">
              {t('savedDesigns.startNewDesignOrBrowse')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/designer">
                <Button size="lg">
                  {t('savedDesigns.createNewDesign')}
                </Button>
              </Link>
              <Link href="/shop">
                <Button variant="outline" size="lg">
                  {t('savedDesigns.browseCollection')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
