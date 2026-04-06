import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { PromoCards } from '@/components/sections/PromoCards';
import { Values } from '@/components/sections/Values';
import { ProductShowcase } from '@/components/sections/ProductShowcase';
import { Stats } from '@/components/sections/Stats';
import { Reviews } from '@/components/sections/Reviews';
import { CTA } from '@/components/sections/CTA';
import { Newsletter } from '@/components/sections/Newsletter';
import { FAQ } from '@/components/sections/FAQ';
import { Compare } from '@/components/sections/Compare';
import { Footer } from '@/components/layout/Foooter';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <PromoCards />
      <Values />
      <ProductShowcase />
      <Stats />
      <Reviews />
      <CTA />
      <Newsletter />
      <FAQ />
      <Compare />
      <Footer />
    </>
  );
}
