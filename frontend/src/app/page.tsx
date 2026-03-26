import Header from '@/src/components/layout/Header';
import Hero from '../components/sections/Hero';
// import { Features } from '../components/sections/Features';
import { PromoCards } from '../components/sections/PromoCards';
import { Values } from '../components/sections/Values';
import { ProductShowcase } from '../components/sections/ProductShowcase';

// import HeroFirstSection from '@/src/components/sections/HeroFirstSection';
// import HeroSecondSection from '@/src/components/sections/HeroSecondSection';
// import { Hero } from "@/components/sections/Hero";
// import { Features } from "@/components/sections/Features";
// import { Categories } from "@/components/sections/Categories";
// import { Reviews } from "@/components/sections/Reviews";
// import Features from '@/components/sections/Features';
// import Categories from '@/components/sections/Categories';
// import Stats from '@/components/sections/Stats';
// import Testimonials from '@/components/sections/Testimonials';
// import FAQ from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <PromoCards />
      <Values />
      <ProductShowcase />
      {/* <Features /> */}
      {/* <HeroFirstSection /> */}
      {/* <HeroSecondSection /> */}
      {/* <Features /> */}
      {/* <Categories /> */}
      {/* <Stats /> */}
      {/* <Testimonials /> */}
      {/* <FAQ /> */}
    </>
  );
}
