
import Image from 'next/image';
import Link from 'next/link';
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
import TextType from '@/components/TextType';


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
              <ScrollReveal x={-100} className="flex flex-col justify-center space-y-6 text-center lg:text-left z-10 lg:self-center">
                <div className="min-h-[7rem]">
                  <TextType
                    as="h1"
                    text="Pristine Cleaning for Carpets, Upholstery & Floors."
                    className="text-3xl font-bold tracking-tight sm:text-5xl text-foreground"
                    typingSpeed={25}
                    loop={false}
                    showCursor
                    cursorCharacter="_"
                  />
                </div>
                <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl mx-auto lg:mx-0">
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

        {/* Services Overview */}
        <section id="services-overview" className="w-full bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal>
                <Card className="rounded-2xl border-2 border-primary/50 transition-all duration-300 h-full hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-12 space-y-4 flex flex-col h-full">
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
              </ScrollReveal>
              
              <ScrollReveal delay={0.1}>
                <Card className="rounded-2xl border-2 border-primary/50 transition-all duration-300 h-full hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-12 space-y-4 flex flex-col h-full">
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
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <Card className="rounded-2xl border-2 border-primary/50 transition-all duration-300 h-full hover:shadow-xl hover:scale-105 hover:-translate-y-2">
                  <CardContent className="p-12 space-y-4 flex flex-col h-full">
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
              </ScrollReveal>
            </div>
          </div>
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
                <p className="text-muted-foreground">Based on 177 reviews</p>
                <div className="flex items-center justify-center gap-2">
                    <Facebook className="w-5 h-5 text-[#1877F2]" />
                    <span className="font-bold text-lg text-[#1877F2]">facebook</span>
                </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {reviews.map((review, index) => (
                    <Card key={index} className="h-full">
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
                ))}
              </div>
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

    

    
