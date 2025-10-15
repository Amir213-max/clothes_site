"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-[#FFFDFC] dark:bg-[#2A1E19] rounded-3xl shadow-lg hover:shadow-2xl dark:shadow-[0_0_15px_rgba(201,164,122,0.25)] transition-all duration-500 overflow-hidden border border-[#8C7E77]/10 dark:border-[#B8B0AC]/20 hover:border-[#C9A47A]/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1E19]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Customizable badge */}
        {product.customizable && (
          <div className="absolute top-4 right-4 bg-[#FFFDFC]/95 backdrop-blur-sm text-[#C9A47A] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg border border-[#C9A47A]/20">
            ✨ Customizable
          </div>
        )}
        
        {/* Quick actions overlay */}
        <div className={`absolute inset-0 bg-[#2A1E19]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="flex gap-3">
            <Link href={`/product/${product.id}`}>
              <button className="px-6 py-3 bg-[#C9A47A] text-[#2A1E19] rounded-xl font-semibold hover:bg-[#FAF6F3] transition-all duration-300 transform hover:scale-105 shadow-lg">
                Quick View
              </button>
            </Link>
            {product.customizable && (
              <Link href={`/designer?product=${product.id}`}>
                <button className="px-6 py-3 bg-[#FFFDFC] text-[#2A1E19] rounded-xl font-semibold hover:bg-[#C9A47A] hover:text-[#2A1E19] transition-all duration-300 transform hover:scale-105 shadow-lg border border-[#8C7E77]/20">
                  Customize
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-serif text-xl text-[#2A1E19] dark:text-[#F5F2EF] mb-2 group-hover:text-[#C9A47A] transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-[#8C7E77] dark:text-[#B8B0AC] text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline space-x-2">
            <span className="font-bold text-2xl text-[#2A1E19] dark:text-[#F5F2EF]">
              ${product.price}
            </span>
            <span className="text-sm text-[#8C7E77] dark:text-[#B8B0AC] line-through">${(product.price * 1.2).toFixed(2)}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-[#C9A47A] fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-xs text-[#8C7E77] dark:text-[#B8B0AC] ml-1">(4.9)</span>
          </div>
        </div>
        
        {/* Category tag */}
        <div className="pt-2 border-t border-[#8C7E77]/10 dark:border-[#B8B0AC]/10">
          <span className="inline-block px-3 py-1 bg-[#FAF6F3] dark:bg-[#1C1715] text-[#8C7E77] dark:text-[#B8B0AC] text-xs font-medium rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}
