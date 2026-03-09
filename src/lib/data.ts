import { CheckCircle, Leaf, Sparkles, Wind, Sofa, Grid, Bed, Bug, Droplets, SprayCan } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const ourServices: {title: string, icon: LucideIcon}[] = [
    { title: 'Carpet Cleaning', icon: Sparkles },
    { title: 'Upholstery Cleaning', icon: Sofa },
    { title: 'Rug Cleaning', icon: Grid },
    { title: 'Tile & Grout', icon: Grid },
    { title: 'Stain Removal', icon: SprayCan },
    { title: 'Leather Cleaning', icon: Sparkles },
    { title: 'Mattress Cleaning', icon: Bed },
    { title: 'Pest Control', icon: Bug },
    { title: 'Water Damage', icon: Droplets },
];

export const whyChooseUs = [
  'Over 10 years of experience in the industry',
  'We use the latest equipment and technology',
  'We are fully insured and certified',
  'Satisfaction guaranteed or your money back',
  'We use eco-friendly and non-toxic products',
  'No hidden costs or surprises',
];

export const deepCleanSystem = [
    {
        stage: 1,
        title: "Pre-Inspection",
        description: "We walk through your home with you to visually inspect the carpet. We identify potential permanent stains and give you an evaluation of expected results.",
    },
    {
        stage: 2,
        title: "Commercial Pre-vacuum",
        description: "Your carpet is pre-vacuumed with a commercial grade vacuum cleaner to remove bonded dry soil.",
    },
    {
        stage: 3,
        title: "Furniture Moving",
        description: "Sofas, chairs, tables and smaller items are carefully moved. Beds, dressers, and heavier pieces are left in place.",
    },
    {
        stage: 4,
        title: "Pre-spray",
        description: "A pre-conditioning agent is applied to break down traffic area soil and general spots for a more thorough cleaning.",
    },
    {
        stage: 5,
        title: "Pre-spot",
        description: "Difficult spots are pre-treated with special solutions to increase chances of removal.",
    },
    {
        stage: 6,
        title: "Soil Extraction and Rinse",
        description: "The carpet is then thoroughly rinsed with a powerful extraction cleaning system without over wetting the carpet or leaving a sticky residue behind.",
    },
    {
        stage: 7,
        title: "Neutralizer",
        description: "Every carpet that we clean is pH balanced so that there is no sticky residue left behind. This also leaves your carpet soft and fresh.",
    },
    {
        stage: 8,
        title: "Post Spot",
        description: "Any spots or stains still remaining will get extra treatment with our many specialty spotting solutions.",
    },
    {
        stage: 9,
        title: "Post Groom",
        description: "Your carpet is groomed with a professional groomer so that the pile of your carpet is standing tall when we leave. Post grooming helps the carpet pile dry faster and in the right position.",
    },
    {
        stage: 10,
        title: "Post Cleaning Inspection",
        description: "We will walk through your home with you to point out the cleaning results and make sure that you are completely thrilled with the job.",
    }
];

export const galleryImages = [
    {
        id: '1',
        before: 'https://picsum.photos/seed/fr-before1/600/400',
        after: 'https://picsum.photos/seed/fr-after1/600/400',
        beforeHint: 'dirty living room carpet',
        afterHint: 'clean living room carpet',
    },
    {
        id: '2',
        before: 'https://picsum.photos/seed/fr-before2/600/400',
        after: 'https://picsum.photos/seed/fr-after2/600/400',
        beforeHint: 'stained upholstery sofa',
        afterHint: 'clean upholstery sofa',
    },
    {
        id: '3',
        before: 'https://picsum.photos/seed/fr-before3/600/400',
        after: 'https://picsum.photos/seed/fr-after3/600/400',
        beforeHint: 'dirty office carpet',
        afterHint: 'clean office carpet',
    }
];

export const reviews = [
  {
    quote: 'Fibre Rinse did an amazing job on our carpets! They look brand new. The team was professional and friendly. Highly recommend!',
    author: 'Sarah L.',
    platform: 'Google',
    rating: 5,
  },
  {
    quote: 'I was impressed with the eco-friendly options. The results were fantastic and I feel good about the products used in my home.',
    author: 'Mike R.',
    platform: 'TrueLocal',
    rating: 5,
  },
  {
    quote: 'They managed to get out a coffee stain I thought was permanent. Fast service and great communication.',
    author: 'Jessica P.',
    platform: 'Yelp',
    rating: 5,
  },
];

export const faqData = [
  {
    question: "How long will it take for my carpets to dry?",
    answer: "Drying time depends on humidity levels, airflow and the type of carpet. Typically, it takes between 6 to 12 hours for carpets to be completely dry. We use powerful air movers to speed up the process."
  },
  {
    question: "Are your cleaning products safe for children and pets?",
    answer: "Yes, we use non-toxic and eco-friendly cleaning solutions that are safe for your entire family, including your beloved pets."
  },
  {
    question: "Do I need to vacuum before you arrive?",
    answer: "While it is helpful, it is not necessary. We will pre-vacuum your carpets with our commercial-grade equipment to ensure a deep clean."
  },
  {
    question: "Can you remove all stains?",
    answer: "We can remove most common household stains. However, some stains, such as those from dyes or that have been present for a long time, may be permanent. We will assess all stains and provide a realistic expectation."
  }
];

export const certifications = [
    { name: "IICRC", logo: "https://picsum.photos/seed/iicrc-logo/200/100", hint: "IICRC certified logo"},
    { name: "WoolSafe", logo: "https://picsum.photos/seed/woolsafe-logo/200/100", hint: "WoolSafe certified logo" },
    { name: "Jena Dyco", logo: "https://picsum.photos/seed/jenadyco-logo/200/100", hint: "Jena Dyco certified logo" },
];
