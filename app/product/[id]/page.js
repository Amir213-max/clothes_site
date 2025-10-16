'use client';

import React from 'react';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import data from '@/data/data.json';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductDetailPage({ params }) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const { id } = React.use(params);
  const product = data.products.find(p => p.id === parseInt(id));
  
  
  if (!product) {
    notFound();
  }

  const images = [product.image, product.image, product.image]; // Mock multiple images

  const tabs = [
    { id: 'description', label: t('common.description') },
    { id: 'reviews', label: t('common.reviews') },
    { id: 'shipping', label: t('common.shipping') }
  ];

  const reviews = [
    { name: 'Sofia L.', rating: 5, text: 'Absolutely love this piece! The quality is exceptional.', date: '2024-01-15' },
    { name: 'Emily R.', rating: 5, text: 'Perfect fit and beautiful design. Highly recommended!', date: '2024-01-10' }
  ];

  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-[#C9A47A]' : ''
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl text-[#2A1E19] mb-2">{product.name}</h1>
              <p className="text-3xl font-semibold text-[#2A1E19] mb-4">${product.price}</p>
              {product.customizable && (
                <span className="inline-block bg-[#C9A47A] text-[#2A1E19] px-4 py-2 rounded-full text-sm font-medium">
                  {t('common.customize')}
                </span>
              )}
            </div>

            <p className="text-[#8C7E77] text-lg leading-relaxed">
              {product.description}
            </p>

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-[#2A1E19] font-medium">{t('common.quantity')}:</label>
                <div className="flex items-center border-2 border-[#8C7E77] rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-[#2A1E19] hover:bg-[#8C7E77]/10"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-[#2A1E19]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-[#2A1E19] hover:bg-[#8C7E77]/10"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  {t('common.addToCart')}
                </Button>
                {product.customizable && (
                  <Link href={`/designer?product=${product.id}`} className="flex-1">
                    <Button variant="outline" size="lg" className="w-full">
                      {t('common.customize')}
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            {/* Product Details Tabs */}
            <div className="border-t border-[#8C7E77]/20 pt-8">
              <div className="flex space-x-8 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-2 border-b-2 transition-colors duration-300 ${
                      activeTab === tab.id
                        ? 'border-[#C9A47A] text-[#2A1E19]'
                        : 'border-transparent text-[#8C7E77] hover:text-[#2A1E19]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="text-[#8C7E77]">
                {activeTab === 'description' && (
                  <div className="space-y-4">
                    <p>{t('product.description')}</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>{t('product.premiumFabricConstruction')}</li>
                      <li>{t('product.handFinishedDetails')}</li>
                      <li>{t('product.availableInMultipleSizes')}</li>
                      <li>{t('product.easyCareInstructionsIncluded')}</li>
                    </ul>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <div key={index} className="border-b border-[#8C7E77]/20 pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-[#2A1E19]">{review.name}</h4>
                          <div className="flex text-[#C9A47A]">
                            {[...Array(review.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm">{review.text}</p>
                        <p className="text-xs text-[#8C7E77]/60 mt-2">{review.date}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'shipping' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-[#2A1E19] mb-2">{t('product.standardShipping')}</h4>
                      <p>{t('product.standardShippingDesc')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2A1E19] mb-2">{t('product.expressShipping')}</h4>
                      <p>{t('product.expressShippingDesc')}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#2A1E19] mb-2">{t('product.returns')}</h4>
                      <p>{t('product.returnsDesc')}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
