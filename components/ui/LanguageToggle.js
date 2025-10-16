'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage, isLoading } = useLanguage();

  if (isLoading) {
    return (
      <div className="w-12 h-12 bg-[#FAF6F3] dark:bg-[#2A1E19] rounded-2xl flex items-center justify-center shadow-lg border border-[#8C7E77]/20 dark:border-[#B8B0AC]/20">
        <div className="w-5 h-5 bg-[#8C7E77] rounded-full animate-pulse"></div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="group relative w-12 h-12 bg-[#FAF6F3] dark:bg-[#2A1E19] rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 border border-[#8C7E77]/20 dark:border-[#B8B0AC]/20 hover:border-[#C9A47A] dark:hover:border-[#C9A47A]"
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C9A47A]/20 to-[#8C7E77]/20 dark:from-[#C9A47A]/30 dark:to-[#8C7E77]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Language text */}
      <div className="relative z-10 transition-all duration-500 ease-in-out">
        <span className="text-sm font-bold text-[#2A1E19] dark:text-[#F5F2EF] group-hover:text-[#C9A47A] transition-colors duration-300">
          {language === 'en' ? 'AR' : 'EN'}
        </span>
      </div>
      
      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-[#C9A47A]/20 dark:bg-[#C9A47A]/30 scale-0 group-active:scale-100 transition-transform duration-200 rounded-2xl"></div>
      </div>
    </button>
  );
}
