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
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.44 1.28 4.91L2 22l5.09-1.34c1.47.81 3.12 1.3 4.91 1.3h.01c5.52 0 10-4.48 10-10S17.52 2 12 2zm4.43 12.01c-.13.27-.47.43-.98.5-1.09.15-2.27-.19-3.23-1.1l-.01-.01c-1.3-1.23-2.1-2.9-2.16-3.13-.06-.23.47-.36.47-.36s.25-.11.41-.11c.16 0 .3.04.44.33.14.29.47.96.47.96s.09.21.04.36c-.05.15-.11.23-.23.35-.12.12-.26.26-.39.39-.13.13-.26.28-.15.52.11.24.69.96 1.52 1.76.67.65 1.27.99 1.82 1.1.25.06.39.04.53-.06.14-.1.45-.53.58-.7.13-.17.26-.15.41-.13s.92.43 1.08.51c.16.08.27.12.3.18.03.06.02.36-.11.63z"/>
    </svg>
);

const WhatsappQuoteSchema = z.object({
  rooms: z.string().min(1, { message: "Please specify which rooms you'd like cleaned." }),
  postcode: z.string().min(3, { message: "Please enter a valid postal code." }),
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
      postcode: "",
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
*Postcode:* ${data.postcode}
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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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
                    variants={fieldVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <FormField
                        control={form.control}
                        name="postcode"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Postcode</FormLabel>
                            <FormControl>
                            <Input placeholder="Your postal code" {...field} className="bg-background"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                </motion.div>
            </div>

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
                    <FormLabel>Email Address (Optional)</FormLabel>
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
                    <FormLabel>Phone Number (Optional)</FormLabel>
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
