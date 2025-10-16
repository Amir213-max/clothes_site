"use client";
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Testimonials({ testimonials }) {
  const { t, isRTL } = useLanguage();
  
  return (
    <section className="py-20 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-4xl md:text-5xl text-[#2A1E19] mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('testimonials.title')}
          </h2>
          <p className={`text-lg text-[#8C7E77] max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#FAF6F3] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`flex items-center mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className={`relative w-12 h-12 rounded-full overflow-hidden ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className={`font-semibold text-[#2A1E19] ${isRTL ? 'font-arabic' : ''}`}>{testimonial.name}</h4>
                  <div className="flex text-[#C9A47A]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className={`text-[#8C7E77] italic ${isRTL ? 'font-arabic text-right' : ''}`}>
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
