
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { reviews } from '@/lib/data';
import Footer from '@/components/footer';
import Header from '@/components/header';
import InstantQuoteForm from '@/components/instant-quote-form';
import { Star, Facebook, Instagram } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import SocialIcons from '@/components/SocialIcons';
import ChatWidget from '@/components/ChatWidget';
import { Separator } from '@/components/ui/separator';


const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.28 1.7.03 1.31-.02 2.62-.01 3.93-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21h-3.9V.02h3.9v7.71c.51-1.01 1.14-1.93 1.88-2.76.73-.82 1.58-1.5 2.5-2.06.92-.56 1.93-1 3-1.33.16-.05.33-.1.49-.15.42-.12.85-.22 1.28-.31.42-.08.85-.15 1.28-.21.42-.06.84-.1 1.27-.15.01 0 .01-.01.02-.01z" />
    </svg>
);


const StarRating = ({ rating, className }: { rating: number, className?: string }) => (
  <div className={`flex gap-0.5 ${className}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);


export default function Home() {

  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">

        <SocialIcons />
        <ChatWidget />

        {/* Hero Section */}
        <section id="hero" className="relative w-full overflow-hidden bg-white pt-12 lg:pt-16 pb-0">
           <div className="absolute inset-0 z-0">
              <Image
                src="/Gemini_Generated_Image_vt8051vt8051vt80.png"
                layout="fill"
                objectFit="cover"
                alt="Cleaning service van background"
                className="opacity-20"
                data-ai-hint="cleaning service van"
              />
            </div>
          <div className="container px-4 md:px-6 h-full">
            <div className="grid lg:grid-cols-2 lg:gap-12 items-end h-full">
              <ScrollReveal className="flex flex-col justify-center space-y-6 text-center lg:text-left z-10 lg:self-center">
                <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
                  Pristine Cleaning for Carpets, Upholstery & Floors.
                </h1>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl mx-auto lg:mx-0">
                  Local Experts in Deep Cleaning, Stain Removal and Restoration.
                </p>
                <div className="mx-auto lg:mx-0">
                  <Button asChild size="lg" className="font-bold border-2 border-primary-foreground/50">
                    <Link href="#quote">GET A FREE QUOTE</Link>
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2} className="relative h-[320px] sm:h-[380px] lg:h-[520px] w-full mt-8 lg:mt-0">
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="relative w-full h-full">
                     <Image
                       src="/3.png"
                       layout="fill"
                       objectFit="contain"
                       objectPosition="bottom center"
                       alt="Cleaning technician"
                       className="z-10 drop-shadow-2xl"
                     />
                   </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services-overview" className="w-full bg-background">
          <ScrollReveal className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="rounded-2xl border-primary/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4 flex flex-col h-full">
                  <h3 className="text-2xl font-bold">Carpet Cleaning</h3>
                  <p className="text-muted-foreground">Enrich your space with professional carpet care.</p>
                  <Separator className="bg-primary/50"/>
                  <ul className="space-y-2 text-muted-foreground flex-grow">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Stain removal and deep cleaning</span></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Residential and commercial carpet cleaning</span></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Specialized treatments for dirt and tough stains</span></li>
                  </ul>
                  <Button asChild className="w-full font-bold mt-4">
                    <Link href="#quote">ASK FOR QUOTE</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="rounded-2xl border-primary/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4 flex flex-col h-full">
                  <h3 className="text-2xl font-bold">Upholstery Cleaning</h3>
                  <p className="text-muted-foreground">Support your favorite surfaces with expert care.</p>
                  <Separator className="bg-primary/50"/>
                  <ul className="space-y-2 text-muted-foreground flex-grow">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Comprehensive cleaning for various fabrics</span></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Stain and allergen removal</span></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Speedy drying process with complimentary upholstery dryers</span></li>
                  </ul>
                  <Button asChild className="w-full font-bold mt-4">
                    <Link href="#quote">ASK FOR QUOTE</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-primary/20 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8 space-y-4 flex flex-col h-full">
                  <h3 className="text-2xl font-bold">Hard Floor Cleaning</h3>
                  <p className="text-muted-foreground">Take your floors to the next level with professional care.</p>
                  <Separator className="bg-primary/50"/>
                  <ul className="space-y-2 text-muted-foreground flex-grow">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Hardwood floor cleaning and restoration</span></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Floor sealing, waxing, and buffing</span></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 mt-[9px] rounded-full bg-muted-foreground shrink-0" /><span>Complete maintenance for all hard surfaces</span></li>
                  </ul>
                  <Button asChild className="w-full font-bold mt-4">
                    <Link href="#quote">ASK FOR QUOTE</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </section>

        {/* Quote Form */}
        <section id="quote" className="w-full bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">GET AN INSTANT QUOTE</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Use our simple tool to get a price estimate for your carpet cleaning needs.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="max-w-4xl mx-auto">
              <InstantQuoteForm />
            </ScrollReveal>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="w-full bg-secondary">
           <div className="container px-4 md:px-6">
            <ScrollReveal className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">EXCELLENT</h2>
                <StarRating rating={5} className="justify-center"/>
                <p className="text-muted-foreground">Based on {reviews.length} reviews</p>
                <div className="flex items-center justify-center gap-2">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span className="font-bold text-lg text-[#1877F2]">facebook</span>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
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
            </ScrollReveal>
           </div>
        </section>
        
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

    
