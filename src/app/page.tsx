import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { galleryImages, services, testimonials } from '@/lib/data';
import { CheckCircle, Leaf, Sparkles, Wind } from 'lucide-react';
import BookingForm from '@/components/booking-form';
import Footer from '@/components/footer';
import Header from '@/components/header';
import InstantQuoteForm from '@/components/instant-quote-form';
import { Button } from '@/components/ui/button';

export default function Home() {
  const serviceIcons = {
    DeepClean: <Sparkles className="h-8 w-8 text-primary" />,
    EcoFriendly: <Leaf className="h-8 w-8 text-primary" />,
    StainRemoval: <CheckCircle className="h-8 w-8 text-primary" />,
    QuickDry: <Wind className="h-8 w-8 text-primary" />,
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <section id="hero" className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    A Deeper Clean for a Fresher Home
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Experience the FreshStep difference. Our expert team uses advanced techniques and eco-friendly solutions to bring new life to your carpets.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="font-semibold">
                    <a href="#quote">Get an Instant Quote</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="font-semibold">
                    <a href="#services">Our Services</a>
                  </Button>
                </div>
              </div>
              <Image
                src="https://picsum.photos/seed/freshstep-hero/600/400"
                width={600}
                height={400}
                alt="Hero"
                data-ai-hint="clean living room"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section id="services" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-accent text-accent-foreground">Our Services</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  What We Offer
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From deep cleaning to stubborn stain removal, we have the right solution for your carpets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.title} className="grid gap-2 text-center">
                   <div className="flex justify-center">{serviceIcons[service.icon as keyof typeof serviceIcons]}</div>
                  <h3 className="font-headline text-xl font-bold">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="quote" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <Badge className="bg-accent text-accent-foreground">Instant Quote</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Get a Price Estimate Now
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Use our AI-powered tool to get an instant estimate for your carpet cleaning needs. Just provide a few details about your space.
                </p>
              </div>
              <div className="w-full">
                <InstantQuoteForm />
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <Badge className="bg-accent text-accent-foreground">Our Work</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  Before & After
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See the dramatic results of our professional cleaning services.
                </p>
              </div>
            </div>
            <div className="grid gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((img) => (
                <div key={img.id} className="grid gap-4">
                  <div className="space-y-2">
                    <Image
                      src={img.before}
                      width={600}
                      height={400}
                      alt="Before"
                      data-ai-hint={img.beforeHint}
                      className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                    />
                    <p className="text-center font-medium">Before</p>
                  </div>
                  <div className="space-y-2">
                    <Image
                      src={img.after}
                      width={600}
                      height={400}
                      alt="After"
                      data-ai-hint={img.afterHint}
                      className="aspect-video w-full overflow-hidden rounded-lg object-cover"
                    />
                    <p className="text-center font-medium">After</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="w-full">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                 <Badge className="bg-accent text-accent-foreground">Testimonials</Badge>
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We take pride in our work, and our clients agree! Here’s what they have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center justify-center gap-4 p-6 text-center">
                    <p className="text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} data-ai-hint="person" />
                        <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="w-full bg-secondary">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
               <Badge className="bg-accent text-accent-foreground">Book Now</Badge>
              <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready for a Fresh Start?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Fill out the form below to request a service appointment. We'll get back to you shortly to confirm the details.
              </p>
            </div>
            <div className="mx-auto w-full max-w-lg">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
