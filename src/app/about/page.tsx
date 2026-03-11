
import Image from 'next/image';
import { BadgeCheck, ShieldCheck, Heart, Star } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Quick Step</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-lg md:text-xl">
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
                  src="/pexels-michelangelo-buonarroti-4176300.jpg"
                  width={600}
                  height={400}
                  alt="Professional carpet cleaning"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  data-ai-hint="carpet cleaning professional"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
