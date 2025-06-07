"use client";
// src/components/sections/hero-section.tsx
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white">
      <Image
        src="https://storage.googleapis.com/gweb-aip-visual-integ.appspot.com/experiments/SIMPLE_UPLOAD_DEMO/mahara-2a3e2033-7059-4ae8-adca-54eb68628d08.jpeg"
        alt="Maharani Palace luxurious facade"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
        data-ai-hint="hotel facade"
        priority // Added priority as it's LCP
      />
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-headline text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
          Welcome to Maharani Palace
        </h1>
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-7 w-7 text-primary fill-primary" />
          ))}
        </div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Experience unparalleled luxury and comfort at Maharani Palace, where traditional Indian hospitality meets contemporary elegance. Nestled in the heart of Varanasi, our palace offers a serene escape with world-class amenities and breathtaking views.
        </p>
        <div className="animate-fade-in-up animation-delay-300">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-md shadow-lg transition-transform hover:scale-105">
            <Link href="#rooms">Explore Our Rooms</Link>
          </Button>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animation-delay-300 { animation-delay: 0.3s; }
      `}</style>
    </section>
  );
}
