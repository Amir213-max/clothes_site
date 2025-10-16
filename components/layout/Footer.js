"use client";
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t, isRTL } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-br from-[#2A1E19] to-[#1A1512] dark:from-[#1C1715] dark:to-[#0F0B08] text-[#FAF6F3] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#C9A47A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#8C7E77] rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#C9A47A] to-[#8C7E77] rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-[#2A1E19] font-serif font-bold text-xl">É</span>
              </div>
              <span className="font-serif text-3xl font-bold">ÉTOILE</span>
            </div>
            <p className={`text-[#8C7E77] mb-8 max-w-lg text-lg leading-relaxed ${isRTL ? 'font-arabic' : ''}`}>
              {t('footer.description')}
              <span className="text-[#C9A47A] font-semibold"> {t('footer.descriptionHighlight')}</span>.
            </p>
            
            {/* Newsletter */}
            <div className="mb-8">
              <h4 className={`font-serif text-lg text-[#FAF6F3] mb-4 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.stayInStyle')}</h4>
              <div className={`flex ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className={`flex-1 px-4 py-3 bg-[#1A1512] border border-[#8C7E77]/30 rounded-xl text-[#FAF6F3] placeholder-[#8C7E77] focus:border-[#C9A47A] focus:outline-none transition-colors duration-300 ${isRTL ? 'font-arabic text-right' : ''}`}
                />
                <button className={`px-6 py-3 bg-[#C9A47A] text-[#2A1E19] rounded-xl font-semibold hover:bg-[#8C7E77] hover:text-[#FAF6F3] transition-all duration-300 transform hover:scale-105 ${isRTL ? 'font-arabic' : ''}`}>
                  {t('footer.subscribe')}
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className={`flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              <a href="#" className="w-12 h-12 bg-[#1A1512] rounded-xl flex items-center justify-center text-[#8C7E77] hover:text-[#C9A47A] hover:bg-[#C9A47A]/10 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[#1A1512] rounded-xl flex items-center justify-center text-[#8C7E77] hover:text-[#C9A47A] hover:bg-[#C9A47A]/10 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[#1A1512] rounded-xl flex items-center justify-center text-[#8C7E77] hover:text-[#C9A47A] hover:bg-[#C9A47A]/10 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-[#1A1512] rounded-xl flex items-center justify-center text-[#8C7E77] hover:text-[#C9A47A] hover:bg-[#C9A47A]/10 transition-all duration-300 transform hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-serif text-xl text-[#FAF6F3] mb-6 flex items-center ${isRTL ? 'font-arabic' : ''}`}>
              <span className={`w-6 h-6 bg-[#C9A47A] rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                <svg className="w-3 h-3 text-[#2A1E19]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/shop" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.shopCollection')}
              </Link></li>
              <li><Link href="/designer" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.designStudio')}
              </Link></li>
              <li><Link href="/saved-designs" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.savedDesigns')}
              </Link></li>
              <li><Link href="/about" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.aboutUs')}
              </Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className={`font-serif text-xl text-[#FAF6F3] mb-6 flex items-center ${isRTL ? 'font-arabic' : ''}`}>
              <span className={`w-6 h-6 bg-[#C9A47A] rounded-lg flex items-center justify-center ${isRTL ? 'ml-3' : 'mr-3'}`}>
                <svg className="w-3 h-3 text-[#2A1E19]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.7 2.75l-1.006-1.006A6.5 6.5 0 0016 10a6.5 6.5 0 00-1.706-4.744L13.3 7.25A8 8 0 0116 10zM8 10a2 2 0 104 0 2 2 0 00-4 0z" clipRule="evenodd" />
                </svg>
              </span>
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/contact" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.contactUs')}
              </Link></li>
              <li><Link href="#" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.shippingInfo')}
              </Link></li>
              <li><Link href="#" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.returns')}
              </Link></li>
              <li><Link href="#" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 flex items-center group ${isRTL ? 'font-arabic' : ''}`}>
                <span className={`w-1 h-1 bg-[#C9A47A] rounded-full group-hover:scale-150 transition-transform duration-300 ${isRTL ? 'ml-3' : 'mr-3'}`}></span>
                {t('footer.sizeGuide')}
              </Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#8C7E77]/20 mt-12 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className={`text-[#8C7E77] text-center md:text-left ${isRTL ? 'font-arabic md:text-right' : ''}`}>
              {t('footer.copyright')}
              <span className="text-[#C9A47A] font-semibold"> {t('footer.elegance')}</span> {t('footer.and')} 
              <span className="text-[#C9A47A] font-semibold"> {t('footer.precision')}</span>.
            </p>
            <div className={`flex text-sm ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              <Link href="#" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.privacyPolicy')}</Link>
              <Link href="#" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.termsOfService')}</Link>
              <Link href="#" className={`text-[#8C7E77] hover:text-[#C9A47A] transition-colors duration-300 ${isRTL ? 'font-arabic' : ''}`}>{t('footer.cookiePolicy')}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
