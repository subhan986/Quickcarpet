import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Facebook } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { reviews } from '@/lib/data';

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
                <p className="text-muted-foreground md:text-lg">
                  Welcome to our professional carpet, upholstery, and hard floor cleaning company serving the Banbury area! We are a local cleaning company that specializes in providing top-notch cleaning services for carpets, upholstery, and hard floors. We focus on local carpet cleaning. Our team of experienced technicians are dedicated to delivering high-quality, reliable service to our customers in Banbury and the surrounding areas.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://picsum.photos/seed/ns-van/600/400"
                  width={600}
                  height={400}
                  alt="N&S Cleaning Service Van"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  data-ai-hint="cleaning service van"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="container px-4 md:px-6">
             <div className="max-w-3xl mx-auto text-center">
                <p className="text-muted-foreground md:text-lg">
                  We understand the importance of keeping your carpets, upholstery, and hard floors looking and feeling their best. This is why we offer a variety of services to meet your needs. Whether you're in need of a deep clean, stain removal, or regular maintenance, we've got you covered with our local carpet cleaning expertise. Our services include Carpet cleaning, Upholstery cleaning, Hard floor cleaning, Professional cleaning, Stain removal, Deep cleaning, Carpet maintenance, Floor restoration, and Carpet sanitizing.
                </p>
             </div>
          </div>
        </section>
        
        <section>
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
                <div className="relative order-last md:order-first">
                    <Image
                      src="https://picsum.photos/seed/ns-equipment/600/400"
                      width={600}
                      height={400}
                      alt="N&S Cleaning Equipment"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                      data-ai-hint="cleaning equipment"
                    />
                </div>
                <div className="space-y-4">
                    <p className="text-muted-foreground md:text-lg">
                        Our local company has been serving the Banbury community for many years. We've built a reputation for providing high-quality, reliable service. We use the latest techniques and equipment. Consequently, your carpets, upholstery, and hard floors are left looking and feeling fresh, clean, and revitalized. Consider us for your local needs.
                    </p>
                </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="w-full bg-background">
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
