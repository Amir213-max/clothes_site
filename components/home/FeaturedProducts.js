"use client";
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FeaturedProducts({ products }) {
  const { t, isRTL } = useLanguage();
  
  return (
    <section className="py-20 bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`font-serif text-4xl md:text-5xl text-[#2A1E19] mb-4 ${isRTL ? 'font-arabic' : ''}`}>
            {t('products.featuredCollection')}
          </h2>
          <p className={`text-lg text-[#8C7E77] max-w-2xl mx-auto ${isRTL ? 'font-arabic' : ''}`}>
            {t('products.featuredDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/shop">
            <Button size="lg" className={isRTL ? 'font-arabic' : ''}>
              {t('products.viewAllProducts')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
