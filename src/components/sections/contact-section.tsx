// src/components/sections/contact-section.tsx
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";


const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // In a real app, you'd send this data to a server or email service.
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We will get back to you soon.",
    });
    form.reset();
  }

  const hotelAddress = "N10/77 ARAJI NO 500, BLW ROAD, KAKARMATTA, VARANASI, Uttar Pradesh 221004, India";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotelAddress)}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services or want to make a reservation, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us about your inquiry..." rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Send Message</Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-muted-foreground">{hotelAddress}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+919936336644" className="text-muted-foreground hover:text-primary transition-colors">+91 99363 36644</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-accent mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:reservations@maharanipalace.com" className="text-muted-foreground hover:text-primary transition-colors">reservations@maharanipalace.com</a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg overflow-hidden">
               <CardHeader>
                <CardTitle className="font-headline text-2xl">Our Location</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="block aspect-video relative">
                  <Image
                    src="https://placehold.co/600x400.png"
                    alt="Map showing Maharani Palace location"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="city map"
                  />
                   <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center">
                    <span className="text-white bg-black/50 px-4 py-2 rounded font-semibold">View on Google Maps</span>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
