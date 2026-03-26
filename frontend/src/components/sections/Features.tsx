import { Leaf, Award, Zap, Palette } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    icon: Leaf,
    title: 'Tactile Paper',
    desc: 'Premium Italian cardstock with a light texture.',
  },
  {
    icon: Award,
    title: 'Natural Elements',
    desc: 'Real dried flowers and authentic wax seals.',
  },
  {
    icon: Zap,
    title: 'Fast Customization',
    desc: 'Add your personal text in 15 minutes.',
  },
  {
    icon: Palette,
    title: 'Unique Design',
    desc: 'Every card has its own character.',
  },
];

export const Features = () => (
  <section className="w-full bg-[#f7f3ef] dark:bg-black transition-colors duration-300">
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
        <Image src="/" alt="Process" fill className="object-cover" />
      </div>
      <div>
        <h2 className="text-4xl md:text-5xl font-serif font-medium mb-12">
          A real greeting —{' '}
          <span className="italic text-neutral-500">
            something you can feel
          </span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group">
              <div className="p-3 w-fit mb-4 rounded-full bg-[#e8e0d5] dark:bg-neutral-900 text-[#3e2723] dark:text-white transition-transform group-hover:scale-110">
                <f.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
