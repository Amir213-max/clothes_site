import data from '@/data/data.json';
import HeroSection from '@/components/home/HeroSection';
import FeatureSteps from '@/components/home/FeatureSteps';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Testimonials from '@/components/home/Testimonials';
import Newsletter from '@/components/home/Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF6F3]">
      <HeroSection />
      <FeatureSteps />
      <FeaturedProducts products={data.products} />
      <Testimonials testimonials={data.testimonials} />
      <Newsletter />
    </div>
  );
}
