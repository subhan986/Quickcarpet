import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ourServices, whyChooseUs, deepCleanSystem, galleryImages, reviews, faqData, certifications } from '@/lib/data';
import Footer from '@/components/footer';
import Header from '@/components/header';
import InstantQuoteForm from '@/components/instant-quote-form';
import { CheckCircle, Star } from 'lucide-react';

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
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

        {/* Hero Section */}
        <section id="hero" className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white">
          <Image
            src="https://picsum.photos/seed/fibrerinse-main/1920/1080"
            layout="fill"
            objectFit="cover"
            alt="Clean carpet background"
            className="z-0 brightness-50"
            data-ai-hint="clean carpet macro shot"
          />
          <div className="relative z-10 space-y-4 px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">FIBRE RINSE</h1>
            <p className="text-lg md:text-2xl font-semibold">PROFESSIONAL CARPET CLEANING</p>
            <p className="text-md md:text-lg">Servicing Melbourne and surrounding suburbs</p>
            <Button asChild size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              <Link href="#quote">GET QUOTE</Link>
            </Button>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="w-full bg-secondary text-secondary-foreground">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">OUR SERVICES</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                We offer a wide range of cleaning services to meet your needs. All our services are carried out by our trained and certified technicians.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {ourServices.map(service => (
                <div key={service.title} className="flex flex-col items-center text-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className="w-full bg-background text-foreground">
           <div className="container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">WHY CHOOSE FIBRE RINSE?</h2>
                <p className="text-muted-foreground">We are the only company you will need to get your carpets and upholstery cleaned.</p>
                <ul className="space-y-3">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
             </div>
             <div>
                <Image 
                    src="https://picsum.photos/seed/why-choose-us/600/400"
                    width={600}
                    height={400}
                    alt="Technician cleaning carpet"
                    className="rounded-lg"
                    data-ai-hint="carpet cleaning technician"
                />
             </div>
           </div>
        </section>
        
        {/* 10 Stage Clean */}
        <section id="deep-clean" className="w-full bg-secondary text-secondary-foreground">
            <div className="container px-4 md:px-6">
                 <div className="text-center space-y-2 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">10 STAGE DEEP-CLEAN SYSTEM</h2>
                    <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                        Our comprehensive 10-stage cleaning process ensures the most thorough clean possible, leaving your carpets fresh, soft and healthy.
                    </p>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
                    {deepCleanSystem.map((item, index) => (
                        <div key={item.stage} className={`flex md:items-center mb-8 md:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            <div className="flex-1 md:text-right md:pr-12 data-[side=right]:text-left data-[side=right]:pl-12" data-side={index % 2 === 0 ? 'left' : 'right'}>
                                <h3 className="text-xl font-bold text-primary mb-2">STAGE {item.stage} - {item.title}</h3>
                                <p className="text-muted-foreground">{item.description}</p>
                            </div>
                            <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold z-10">
                               {item.stage}
                            </div>
                            <div className="flex-1"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* Before & After */}
        <section id="gallery" className="w-full bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">BEFORE & AFTER</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">See the difference we can make!</p>
            </div>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {galleryImages.map((img) => (
                  <CarouselItem key={img.id}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Image src={img.before} width={600} height={400} alt="Before" data-ai-hint={img.beforeHint} className="rounded-lg" />
                        <p className="text-center mt-2 font-semibold">BEFORE</p>
                      </div>
                      <div>
                        <Image src={img.after} width={600} height={400} alt="After" data-ai-hint={img.afterHint} className="rounded-lg" />
                        <p className="text-center mt-2 font-semibold">AFTER</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="text-primary border-primary hover:bg-primary hover:text-primary-foreground" />
            </Carousel>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="w-full bg-secondary text-secondary-foreground">
           <div className="container px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">OUR REVIEWS</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <Card key={index} className="bg-card text-card-foreground">
                        <CardContent className="p-6 text-center space-y-4">
                            <StarRating rating={review.rating} />
                            <p className="text-muted-foreground">"{review.quote}"</p>
                            <div className="font-semibold">{review.author}</div>
                            <div className="text-sm font-bold text-primary">{review.platform}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
           </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="w-full bg-background text-foreground">
          <div className="container px-4 md:px-6 max-w-3xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
               <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">FREQUENTLY ASKED QUESTIONS</h2>
               <p className="text-muted-foreground">Have questions? We have answers. If you can't find what you are looking for, please contact us.</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Certifications */}
         <section id="certifications" className="w-full bg-secondary text-secondary-foreground">
          <div className="container px-4 md:px-6">
             <div className="text-center space-y-2 mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">CERTIFICATIONS</h2>
            </div>
            <div className="flex justify-center items-center gap-8 md:gap-16 flex-wrap">
                {certifications.map(cert => (
                    <Image 
                        key={cert.name}
                        src={cert.logo}
                        width={150}
                        height={75}
                        alt={`${cert.name} logo`}
                        className="object-contain"
                        data-ai-hint={cert.hint}
                    />
                ))}
            </div>
          </div>
        </section>
        
        {/* Quote Form */}
        <section id="quote" className="w-full bg-background text-foreground">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">GET AN INSTANT QUOTE</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Use our simple tool to get a price estimate for your carpet cleaning needs.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <InstantQuoteForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
