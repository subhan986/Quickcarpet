
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";

import {
  generateInstantQuote,
  type InstantQuoteInput,
  type InstantQuoteOutput,
} from "@/ai/flows/instant-quote-tool";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, WandSparkles } from "lucide-react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

const InstantQuoteInputSchema = z.object({
  roomSizeSqFt: z.coerce.number().min(50, "Minimum size is 50 sq ft.").max(5000, "Maximum size is 5000 sq ft."),
  carpetType: z.enum(['synthetic', 'wool', 'blended', 'shag', 'berber'], { required_error: "Please select a carpet type." }),
  carpetCondition: z.enum(['lightlySoiled', 'moderatelySoiled', 'heavilySoiled', 'heavilyStained'], { required_error: "Please select the carpet condition." }),
  hasPetStains: z.boolean().default(false),
  hasOdorRemoval: z.boolean().default(false),
  notes: z.string().optional(),
});

export default function InstantQuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quote, setQuote] = useState<InstantQuoteOutput | null>(null);

  const form = useForm<InstantQuoteInput>({
    resolver: zodResolver(InstantQuoteInputSchema),
    defaultValues: {
      roomSizeSqFt: 150,
      hasPetStains: false,
      hasOdorRemoval: false,
      notes: "",
    },
  });

  async function onSubmit(data: InstantQuoteInput) {
    setIsSubmitting(true);
    setQuote(null);
    try {
      const result = await generateInstantQuote(data);
      if(result) {
        setQuote(result);
      } else {
        throw new Error("AI did not return a quote.");
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Quote Generation Failed",
        description: "We couldn't generate a quote at this time. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className={cn(
        "items-start gap-8",
        quote || isSubmitting ? "grid lg:grid-cols-2" : "flex justify-center"
      )}
    >
      <Card className={cn("w-full bg-card/50", !(quote || isSubmitting) && "max-w-2xl")}>
        <CardContent className="p-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <motion.div 
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FormField
                  control={form.control}
                  name="roomSizeSqFt"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Room Size (sq ft)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="e.g., 150" {...field} className="bg-background"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="carpetType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Carpet Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select a type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="synthetic">Synthetic</SelectItem>
                          <SelectItem value="wool">Wool</SelectItem>
                          <SelectItem value="blended">Blended</SelectItem>
                          <SelectItem value="shag">Shag</SelectItem>
                          <SelectItem value="berber">Berber</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FormField
                  control={form.control}
                  name="carpetCondition"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Carpet Condition</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="lightlySoiled">Lightly Soiled</SelectItem>
                          <SelectItem value="moderatelySoiled">Moderately Soiled</SelectItem>
                          <SelectItem value="heavilySoiled">Heavily Soiled</SelectItem>
                          <SelectItem value="heavilyStained">Heavily Stained</SelectItem>
                        </SelectContent>
                      </Select>
                     <FormMessage />
                  </FormItem>
                )}
              />
              </motion.div>

              <motion.div 
                className="space-y-4"
                variants={fieldVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                 <FormField
                  control={form.control}
                  name="hasPetStains"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-background transition-all duration-200 hover:shadow-lg hover:scale-[1.01]">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Pet Stain Treatment</FormLabel>
                        <FormDescription>
                          Add specialized treatment for pet stains.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="hasOdorRemoval"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 bg-background transition-all duration-200 hover:shadow-lg hover:scale-[1.01]">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Odor Removal</FormLabel>
                        <FormDescription>
                          Add our deep odor removal service.
                        </FormDescription>
                      </div>
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
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Notes (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Any specific areas of concern?" {...field} className="bg-background" />
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
                transition={{ duration: 0.5, delay: 0.5 }}
              >
              <Button type="submit" className="w-full font-semibold" disabled={isSubmitting}>
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <WandSparkles className="mr-2 h-4 w-4" />
                )}
                Generate Quote
              </Button>
              </motion.div>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {(quote || isSubmitting) && (
        <div className="flex items-center justify-center">
            {isSubmitting && (
                <Card className="animate-pulse w-full bg-card/50">
                    <CardHeader>
                        <CardTitle>Generating Your Quote...</CardTitle>
                        <CardDescription>Our AI is calculating the best price for you.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="h-4 bg-muted rounded w-3/4"></div>
                        <div className="h-4 bg-muted rounded w-1/2"></div>
                        <div className="h-4 bg-muted rounded w-2/3"></div>
                    </CardContent>
                </Card>
            )}

            {quote && (
                <Card className="animate-in fade-in-50 w-full bg-card/50">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl text-primary">Your Estimated Quote</CardTitle>
                        <CardDescription>Here is the breakdown of your estimated cleaning cost.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-3xl font-bold font-headline text-primary">
                            <span>Total</span>
                            <span>${quote.estimatedCost.toFixed(2)}</span>
                        </div>
                        <Separator />
                        <div className="space-y-2 text-muted-foreground">
                            <p className="flex justify-between"><span>Base Cleaning Cost</span> <span>${quote.costBreakdown.baseCleaningCost.toFixed(2)}</span></p>
                            <p className="flex justify-between"><span>Carpet Type Surcharge</span> <span>${quote.costBreakdown.carpetTypeSurcharge.toFixed(2)}</span></p>
                            <p className="flex justify-between"><span>Condition Surcharge</span> <span>${quote.costBreakdown.conditionSurcharge.toFixed(2)}</span></p>
                            <p className="flex justify-between"><span>Pet Stain Treatment</span> <span>${quote.costBreakdown.petStainTreatmentCost.toFixed(2)}</span></p>
                            <p className="flex justify-between"><span>Odor Removal</span> <span>${quote.costBreakdown.odorRemovalCost.toFixed(2)}</span></p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <p className="text-xs text-muted-foreground">{quote.disclaimer}</p>
                    </CardFooter>
                </Card>
            )}
        </div>
      )}
    </div>
  );
}
