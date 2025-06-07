import HeroSection from '@/components/sections/hero-section';
import RoomsSection from '@/components/sections/rooms-section';
import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <RoomsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
