'use client';

import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { reviews } from '@/lib/data';
import Footer from '@/components/footer';
import Header from '@/components/header';
import InstantQuoteForm from '@/components/instant-quote-form';
import { Star, Facebook, Instagram, Sparkles, ScrollText, Sofa, Building2, BedDouble, ClipboardCheck } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import TextType from '@/components/TextType';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const SocialIcons = dynamic(() => import('@/components/SocialIcons'), { ssr: false });
const ChatWidget = dynamic(() => import('@/components/ChatWidget'), { ssr: false });


const StarRating = ({ rating, className }: { rating: number, className?: string }) => (
  <div className={`flex gap-0.5 ${className}`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ))}
  </div>
);

const proServices = [
  { title: "Carpet Cleaning", icon: Sparkles, },
  { title: "Rug Cleaning", icon: ScrollText, },
  { title: "Sofa Cleaning", icon: Sofa, },
  { title: "Commercial Carpet Cleaning", icon: Building2, },
  { title: "Mattress Cleaning", icon: BedDouble, },
  { title: "End of Tenancy Cleaning", icon: ClipboardCheck, },
];


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
              <ScrollReveal x={-100} className="flex flex-col justify-center space-y-6 text-center lg:text-left z-10 lg:self-center">
                <div className="min-h-[7rem]">
                  <TextType
                    as="h1"
                    text="Professional Cleaning for Carpets, Upholstery & Floors."
                    className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground"
                    typingSpeed={25}
                    loop={false}
                    showCursor={true}
                    cursorCharacter="_"
                  />
                </div>
                <p className="max-w-[600px] text-foreground text-lg md:text-xl mx-auto lg:mx-0">
                  Local Experts in Deep Cleaning, Stain Removal and Restoration.
                </p>
                <div className="mx-auto lg:mx-0">
                  <div className="animated-gradient-border">
                    <Button asChild size="lg" className="font-bold border-0">
                      <Link href="#quote">GET A FREE QUOTE</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal x={100} delay={0.2} className="relative h-[320px] sm:h-[380px] lg:h-[520px] w-full mt-8 lg:mt-0">
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

        {/* Professional Services */}
        <section id="professional-services" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Professional Cleaning Services</h2>
               <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                We offer a wide range of cleaning services to meet your needs, from carpets to commercial spaces.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
                  {proServices.map((service) => (
                      <Card key={service.title} className="group flex flex-col items-center justify-start p-4 text-center transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:scale-105 hover:-translate-y-1 border bg-card hover:border-primary">
                          <service.icon className="w-10 h-10 text-primary mb-3 transition-transform group-hover:scale-110" />
                          <h3 className="font-semibold text-sm md:text-base h-12 flex items-center justify-center">{service.title}</h3>
                      </Card>
                  ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Quote Form */}
        <section id="quote" className="w-full bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Request A Free Quote</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Fill out the form below. We'll send your message directly to our team via WhatsApp.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="flex justify-center">
              <InstantQuoteForm />
            </ScrollReveal>
          </div>
        </section>

        {/* Before & After Section */}
        <section id="before-after" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">See the Transformation</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Our cleaning process delivers stunning results. Check out these before and after shots.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <ScrollReveal>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image src="https://picsum.photos/seed/before1/600/400" width={600} height={400} alt="Before cleaning" className="w-full h-auto" data-ai-hint="dirty carpet" />
                      <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider">BEFORE</div>
                    </div>
                    <div className="relative">
                      <Image src="https://picsum.photos/seed/after1/600/400" width={600} height={400} alt="After cleaning" className="w-full h-auto" data-ai-hint="clean carpet" />
                      <div className="absolute top-2 left-2 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider">AFTER</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image src="https://picsum.photos/seed/before2/600/400" width={600} height={400} alt="Before cleaning" className="w-full h-auto" data-ai-hint="stained sofa" />
                      <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider">BEFORE</div>
                    </div>
                    <div className="relative">
                      <Image src="https://picsum.photos/seed/after2/600/400" width={600} height={400} alt="After cleaning" className="w-full h-auto" data-ai-hint="clean sofa" />
                      <div className="absolute top-2 left-2 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider">AFTER</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <Image src="https://picsum.photos/seed/before3/600/400" width={600} height={400} alt="Before cleaning" className="w-full h-auto" data-ai-hint="dirty rug" />
                      <div className="absolute top-2 left-2 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider">BEFORE</div>
                    </div>
                    <div className="relative">
                      <Image src="https://picsum.photos/seed/after3/600/400" width={600} height={400} alt="After cleaning" className="w-full h-auto" data-ai-hint="clean rug" />
                      <div className="absolute top-2 left-2 bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-bold tracking-wider">AFTER</div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="w-full bg-background">
           <div className="container px-4 md:px-6">
            <ScrollReveal className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">EXCELLENT</h2>
                <StarRating rating={5} className="justify-center"/>
                <p className="text-muted-foreground">Based on 177 reviews</p>
                <div className="flex items-center justify-center gap-2">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span className="font-bold text-lg text-[#1877F2]">facebook</span>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Carousel 
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-6xl mx-auto"
              >
                <CarouselContent>
                  {reviews.map((review, index) => (
                      <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/4">
                          <div className="p-1 h-full">
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
                          </div>
                      </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
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
