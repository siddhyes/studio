// src/components/layout/header.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, BedDouble } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#rooms', label: 'Rooms' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinksContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      {navLinks.map((link) => (
        isMobile ? (
          <SheetClose asChild key={link.href}>
            <Link
              href={link.href}
              className="block py-3 px-4 text-lg hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
            >
              {link.label}
            </Link>
          </SheetClose>
        ) : (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium hover:text-primary transition-colors px-3 py-2"
          >
            {link.label}
          </Link>
        )
      ))}
    </>
  );


  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center gap-2">
            <BedDouble className="h-8 w-8 text-primary" />
            <span className="font-headline text-2xl font-bold text-primary">Maharani Palace</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-2">
            <NavLinksContent />
          </nav>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6 bg-background">
                <div className="flex flex-col items-start space-y-4 mt-8">
                  <NavLinksContent isMobile={true} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
