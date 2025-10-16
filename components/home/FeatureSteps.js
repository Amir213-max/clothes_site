"use client";
import { useLanguage } from '@/contexts/LanguageContext';

export default function FeatureSteps() {
  const { t, isRTL } = useLanguage();
  const steps = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      title: t('features.step1.title'),
      description: t('features.step1.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: t('features.step2.title'),
      description: t('features.step2.description')
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: t('features.step3.title'),
      description: t('features.step3.description')
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-4xl md:text-5xl text-[#2A1E19] mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('features.title')}
          </h2>
          <p className={`text-lg text-[#8C7E77] max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C9A47A] text-[#2A1E19] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className={`font-serif text-xl text-[#2A1E19] mb-3 ${isRTL ? 'font-arabic' : ''}`}>
                {step.title}
              </h3>
              <p className={`text-[#8C7E77] ${isRTL ? 'font-arabic' : ''}`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
