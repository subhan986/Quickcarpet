
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Facebook } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { reviews, locations } from '@/lib/data';

const StarRating = ({ rating, className }: { rating: number, className?: string }) => (
  <div className={`flex gap-0.5 ${className}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
            </div>
          </div>
        </section>
        
        <section>
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <p className="text-foreground text-lg md:text-xl">
                  Welcome to Quick Step Carpets & Upholstery Dry Cleaning! We are a professional cleaning company that specializes in providing top-notch cleaning services for carpets, upholstery, and hard floors. Our team of experienced technicians are dedicated to delivering high-quality, reliable service to our customers.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/giorgio-trovato-5TXz228u4eo-unsplash.jpg"
                  width={600}
                  height={400}
                  alt="Modern living room with clean carpet"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  data-ai-hint="clean carpet living room"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Our Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p><strong>Company Name:</strong> Quick Step Carpets & Upholstery Dry Cleaning</p>
                        <p><strong>Phone:</strong> <a href="tel:07806997720" className="hover:text-primary">07806997720</a></p>
                        <p><strong>Address:</strong> Suite RA01, 195-197 Wood Street, London</p>
                        <p><strong>Hours:</strong> Monday – Sunday, 8:00 AM – 8:00 PM</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Our Service Areas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="columns-2 md:columns-3 text-muted-foreground space-y-1">
                            {locations.map(location => <li key={location}>{location}</li>)}
                        </ul>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>

        <section id="reviews" className="w-full bg-secondary">
           <div className="container px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">EXCELLENT</h2>
                <StarRating rating={5} className="justify-center"/>
                <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
                <div className="flex items-center justify-center gap-2">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span className="font-bold text-lg text-[#1877F2]">facebook</span>
                </div>
            </div>
            <Carousel
              opts={{ loop: true }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <Card className="h-full">
                            <CardContent className="p-6 text-left space-y-4 flex flex-col h-full">
                                <div className="flex items-start gap-4">
                                    <Avatar>
                                        <AvatarImage src={review.avatar} alt={review.author} data-ai-hint="person face" />
                                        <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1">
                                      <div className="flex justify-between items-start">
                                        <div>
                                          <p className="font-semibold">{review.author}</p>
                                          <p className="text-sm text-muted-foreground">{review.time}</p>
                                        </div>
                                        <Facebook className="w-5 h-5 text-[#1877F2]" />
                                      </div>
                                      <StarRating rating={review.rating} className="mt-2" />
                                    </div>
                                </div>
                                <p className="text-muted-foreground flex-grow">"{review.quote}"</p>
                                <Link href="#" className="text-sm text-primary hover:underline">Read more</Link>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground -left-4" />
              <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground -right-4" />
            </Carousel>
           </div>
        </section>

        <section>
            <div className="container flex justify-center">
                <Button asChild size="lg" className="font-bold rounded-full">
                    <Link href="/#quote">GET A FREE QUOTE</Link>
                </Button>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
