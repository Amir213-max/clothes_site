# ÉTOILE - Luxury Fashion Customization Platform

A complete, responsive, and elegant front-end for a high-end clothing customization brand built with Next.js and Tailwind CSS.

## 🎯 Features

- **Luxury Design System**: Custom color palette with soft beige and espresso tones
- **Responsive Layout**: Mobile-first design that works on all devices
- **Product Customization**: Interactive designer tool for personalized clothing
- **E-commerce Functionality**: Complete shopping cart and checkout flow
- **User Management**: Profile pages with saved designs and order history
- **Modern UI Components**: Reusable components with elegant animations

## 🎨 Design System

- **Primary Background**: #FAF6F3 (soft ivory)
- **Main Text**: #3B302B (espresso brown)
- **Headings/Buttons**: #2A1E19 (dark mocha)
- **Accent/Hover**: #C9A47A (warm nude gold)
- **Secondary Background**: #FFFDFC (off white)
- **Muted Text**: #8C7E77 (taupe gray)
- **Fonts**: Playfair Display (titles) + Inter (body)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page
│   ├── shop/              # Shop page with filters
│   ├── product/[id]/      # Product detail pages
│   ├── designer/          # Clothing customization tool
│   ├── saved-designs/     # User's saved designs
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── profile/           # User profile
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI components
│   ├── layout/           # Layout components
│   └── home/             # Home page sections
├── data/                 # Mock data
│   └── data.json         # Product and user data
└── public/               # Static assets
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home**: Hero section, how it works, featured products, testimonials
- **Shop**: Product grid with filters and sorting
- **Product Detail**: Image gallery, product info, reviews, shipping info
- **Designer**: Interactive clothing customization tool
- **Saved Designs**: User's saved design collection
- **Cart**: Shopping cart with quantity management
- **Checkout**: Complete order form with payment options
- **Profile**: User account management with tabs
- **About**: Brand story, mission, values, team
- **Contact**: Contact form and business information

## 🛠️ Technologies

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4
- **Fonts**: Google Fonts (Playfair Display + Inter)
- **Icons**: Heroicons (SVG)
- **Images**: Next.js Image optimization
- **Data**: Local JSON files

## 🎨 Customization

The design system is fully customizable through Tailwind CSS variables in `app/globals.css`. All colors, fonts, and spacing can be easily modified to match your brand.

## 📦 Components

- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Input**: Form inputs with labels and error states
- **ProductCard**: Product display with customization options
- **SectionTitle**: Consistent page headers
- **Navbar**: Responsive navigation with mobile menu
- **Footer**: Links and social media icons

## 🔧 Development

The project uses modern React patterns with:
- Client-side state management
- Responsive design principles
- Accessibility best practices
- Performance optimization
- Clean component architecture

## 📄 License

This project is created for demonstration purposes. All rights reserved.