"use server";

import { z } from "zod";

const bookingFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  date: z.string().min(1),
  message: z.string().optional(),
});

export async function submitBookingRequest(data: unknown) {
  const parsedData = bookingFormSchema.safeParse(data);

  if (!parsedData.success) {
    return {
      success: false,
      message: "Invalid data provided.",
    };
  }

  // Here you would typically handle the data, e.g., send an email, save to a database.
  // For this example, we'll just log it and simulate success.
  console.log("Booking Request Received:", parsedData.data);

  return {
    success: true,
  };
}
