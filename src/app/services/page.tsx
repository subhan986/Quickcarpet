
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from '@/components/header';
import Footer from '@/components/footer';
import { services, pricing } from '@/lib/data';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

export default function ServicesPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-16 md:py-24">
          <ScrollReveal className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Services & Pricing</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Transparent pricing for top-quality cleaning services. No hidden fees.
            </p>
          </ScrollReveal>
        </section>

        {/* Services Section */}
        <section>
          <div className="container px-4 md:px-6 space-y-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.title}>
                <div key={service.title} className={`grid items-center gap-12 md:grid-cols-2 md:gap-16 ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={service.image}
                      width={600}
                      height={400}
                      alt={service.title}
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                      data-ai-hint={service.imageHint}
                    />
                  </div>
                  <div className={`space-y-4 ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <h2 className="text-3xl font-bold tracking-tighter">{service.title}</h2>
                    <p className="text-muted-foreground text-lg">{service.description}</p>
                    <ul className="space-y-2">
                      {service.details.map(detail => (
                        <li key={detail} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild>
                      <Link href="/#quote">Get a Quote</Link>
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Pricing Table */}
        <section id="pricing" className="w-full bg-secondary">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Pricing</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">The prices shown are estimates. The final cost will be confirmed after an on-site inspection.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
              
              <ScrollReveal>
                <Card>
                  <CardHeader>
                    <CardTitle>Carpet Cleaning (by Room)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Rooms</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pricing.perRoom.map(p => (
                          <TableRow key={p.rooms}>
                            <TableCell>{p.rooms}</TableCell>
                            <TableCell className="text-right font-medium">{p.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle>Upholstery Cleaning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Item</TableHead>
                          <TableHead className="text-right">Price</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {pricing.upholstery.map(p => (
                          <TableRow key={p.item}>
                            <TableCell>{p.item}</TableCell>
                            <TableCell className="text-right font-medium">{p.price}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.2} className="lg:col-span-2 xl:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Package Deals</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {pricing.packages.map(p => (
                      <div key={p.name} className="rounded-lg border bg-background p-4">
                          <h4 className="font-bold">{p.name}</h4>
                          <p className="text-sm text-muted-foreground">{p.details}</p>
                          <p className="mt-2 text-right text-lg font-bold text-primary">{p.price}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>

            </div>
          </div>
        </section>
        
        {/* Extra Services */}
        <section>
          <div className="container px-4 md:px-6">
             <ScrollReveal className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Additional Services</h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">Specialized treatments for specific needs.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pricing.extraServices.map((service, index) => (
                <ScrollReveal key={service.service} delay={index * 0.1}>
                  <Card key={service.service} className="text-center">
                    <CardHeader>
                      <CardTitle className="text-xl">{service.service}</CardTitle>
                      <CardDescription className="text-primary font-bold text-lg">{service.price}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
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
