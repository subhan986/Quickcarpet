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
import { CheckCircle, Star, Facebook, Instagram } from 'lucide-react';

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.65 4.28 1.7.03 1.31-.02 2.62-.01 3.93-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21-.68.07-1.35.16-2.02.27-1.03.16-2.02.42-2.99.81-.99.4-1.93.95-2.79 1.61-1.04.8-1.97 1.77-2.79 2.84-.81 1.06-1.5 2.23-2.07 3.49-.57 1.25-1.02 2.59-1.35 3.94-.34 1.36-.54 2.77-.61 4.18-.07 1.4-.04 2.81.04 4.21h-3.9V.02h3.9v7.71c.51-1.01 1.14-1.93 1.88-2.76.73-.82 1.58-1.5 2.5-2.06.92-.56 1.93-1 3-1.33.16-.05.33-.1.49-.15.42-.12.85-.22 1.28-.31.42-.08.85-.15 1.28-.21.42-.06.84-.1 1.27-.15.01 0 .01-.01.02-.01z" />
    </svg>
);


const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.885-.002 2.024.63 3.965 1.739 5.625l-1.168 4.244 4.387-1.149z" />
        <path d="M15.426 14.229c-.116-.243-.335-.411-.574-.44l-1.973-.448c-.201-.045-.402.016-.541.155-.138.139-.232.32-.232.515v.011c.01.244-.093.483-.289.654-.196.171-.47.288-.747.333-.276.045-.536-.016-.723-.155l-.011-.01c-1.631-.99-2.83-2.443-3.056-2.527-.226-.084-.442.016-.574.223-.133.208-.431.686-.531.818-.099.133-.231.155-.38.11l-1.117-.309c-.289-.084-.574-.265-.809-.515-.591-.626-1.042-1.393-1.35-2.248-.099-.265-.024-.559.189-.756l.484-.448.006-.005c.164-.15.259-.37.232-.591l-.011-.011c-.028-.22-.122-.422-.262-.574-.14-.151-.341-.244-.559-.244l-.693.021c-.265.005-.515.122-.686.309-.341.373-.639.833-.809 1.348-.151.483-.244 1.01-.22 1.536.024.526.164 1.042.38 1.536l.011.011c.541 1.259 1.408 2.373 2.527 3.299.782.639 1.631 1.117 2.65 1.458.289.099.574.155.882.155.457 0 .902-.122 1.288-.355.265-.163.483-.397.639-.686l.011-.011c.084-.179.14-.37.155-.564.016-.193-.016-.385-.099-.564l-.99-1.201z" />
    </svg>
);


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

        {/* Social Icons */}
        <div className="fixed top-1/2 -translate-y-1/2 right-0 z-40 flex flex-col rounded-l-md overflow-hidden shadow-lg">
          <a href="#" className="p-3 text-white transition-opacity hover:opacity-90" style={{backgroundColor: '#1877F2'}}>
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="p-3 text-white transition-opacity hover:opacity-90" style={{backgroundColor: '#000000'}}>
            <TikTokIcon className="w-5 h-5"/>
            <span className="sr-only">TikTok</span>
          </a>
          <a href="#" className="p-3 text-white transition-opacity hover:opacity-90" style={{background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)'}}>
            <Instagram size={20} />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        {/* Chat Widget */}
          <div className="fixed bottom-5 right-5 z-40">
          <a href="#" className="flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-lg transition-transform hover:scale-105">
              <WhatsappIcon className="w-6 h-6" />
              <span className="font-semibold hidden sm:inline">How can I help you?</span>
          </a>
        </div>

        {/* Hero Section */}
        <section id="hero" className="relative w-full overflow-hidden bg-white pt-24 pb-12 lg:pt-0 lg:pb-0">
          <div className="container px-4 md:px-6 h-full">
            <div className="grid lg:grid-cols-2 lg:gap-12 items-end h-full min-h-[calc(100vh-104px)]">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left z-10 pb-12 lg:pb-32">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-800">
                  Professional Cleaning For Carpets, Upholstery And Hard Floors.
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl mx-auto lg:mx-0">
                  Local Experts in Deep Cleaning, Stain Removal and Restoration.
                </p>
                <div className="mx-auto lg:mx-0">
                  <Button asChild size="lg" className="font-bold">
                    <Link href="#quote">GET A FREE QUOTE</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[300px] sm:h-[400px] lg:h-full w-full lg:-mr-32">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="https://picsum.photos/seed/cleaning-van/1200/800"
                    layout="fill"
                    objectFit="cover"
                    alt="Cleaning service van"
                    className="opacity-20"
                    data-ai-hint="cleaning service van"
                  />
                </div>
                <div className="absolute bottom-0 right-0 lg:right-auto lg:left-0 lg:w-[110%] h-full z-10">
                  <div className="relative w-full h-full">
                     <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] sm:w-[32rem] sm:h-[32rem] lg:w-[36rem] lg:h-[36rem] bg-primary rounded-full transform lg:translate-x-1/4" />
                     <div className="absolute bottom-0 right-0 w-full h-[95%]">
                       <Image
                         src="https://picsum.photos/seed/cleaning-tech/600/800"
                         layout="fill"
                         objectFit="contain"
                         objectPosition="bottom center"
                         alt="Cleaning technician"
                         className="z-20"
                         data-ai-hint="cleaning service technician professional"
                       />
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-2 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">OUR SERVICES</h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                We offer a wide range of cleaning services to meet your needs. All our services are carried out by our trained and certified technicians.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">WHY CHOOSE QUICK STEP?</h2>
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
                    className="rounded-lg shadow-lg"
                    data-ai-hint="carpet cleaning technician"
                />
             </div>
           </div>
        </section>
        
        {/* 10 Stage Clean */}
        <section id="deep-clean" className="w-full bg-secondary">
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
                        <Image src={img.before} width={600} height={400} alt="Before" data-ai-hint={img.beforeHint} className="rounded-lg shadow-md" />
                        <p className="text-center mt-2 font-semibold">BEFORE</p>
                      </div>
                      <div>
                        <Image src={img.after} width={600} height={400} alt="After" data-ai-hint={img.afterHint} className="rounded-lg shadow-md" />
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
        <section id="reviews" className="w-full bg-secondary">
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
         <section id="certifications" className="w-full bg-secondary">
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
