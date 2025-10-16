'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Inter, Playfair_Display, Tajawal } from 'next/font/google';

// Configure fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

export default function DynamicLayout({ children }) {
  const { language } = useLanguage();
  
  // Determine font classes based on language
  const getFontClasses = () => {
    if (language === 'ar') {
      return `${tajawal.variable} font-tajawal`;
    } else {
      return `${inter.variable} ${playfairDisplay.variable} font-inter`;
    }
  };

  return (
    <div className={getFontClasses()}>
      {children}
    </div>
  );
}
