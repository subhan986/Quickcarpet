
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-16 md:py-24">
          <ScrollReveal className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground text-lg md:text-xl">
              We&apos;re here to help. Contact us with any questions or to schedule a service.
            </p>
          </ScrollReveal>
        </section>

        <section>
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 md:px-6">
            <div className="lg:col-span-1 space-y-8">
              <ScrollReveal>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Phone className="text-primary" /> Contact Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-muted-foreground">
                    <div className="flex items-start gap-4">
                      <Phone size={20} className="mt-1 text-primary shrink-0"/>
                      <div>
                          <p className="font-semibold text-foreground">Phone</p>
                          <a href="tel:07806997720" className="hover:text-primary">07806997720</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Mail size={20} className="mt-1 text-primary shrink-0"/>
                      <div>
                          <p className="font-semibold text-foreground">Email</p>
                          <a href="mailto:info@quickstep.com" className="hover:text-primary">info@quickstep.com</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <Clock className="text-primary" /> Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                          <span>Monday - Sunday</span>
                          <span>8am - 8pm</span>
                      </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl">
                      <MapPin className="text-primary" /> Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">
                    <p>Suite RA01, 195-197 Wood Street, London</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <ScrollReveal className="lg:col-span-2" delay={0.3}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.093399982402!2d-0.01579642337775531!3d51.56749820521482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761e6794175373%3A0x19a79addc8868843!2s195-197%20Wood%20St%2C%20London%20E17%203NU%2C%20UK!5e0!3m2!1sen!2sus!4v1716911634891!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
               <div className="text-center mt-12">
                    <h3 className="text-2xl font-bold mb-4">Or Get An Instant Quote Online</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        No time to call? Use our AI-powered quote tool to get a quick estimate for your carpet cleaning needs right now.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/#quote">Get Instant Quote</Link>
                    </Button>
                </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
