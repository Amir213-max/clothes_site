'use client';

import { useState } from 'react';
import data from '@/data/data.json';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ShopPage() {
  const [filters, setFilters] = useState({
    category: 'all',
    price: 'all',
    customizable: 'all'
  });
  const [sortBy, setSortBy] = useState('name');

  const categories = ['all', ...new Set(data.products.map(p => p.category))];
  const priceRanges = [
    { value: 'all', label: 'All Prices' },
    { value: '0-50', label: 'Under $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100-150', label: '$100 - $150' },
    { value: '150+', label: 'Over $150' }
  ];

  const filteredProducts = data.products.filter(product => {
    if (filters.category !== 'all' && product.category !== filters.category) return false;
    if (filters.customizable !== 'all') {
      if (filters.customizable === 'yes' && !product.customizable) return false;
      if (filters.customizable === 'no' && product.customizable) return false;
    }
    if (filters.price !== 'all') {
      const [min, max] = filters.price.split('-').map(Number);
      if (max && (product.price < min || product.price > max)) return false;
      if (!max && product.price < min) return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-[#FAF6F3] dark:bg-[#1C1715] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle 
          title="Our Collection" 
          subtitle="Discover our curated selection of luxury clothing, each piece designed to be your perfect canvas."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFFDFC] dark:bg-[#2A1E19] rounded-2xl p-6 shadow-lg dark:shadow-[0_0_15px_rgba(201,164,122,0.25)] sticky top-24 transition-colors duration-500">
              <h3 className="font-serif text-xl text-[#2A1E19] dark:text-[#F5F2EF] mb-6 transition-colors duration-500">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2A1E19] dark:text-[#F5F2EF] mb-3 transition-colors duration-500">Category</label>
                <select 
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full p-3 border-2 border-[#8C7E77] dark:border-[#B8B0AC] rounded-xl bg-[#FAF6F3] dark:bg-[#1C1715] text-[#2A1E19] dark:text-[#F5F2EF] focus:border-[#C9A47A] focus:outline-none transition-colors duration-500"
                >
                  <option value="all">All Categories</option>
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2A1E19] dark:text-[#F5F2EF] mb-3 transition-colors duration-500">Price Range</label>
                <select 
                  value={filters.price}
                  onChange={(e) => setFilters({...filters, price: e.target.value})}
                  className="w-full p-3 border-2 border-[#8C7E77] dark:border-[#B8B0AC] rounded-xl bg-[#FAF6F3] dark:bg-[#1C1715] text-[#2A1E19] dark:text-[#F5F2EF] focus:border-[#C9A47A] focus:outline-none transition-colors duration-500"
                >
                  {priceRanges.map(range => (
                    <option key={range.value} value={range.value}>{range.label}</option>
                  ))}
                </select>
              </div>

              {/* Customizable Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#2A1E19] dark:text-[#F5F2EF] mb-3 transition-colors duration-500">Customizable</label>
                <select 
                  value={filters.customizable}
                  onChange={(e) => setFilters({...filters, customizable: e.target.value})}
                  className="w-full p-3 border-2 border-[#8C7E77] dark:border-[#B8B0AC] rounded-xl bg-[#FAF6F3] dark:bg-[#1C1715] text-[#2A1E19] dark:text-[#F5F2EF] focus:border-[#C9A47A] focus:outline-none transition-colors duration-500"
                >
                  <option value="all">All Items</option>
                  <option value="yes">Customizable Only</option>
                  <option value="no">Ready-to-Wear Only</option>
                </select>
              </div>

              <Button 
                variant="outline" 
                onClick={() => setFilters({category: 'all', price: 'all', customizable: 'all'})}
                className="w-full"
              >
                Clear Filters
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <p className="text-[#8C7E77] dark:text-[#B8B0AC] transition-colors duration-500">
                Showing {sortedProducts.length} of {data.products.length} products
              </p>
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-[#2A1E19] dark:text-[#F5F2EF] transition-colors duration-500">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border-2 border-[#8C7E77] dark:border-[#B8B0AC] rounded-lg bg-[#FAF6F3] dark:bg-[#1C1715] text-[#2A1E19] dark:text-[#F5F2EF] focus:border-[#C9A47A] focus:outline-none transition-colors duration-500"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#8C7E77] dark:text-[#B8B0AC] text-lg transition-colors duration-500">No products match your current filters.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setFilters({category: 'all', price: 'all', customizable: 'all'})}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
