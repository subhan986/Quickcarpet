'use server';
/**
 * @fileOverview An AI agent for generating instant carpet cleaning quotes.
 *
 * - generateInstantQuote - A function that handles the instant quote generation process.
 * - InstantQuoteInput - The input type for the generateInstantQuote function.
 * - InstantQuoteOutput - The return type for the generateInstantQuote function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Input Schema
const InstantQuoteInputSchema = z.object({
  roomSizeSqFt: z.number().min(50).max(5000).describe('The size of the room in square feet. Must be between 50 and 5000.'),
  carpetType: z.enum(['synthetic', 'wool', 'blended', 'shag', 'berber']).describe('The type of carpet.'),
  carpetCondition: z.enum(['lightlySoiled', 'moderatelySoiled', 'heavilySoiled', 'heavilyStained']).describe('The general condition of the carpet.'),
  hasPetStains: z.boolean().describe('True if there are specific pet stains needing treatment.'),
  hasOdorRemoval: z.boolean().describe('True if odor removal service is required.'),
  notes: z.string().optional().describe('Any additional specific needs or details for the cleaning.'),
});
export type InstantQuoteInput = z.infer<typeof InstantQuoteInputSchema>;

// Output Schema
const InstantQuoteOutputSchema = z.object({
  estimatedCost: z.number().describe('The total estimated cost for the service, in USD.'),
  costBreakdown: z.object({
    baseCleaningCost: z.number().describe('The base cost for cleaning based on a standard rate.'),
    carpetTypeSurcharge: z.number().describe('Additional cost based on the carpet type.'),
    conditionSurcharge: z.number().describe('Additional cost based on the carpet condition.'),
    petStainTreatmentCost: z.number().describe('Cost for specific pet stain treatment.'),
    odorRemovalCost: z.number().describe('Cost for odor removal service.'),
    totalAdditionalCosts: z.number().describe('Sum of all surcharges and additional service costs.'),
  }).describe('A detailed breakdown of the estimated costs.'),
  disclaimer: z.string().describe('A disclaimer stating that this is an estimate and actual costs may vary.'),
});
export type InstantQuoteOutput = z.infer<typeof InstantQuoteOutputSchema>;

export async function generateInstantQuote(input: InstantQuoteInput): Promise<InstantQuoteOutput> {
  return instantQuoteFlow(input);
}

// Prompt definition
const instantQuotePrompt = ai.definePrompt({
  name: 'instantQuotePrompt',
  input: { schema: InstantQuoteInputSchema },
  output: { schema: InstantQuoteOutputSchema },
  prompt: `You are an expert carpet cleaning estimator for Fibre Rinse. Your task is to calculate an instant estimated cost for carpet cleaning services based on the provided details.

**Pricing Rules:**
1.  **Standard Base Rate**: 0.50 per square foot.
2.  **Carpet Type Surcharges (per square foot, added to the standard base rate)**:
    *   Synthetic: 0.00
    *   Wool: +0.10
    *   Blended: +0.05
    *   Shag: +0.15
    *   Berber: +0.08
3.  **Carpet Condition Surcharges (per square foot, added to the standard base rate)**:
    *   Lightly Soiled: 0.00
    *   Moderately Soiled: +0.15
    *   Heavily Soiled: +0.30
    *   Heavily Stained: +0.50 (This includes specialized stain removal beyond general cleaning)
4.  **Additional Services (flat rates)**:
    *   Pet Stain Treatment (if 'hasPetStains' is true): 50.00
    *   Odor Removal (if 'hasOdorRemoval' is true): 75.00

**Calculation Instructions:**
You must perform calculations step-by-step and round all final monetary values to two decimal places.

1.  **Determine per-square-foot rate adders:**
    *   Initialize carpetTypeRateAdder = 0.00.
    *   If carpetType is 'wool', set carpetTypeRateAdder to 0.10.
    *   If carpetType is 'blended', set carpetTypeRateAdder to 0.05.
    *   If carpetType is 'shag', set carpetTypeRateAdder to 0.15.
    *   If carpetType is 'berber', set carpetTypeRateAdder to 0.08.

    *   Initialize conditionRateAdder = 0.00.
    *   If carpetCondition is 'moderatelySoiled', set conditionRateAdder to 0.15.
    *   If carpetCondition is 'heavilySoiled', set conditionRateAdder to 0.30.
    *   If carpetCondition is 'heavilyStained', set conditionRateAdder to 0.50.

2.  **Calculate breakdown components:**
    *   baseCleaningCost = (Standard Base Rate: 0.50) * roomSizeSqFt.
    *   carpetTypeSurcharge = carpetTypeRateAdder * roomSizeSqFt.
    *   conditionSurcharge = conditionRateAdder * roomSizeSqFt.
    *   petStainTreatmentCost = If hasPetStains is true, then 50.00, else 0.00.
    *   odorRemovalCost = If hasOdorRemoval is true, then 75.00, else 0.00.
    *   totalAdditionalCosts = petStainTreatmentCost + odorRemovalCost.

3.  **Calculate estimatedCost:**
    *   estimatedCost = baseCleaningCost + carpetTypeSurcharge + conditionSurcharge + petStainTreatmentCost + odorRemovalCost.

**Customer Input Details:**
Room Size: {{{roomSizeSqFt}}} sq ft
Carpet Type: {{{carpetType}}}
Carpet Condition: {{{carpetCondition}}}
Has Pet Stains: {{{hasPetStains}}}
Needs Odor Removal: {{{hasOdorRemoval}}}
Additional Notes: {{{notes}}}

Provide the estimate strictly in the following JSON format. The disclaimer field should be a clear statement about the estimate being preliminary and subject to on-site inspection.
`,
});

// Flow definition
const instantQuoteFlow = ai.defineFlow(
  {
    name: 'instantQuoteFlow',
    inputSchema: InstantQuoteInputSchema,
    outputSchema: InstantQuoteOutputSchema,
  },
  async (input) => {
    const { output } = await instantQuotePrompt(input);
    if (!output) {
      throw new Error("Failed to generate a quote.");
    }
    return output;
  }
);
