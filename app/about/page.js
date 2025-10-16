"use client";
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FAF6F3] to-[#FFFDFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-[#2A1E19] mb-6">
            {t('about.ourStory')}
          </h1>
          <p className="text-xl text-[#8C7E77] max-w-3xl mx-auto leading-relaxed">
            {t('about.ourStoryDesc')}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#FFFDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title={t('about.ourMission')} 
                subtitle={t('about.ourMissionSubtitle')}
                className="text-left mb-8"
              />
              <div className="space-y-6 text-[#8C7E77]">
                <p>
                  {t('about.ourMissionDesc1')}
                </p>
                <p>
                  {t('about.ourMissionDesc2')}
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
            title={t('about.ourValues')} 
            subtitle={t('about.ourValuesSubtitle')}
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A47A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-4">{t('about.creativity')}</h3>
              <p className="text-[#8C7E77]">
                {t('about.creativityDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A47A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-4">{t('about.sustainability')}</h3>
              <p className="text-[#8C7E77]">
                {t('about.sustainabilityDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C9A47A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-4">{t('about.quality')}</h3>
              <p className="text-[#8C7E77]">
                {t('about.qualityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#FFFDFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            title={t('about.meetOurTeam')} 
            subtitle={t('about.meetOurTeamSubtitle')}
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#C9A47A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👩‍💼</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-2">{t('about.sarahChen')}</h3>
              <p className="text-[#C9A47A] mb-4">{t('about.founderCreativeDirector')}</p>
              <p className="text-[#8C7E77] text-sm">
                {t('about.sarahDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-[#C9A47A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-2">{t('about.marcusRodriguez')}</h3>
              <p className="text-[#C9A47A] mb-4">{t('about.headOfTechnology')}</p>
              <p className="text-[#8C7E77] text-sm">
                {t('about.marcusDesc')}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-[#C9A47A] rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">👩‍🎨</span>
              </div>
              <h3 className="font-serif text-xl text-[#2A1E19] mb-2">{t('about.emmaThompson')}</h3>
              <p className="text-[#C9A47A] mb-4">{t('about.leadDesigner')}</p>
              <p className="text-[#8C7E77] text-sm">
                {t('about.emmaDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2A1E19] text-[#FAF6F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            {t('about.readyToCreate')}
          </h2>
          <p className="text-xl text-[#8C7E77] mb-8 max-w-2xl mx-auto">
            {t('about.joinThousandsOfCustomers')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/designer">
              <Button size="lg" variant="secondary">
                {t('about.startDesigning')}
              </Button>
            </Link>
            <Link href="/shop">
              <Button size="lg" variant="outline" className="border-[#FAF6F3] text-[#FAF6F3] hover:bg-[#FAF6F3] hover:text-[#2A1E19]">
                {t('about.browseCollection')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
