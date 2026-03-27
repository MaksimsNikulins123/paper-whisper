import { Header } from '@/src/components/layout/Header';
import { Hero } from '@/src/components/sections/Hero';
import { PromoCards } from '@/src/components/sections/PromoCards';
import { Values } from '@/src/components/sections/Values';
import { ProductShowcase } from '@/src/components/sections/ProductShowcase';
import { Stats } from '@/src/components/sections/Stats';
import { Reviews } from '@/src/components/sections/Reviews';
import { CTA } from '@/src/components/sections/CTA';
import { Newsletter } from '@/src/components/sections/Newsletter';
import { FAQ } from '@/src/components/sections/FAQ';
import { Compare } from '@/src/components/sections/Compare';
import { Footer } from '@/src/components/layout/Foooter';

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
