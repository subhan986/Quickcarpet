import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building, FileText, Calendar, CheckSquare, Briefcase } from 'lucide-react';

const aboutDetails = [
  {
    icon: Building,
    title: 'Registered Office Address',
    content: '195 Wood Street, London, England, E17 3NU',
  },
  {
    icon: CheckSquare,
    title: 'Company Status',
    content: 'Active',
  },
  {
    icon: Building,
    title: 'Company Type',
    content: 'Private limited Company',
  },
  {
    icon: Calendar,
    title: 'Incorporated On',
    content: '12 December 2025',
  },
];

const financialDetails = [
    {
        title: 'Accounts',
        content: 'First accounts made up to 31 December 2026 due by 12 September 2027',
    },
    {
        title: 'Confirmation Statement',
        content: 'First statement date 11 December 2026 due by 25 December 2026',
    }
]

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-secondary py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About N&S Cleaning Service</h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                Your trusted partner for professional cleaning services.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-20">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {aboutDetails.map((item) => (
                        <Card key={item.title}>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <item.icon className="w-8 h-8 text-primary" />
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.content}</p>
                            </CardContent>
                        </Card>
                    ))}
                     <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Briefcase className="w-8 h-8 text-primary" />
                            <CardTitle>Nature of Business (SIC)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">81222 - Specialised cleaning services</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-8 grid gap-8 md:grid-cols-2">
                     {financialDetails.map((item) => (
                        <Card key={item.title}>
                            <CardHeader className="flex flex-row items-center gap-4">
                                <FileText className="w-8 h-8 text-primary" />
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.content}</p>
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
