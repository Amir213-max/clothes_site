'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { t, isRTL } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-[#2A1E19] text-[#FAF6F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h2 className={`font-serif text-4xl md:text-5xl mb-4 ${isRTL ? 'font-arabic' : ''}`}>
              {t('newsletter.title')}
            </h2>
            <p className={`text-xl text-[#8C7E77] max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
              {t('newsletter.description')}
            </p>
          </div>

          {isSubscribed ? (
            <div className={`bg-[#C9A47A] text-[#2A1E19] px-6 py-4 rounded-xl font-medium ${isRTL ? 'font-arabic' : ''}`}>
              {t('newsletter.thankYou')}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
                <Input
                  type="email"
                  placeholder={t('newsletter.emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`flex-1 ${isRTL ? 'font-arabic text-right' : ''}`}
                  required
                />
                <Button type="submit" size="md" className={`w-full sm:w-auto ${isRTL ? 'font-arabic' : ''}`}>
                  {t('newsletter.subscribe')}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
