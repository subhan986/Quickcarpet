
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.49 1.32 4.95L2 22l5.25-1.38c1.41.81 3.02 1.24 4.7 1.24h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM16.9 14.8c-.22-.11-.76-.38-.88-.42-.12-.04-.21-.06-.3.11-.1.17-.33.42-.41.51-.08.09-.16.1-.3.04-.14-.06-.59-.22-1.13-.69s-.9-1.03-1.02-1.21c-.12-.17-.01-.26.09-.36.09-.09.2-.24.3-.36.1-.12.13-.21.2-.36s.01-.27-.04-.37c-.05-.1-.3-.71-.41-.97-.11-.26-.22-.22-.3-.22h-.28c-.1 0-.24.03-.36.17-.12.14-.47.46-.47.92s.48 1.07.55 1.15c.07.08.95 1.45 2.3 2.02.32.13.57.21.77.27.35.1.65.09.89-.06.27-.15.76-.31.87-.61s.11-.56.08-.61c-.03-.06-.11-.1-.22-.16z"/>
    </svg>
);

const WhatsappQuoteSchema = z.object({
  rooms: z.string().min(1, { message: "Please specify which rooms you'd like cleaned." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal('')),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }).optional().or(z.literal('')),
  message: z.string().min(10, { message: "Please add a short message (min. 10 characters)." }).max(500, { message: "Message is too long (max. 500 characters)."}),
});

type WhatsappQuoteInput = z.infer<typeof WhatsappQuoteSchema>;

export default function WhatsappQuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WhatsappQuoteInput>({
    resolver: zodResolver(WhatsappQuoteSchema),
    defaultValues: {
      rooms: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: WhatsappQuoteInput) {
    setIsSubmitting(true);
    
    const formattedMessage = `
*New Quote Request*

*Rooms:* ${data.rooms}
*Email:* ${data.email || 'Not provided'}
*Phone:* ${data.phone || 'Not provided'}

*Message:*
${data.message}
    `.trim();

    const whatsappUrl = `https://wa.me/447806997720?text=${encodeURIComponent(formattedMessage)}`;
    
    window.open(whatsappUrl, '_blank');

    toast({
        title: "Redirecting to WhatsApp",
        description: "Your message has been prepared. Please send it in WhatsApp.",
    });

    form.reset();
    setIsSubmitting(false);
  }

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Card className="w-full max-w-2xl bg-card/50">
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <motion.div
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <FormField
                control={form.control}
                name="rooms"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rooms to Clean</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Living Room, 2 Bedrooms" {...field} className="bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your@email.com" {...field} className="bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="Your contact number" {...field} className="bg-background"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about what you need cleaned, any specific stains, etc." {...field} className="bg-background" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div
              variants={fieldVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button type="submit" className="w-full font-semibold" disabled={isSubmitting}>
                <WhatsappIcon className="mr-2 h-5 w-5" />
                Send Request via WhatsApp
              </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
