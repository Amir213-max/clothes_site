'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock subscription
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <section className="py-20 bg-[#2A1E19] text-[#FAF6F3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Stay in Style
            </h2>
            <p className="text-xl text-[#8C7E77] max-w-2xl mx-auto">
              Get the latest updates on new collections, exclusive offers, and styling tips delivered to your inbox.
            </p>
          </div>

          {isSubscribed ? (
            <div className="bg-[#C9A47A] text-[#2A1E19] px-6 py-4 rounded-xl font-medium">
              Thank you for subscribing! Welcome to the ÉTOILE family.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="md" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
