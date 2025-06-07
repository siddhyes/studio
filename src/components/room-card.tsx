
// src/components/room-card.tsx
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { LucideIcon } from 'lucide-react';

interface Amenity {
  icon: LucideIcon;
  name: string;
}

interface RoomCardProps {
  imageSrc: string;
  imageAlt: string;
  imageHint: string;
  roomType: string;
  description: string;
  amenities: Amenity[];
  pricePerNight: number;
}

export default function RoomCard({
  imageSrc,
  imageAlt,
  imageHint,
  roomType,
  description,
  amenities,
  pricePerNight,
}: RoomCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-full object-cover"
          data-ai-hint={imageHint}
        />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">{roomType}</CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-semibold mb-2 text-muted-foreground">Amenities:</h4>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
          {amenities.map((amenity) => (
            <li key={amenity.name} className="flex items-center gap-2">
              <amenity.icon className="h-4 w-4 text-accent" />
              <span>{amenity.name}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4 mt-auto">
        <div>
          <span className="text-xl font-bold text-primary">₹{pricePerNight.toLocaleString()}</span>
          <span className="text-sm text-muted-foreground"> / night</span>
        </div>
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Book Now</Button>
      </CardFooter>
    </Card>
  );
}
