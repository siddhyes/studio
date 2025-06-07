// src/components/sections/rooms-section.tsx
import RoomCard from '@/components/room-card';
import { Wifi, Tv2, ThermometerSun, Coffee, GlassWater, Home, Bath, LayoutPanelLeft } from 'lucide-react';

const roomsData = [
  {
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Comfortable single room',
    imageHint: 'modern bedroom',
    roomType: 'Single Room',
    description: 'Perfect for solo travelers, offering comfort and convenience.',
    amenities: [
      { icon: Wifi, name: 'Free Wi-Fi' },
      { icon: Tv2, name: 'Flat Screen TV' },
      { icon: ThermometerSun, name: 'Air Conditioning' },
    ],
    pricePerNight: 3500,
  },
  {
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Spacious double room',
    imageHint: 'hotel bedroom',
    roomType: 'Double Room',
    description: 'Ideal for couples or friends, with ample space and amenities.',
    amenities: [
      { icon: Wifi, name: 'Free Wi-Fi' },
      { icon: Tv2, name: 'Flat Screen TV' },
      { icon: ThermometerSun, name: 'Air Conditioning' },
      { icon: Coffee, name: 'Coffee Maker' },
    ],
    pricePerNight: 5000,
  },
  {
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Luxurious deluxe room',
    imageHint: 'luxury bedroom',
    roomType: 'Deluxe Room',
    description: 'Experience enhanced comfort with premium furnishings and extra space.',
    amenities: [
      { icon: Wifi, name: 'Free Wi-Fi' },
      { icon: Tv2, name: 'Smart TV' },
      { icon: ThermometerSun, name: 'Air Conditioning' },
      { icon: GlassWater, name: 'Mini-bar' },
      { icon: LayoutPanelLeft, name: 'Private Balcony' },
    ],
    pricePerNight: 7500,
  },
  {
    imageSrc: 'https://placehold.co/600x400.png',
    imageAlt: 'Elegant suite with living area',
    imageHint: 'hotel suite',
    roomType: 'Suite',
    description: 'The epitome of luxury, featuring a separate living area and top-tier amenities.',
    amenities: [
      { icon: Wifi, name: 'High-speed Wi-Fi' },
      { icon: Tv2, name: 'Large Smart TV' },
      { icon: ThermometerSun, name: 'Climate Control' },
      { icon: GlassWater, name: 'Stocked Mini-bar' },
      { icon: Home, name: 'Living Area' },
      { icon: Bath, name: 'Jacuzzi Tub' },
    ],
    pricePerNight: 12000,
  },
];

export default function RoomsSection() {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Our Accommodations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of beautifully appointed rooms and suites, each designed for your utmost comfort and relaxation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {roomsData.map((room) => (
            <RoomCard key={room.roomType} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}
