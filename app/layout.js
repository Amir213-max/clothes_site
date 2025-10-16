import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import DynamicLayout from "@/components/layout/DynamicLayout";

export const metadata = {
  title: "ÉTOILE - Luxury Fashion Customization",
  description: "Design and purchase personalized luxury clothing with ÉTOILE. Create your perfect wardrobe with our elegant customization tools.",
};

export default function RootLayout({ children }) {
  // ✅ read theme directly from localStorage before hydration (via inline script)
  const themeScript = `
    (function() {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;

  return (
    <html lang="en" className="transition-colors duration-500">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <DynamicLayout>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
            <BackToTop />
          </DynamicLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
