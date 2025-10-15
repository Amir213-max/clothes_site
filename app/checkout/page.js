'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CheckoutPage() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    phone: '',
    deliveryMethod: 'standard',
    paymentMethod: 'card'
  });

  // Mock order data
  const orderItems = [
    { name: 'Classic Linen Shirt', price: 89.99, quantity: 1 },
    { name: 'Silk Wrap Dress', price: 149.50, quantity: 1 }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mock successful submission
    setTimeout(() => {
      router.push('/checkout/success');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#FAF6F3] flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-[#C9A47A] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-[#2A1E19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl text-[#2A1E19] mb-4">Processing Your Order</h2>
          <p className="text-[#8C7E77]">Please wait while we process your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <SectionTitle 
          title="Checkout" 
          subtitle="Complete your order with secure payment."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg">
                <h3 className="font-serif text-xl text-[#2A1E19] mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg">
                <h3 className="font-serif text-xl text-[#2A1E19] mb-6">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="md:col-span-2"
                  />
                  <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                  />
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-[#2A1E19] mb-2">Country</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-[#8C7E77] rounded-xl bg-[#FAF6F3] text-[#2A1E19] focus:border-[#C9A47A] focus:outline-none"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg">
                <h3 className="font-serif text-xl text-[#2A1E19] mb-6">Delivery Method</h3>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 border-[#8C7E77] rounded-xl cursor-pointer hover:border-[#C9A47A] transition-colors duration-300">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="standard"
                      checked={formData.deliveryMethod === 'standard'}
                      onChange={handleChange}
                      className="mr-4"
                    />
                    <div>
                      <div className="font-medium text-[#2A1E19]">Standard Delivery</div>
                      <div className="text-[#8C7E77]">5-7 business days • Free on orders over $100</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 border-[#8C7E77] rounded-xl cursor-pointer hover:border-[#C9A47A] transition-colors duration-300">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="express"
                      checked={formData.deliveryMethod === 'express'}
                      onChange={handleChange}
                      className="mr-4"
                    />
                    <div>
                      <div className="font-medium text-[#2A1E19]">Express Delivery</div>
                      <div className="text-[#8C7E77]">2-3 business days • $15</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg">
                <h3 className="font-serif text-xl text-[#2A1E19] mb-6">Payment Method</h3>
                <div className="space-y-4">
                  <label className="flex items-center p-4 border-2 border-[#8C7E77] rounded-xl cursor-pointer hover:border-[#C9A47A] transition-colors duration-300">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === 'card'}
                      onChange={handleChange}
                      className="mr-4"
                    />
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">💳</span>
                      <span className="font-medium text-[#2A1E19]">Credit Card</span>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 border-[#8C7E77] rounded-xl cursor-pointer hover:border-[#C9A47A] transition-colors duration-300">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                      className="mr-4"
                    />
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🅿️</span>
                      <span className="font-medium text-[#2A1E19]">PayPal</span>
                    </div>
                  </label>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full">
                Complete Order
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFFDFC] rounded-2xl p-6 shadow-lg sticky top-24">
              <h3 className="font-serif text-xl text-[#2A1E19] mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <div className="font-medium text-[#2A1E19]">{item.name}</div>
                      <div className="text-sm text-[#8C7E77]">Qty: {item.quantity}</div>
                    </div>
                    <div className="text-[#2A1E19]">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
                
                <div className="border-t border-[#8C7E77]/20 pt-4 space-y-2">
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
                  <div className="flex justify-between font-semibold text-lg">
                    <span className="text-[#2A1E19]">Total</span>
                    <span className="text-[#2A1E19]">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
