
import Image from 'next/image';
import { BadgeCheck, ShieldCheck, Heart, Star } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-16 md:py-24">
          <ScrollReveal className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Quick Step</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Your trusted partner for professional carpet and upholstery cleaning.
            </p>
          </ScrollReveal>
        </section>

        {/* Who We Are */}
        <section>
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <ScrollReveal className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Who We Are</h2>
                <p className="text-muted-foreground text-lg">
                  We understand the importance of keeping your carpets, upholstery, and hard floors looking and feeling their best. This is why we offer a variety of services to meet your needs. Whether you’re in need of a deep clean, stain removal, or regular maintenance, we’ve got you covered with our local carpet cleaning expertise. Our services include Carpet cleaning, Upholstery cleaning, Hard floor cleaning, Professional cleaning, Stain removal, Deep cleaning, Carpet maintenance, Floor restoration, and Carpet sanitizing.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our local company, based at Suite RA01, 195-197 Wood Street, London, has been serving the community for many years. We’ve built a reputation for providing high-quality, reliable service. We use the latest techniques and equipment. Consequently, your carpets, upholstery, and hard floors are left looking and feeling fresh, clean, and revitalized. Consider us for your local needs.
                </p>
              </ScrollReveal>
              <ScrollReveal className="relative" delay={0.2}>
                <Image
                  src="/pexels-michelangelo-buonarroti-4176300.jpg"
                  width={600}
                  height={400}
                  alt="Professional carpet cleaning"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  data-ai-hint="carpet cleaning professional"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
