// src/components/layout/footer.tsx
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Globe, BedDouble } from 'lucide-react';

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://tripadvisor.com', icon: Globe, label: 'TripAdvisor' },
];

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="#home" className="flex items-center gap-2 mb-4">
                <BedDouble className="h-8 w-8 text-primary" />
                <span className="font-headline text-2xl font-bold text-primary">Maharani Palace</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              N10/77 ARAJI NO 500, BLW ROAD, KAKARMATTA, VARANASI, Uttar Pradesh 221004, India
            </p>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(social => (
                <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className="text-muted-foreground hover:text-primary transition-colors">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Maharani Palace. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
