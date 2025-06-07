// src/components/sections/about-section.tsx
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
              Discover Maharani Palace
            </h2>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              Discover the legacy of Maharani Palace, a jewel in Varanasi's crown. Our commitment to excellence ensures an unforgettable stay, blending rich history with modern sophistication. 
            </p>
            <p className="text-lg text-foreground mb-4 leading-relaxed">
              We pride ourselves on providing personalized service and creating cherished memories for every guest. From our elegantly designed rooms to our exceptional dining options, every detail is crafted to enhance your experience.
            </p>
             <p className="text-muted-foreground leading-relaxed">
              Located conveniently near major attractions, Maharani Palace is your perfect gateway to exploring the vibrant culture and spirituality of Varanasi.
            </p>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Elegant interior of Maharani Palace"
              layout="fill"
              objectFit="cover"
              data-ai-hint="hotel lobby interior"
              className="transform transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
