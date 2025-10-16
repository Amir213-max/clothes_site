'use client';

import { useLanguage as useLanguageContext } from '@/contexts/LanguageContext';

/**
 * Custom hook for easy language access and switching
 * This is a wrapper around the LanguageContext to provide a cleaner API
 */
export const useLanguage = () => {
  const context = useLanguageContext();
  
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return {
    // Current language ('en' or 'ar')
    language: context.language,
    
    // Function to change language
    setLanguage: context.setLanguage,
    
    // Function to toggle between languages
    toggleLanguage: context.toggleLanguage,
    
    // Translation function
    t: context.t,
    
    // Loading state
    isLoading: context.isLoading,
    
    // RTL state (true for Arabic, false for English)
    isRTL: context.isRTL,
    
    // Helper functions
    isEnglish: context.language === 'en',
    isArabic: context.language === 'ar',
    
    // Get opposite language
    getOppositeLanguage: () => context.language === 'en' ? 'ar' : 'en',
    
    // Get language display name
    getLanguageName: (lang = context.language) => {
      return lang === 'ar' ? 'العربية' : 'English';
    },
    
    // Get language code for display
    getLanguageCode: (lang = context.language) => {
      return lang === 'ar' ? 'AR' : 'EN';
    }
  };
};

export default useLanguage;
