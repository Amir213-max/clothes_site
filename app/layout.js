import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

export const metadata = {
  title: "ÉTOILE - Luxury Fashion Customization",
  description: "Design and purchase personalized luxury clothing with ÉTOILE. Create your perfect wardrobe with our elegant customization tools.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="transition-colors duration-500">
      <body className="antialiased bg-[#FAF6F3] dark:bg-[#1C1715] text-[#3B302B] dark:text-[#F5F2EF] transition-colors duration-500">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
