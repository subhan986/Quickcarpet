"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
                <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={20} height={20} className="mr-2" />
                Send Request via WhatsApp
              </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
