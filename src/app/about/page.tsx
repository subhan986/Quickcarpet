
import Image from 'next/image';
import { BadgeCheck, ShieldCheck, Heart, Users, Star } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { team, certifications } from '@/lib/data';

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Quick Step</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Your trusted partner for professional carpet and upholstery cleaning.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section>
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Who We Are</h2>
                <p className="text-muted-foreground text-lg">
                  Founded over a decade ago, Quick Step was born from a passion for bringing new life to homes and businesses through pristine cleaning. We started as a small local service and have since grown into a trusted name in the industry, known for our reliability and exceptional results. Our mission is to provide a healthier, cleaner environment for our clients through professional and eco-friendly cleaning services.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://picsum.photos/seed/carpet-cleaning-team/600/400"
                  width={600}
                  height={400}
                  alt="Company history collage"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  data-ai-hint="carpet cleaning team"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Our Core Values</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">What drives us to deliver the best service possible.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Trust & Reliability</h3>
                <p className="mt-2 text-muted-foreground">We are committed to being a service you can count on, showing up on time and delivering consistent, high-quality results.</p>
              </div>
              <div className="text-center">
                <Heart className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Eco-Friendly</h3>
                <p className="mt-2 text-muted-foreground">We use safe, non-toxic, and environmentally friendly cleaning solutions to protect your family, pets, and the planet.</p>
              </div>
              <div className="text-center">
                <Star className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Attention to Detail</h3>
                <p className="mt-2 text-muted-foreground">From the initial inspection to the final touches, we pride ourselves on our meticulous approach to every job.</p>
              </div>
               <div className="text-center">
                <BadgeCheck className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Satisfaction Guarantee</h3>
                <p className="mt-2 text-muted-foreground">Your satisfaction is our priority. If you're not happy with our work, we'll make it right. That's our promise.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications */}
        <section className="w-full">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Our Certifications & Accreditations</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">Proof of our commitment to quality and professionalism.</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <Card key={cert.name}>
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <Image src={cert.logo} alt={`${cert.name} Logo`} width={120} height={80} className="mb-4 object-contain" data-ai-hint="certification logo" />
                    <h3 className="text-lg font-bold">{cert.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
