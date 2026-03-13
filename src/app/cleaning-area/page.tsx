
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { locations } from '@/lib/data';
import { MapPin, Tag, Truck } from 'lucide-react';
import Image from 'next/image';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function CleaningAreaPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-16 md:py-24">
          <ScrollReveal className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Cleaning Area</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-lg md:text-xl">
              We proudly serve a wide range of locations. Find out if we cover your area.
            </p>
          </ScrollReveal>
        </section>

        <section>
            <div className="container grid grid-cols-1 lg:grid-cols-5 gap-12 px-4 md:px-6">
                <ScrollReveal className="lg:col-span-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MapPin className="text-primary" />
                                Service Locations
                            </CardTitle>
                            <CardDescription>
                                Our team is ready to serve you in the following areas and beyond. If you don't see your location, please get in touch!
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="columns-2 md:columns-3 text-muted-foreground space-y-2">
                                {locations.map(location => <li key={location}>{location}</li>)}
                            </ul>
                        </CardContent>
                    </Card>

                     <div className="grid md:grid-cols-2 gap-8 mt-8">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Tag className="text-primary" />
                                    Area-Specific Deals
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We occasionally run promotions for specific neighborhoods. Currently, there are no area-specific deals, but check back soon or follow us on social media for updates!
                                </p>
                            </CardContent>
                        </Card>
                         <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Truck className="text-primary" />
                                    Travel Fees
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Services within a 20-mile radius of our London E17 office are free of travel charges. A small, transparent travel fee may apply for locations further out, which will be confirmed with your quote.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                </ScrollReveal>

                <ScrollReveal className="lg:col-span-2" delay={0.2}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Our Coverage Map</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                                <Image 
                                    src="https://picsum.photos/seed/map-placeholder/600/600" 
                                    alt="A static map showing the general service area."
                                    fill
                                    className="object-cover"
                                    data-ai-hint="map UK"
                                />
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">Our service area covers a wide range of locations across London and surrounding areas.</p>
                        </CardContent>
                    </Card>
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
