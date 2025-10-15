import Link from 'next/link';
import Button from '@/components/ui/Button';
import SectionTitle from '@/components/ui/SectionTitle';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-[#FAF6F3] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#FFFDFC] rounded-2xl p-12 shadow-xl">
          <div className="w-24 h-24 bg-[#C9A47A] rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-[#2A1E19]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <SectionTitle 
            title="Order Confirmed!" 
            subtitle="Thank you for your purchase. Your order has been successfully placed and you will receive a confirmation email shortly."
            className="mb-8"
          />
          
          <div className="bg-[#FAF6F3] rounded-xl p-6 mb-8">
            <h3 className="font-serif text-lg text-[#2A1E19] mb-4">Order Details</h3>
            <div className="space-y-2 text-sm text-[#8C7E77]">
              <div className="flex justify-between">
                <span>Order Number:</span>
                <span className="font-medium text-[#2A1E19]">#ET-2024-001</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery:</span>
                <span className="font-medium text-[#2A1E19]">5-7 business days</span>
              </div>
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="font-medium text-[#2A1E19]">$239.49</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/profile">
              <Button size="lg">
                View Order History
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
