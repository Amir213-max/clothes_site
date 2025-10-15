'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CartPage() {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Classic Linen Shirt',
      price: 89.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1520975922071-a45c1d389a0e?auto=format&fit=crop&w=300&q=80',
      customizable: true
    },
    {
      id: 2,
      name: 'Silk Wrap Dress',
      price: 149.50,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c0?auto=format&fit=crop&w=300&q=80',
      customizable: false
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle 
          title="Shopping Cart" 
          subtitle="Review your items and proceed to checkout."
          className="mb-12"
        />

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-[#C9A47A]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🛒</span>
            </div>
            <h3 className="font-serif text-2xl text-[#2A1E19] mb-4">Your Cart is Empty</h3>
            <p className="text-[#8C7E77] mb-8 max-w-md mx-auto">
              Start shopping to add items to your cart, or create a custom design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop">
                <Button size="lg">
                  Start Shopping
                </Button>
              </Link>
              <Link href="/designer">
                <Button variant="outline" size="lg">
                  Create Design
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-6">
                      <div className="relative w-24 h-24 rounded-xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-serif text-xl text-[#2A1E19] mb-1">
                          {item.name}
                        </h3>
                        <p className="text-2xl font-semibold text-[#2A1E19] mb-2">
                          ${item.price}
                        </p>
                        {item.customizable && (
                          <span className="inline-block bg-[#C9A47A] text-[#2A1E19] px-3 py-1 rounded-full text-sm font-medium">
                            Customizable
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border-2 border-[#8C7E77] rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-2 text-[#2A1E19] hover:bg-[#8C7E77]/10"
                          >
                            -
                          </button>
                          <span className="px-4 py-2 text-[#2A1E19]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-2 text-[#2A1E19] hover:bg-[#8C7E77]/10"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="font-serif text-xl text-[#2A1E19] mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-[#8C7E77]">Subtotal</span>
                    <span className="text-[#2A1E19]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#8C7E77]">Shipping</span>
                    <span className="text-[#2A1E19]">
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {shipping > 0 && (
                    <p className="text-sm text-[#8C7E77]">
                      Add ${(100 - subtotal).toFixed(2)} more for free shipping
                    </p>
                  )}
                  <div className="border-t border-[#8C7E77]/20 pt-4">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#2A1E19]">Total</span>
                      <span className="font-semibold text-[#2A1E19]">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button size="lg" className="w-full mb-4">
                    Proceed to Checkout
                  </Button>
                </Link>
                
                <Link href="/shop">
                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
