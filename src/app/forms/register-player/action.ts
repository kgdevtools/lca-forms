"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";

const PlayerSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dob: z.string().min(1),
  parentName: z.string().optional(),
  parentContact: z.string().optional(),
  emergencyContact: z.string().min(1),
  emergencyPhone: z.string().min(1),
  experience: z.enum(["beginner", "intermediate", "advanced"]),
});

export async function registerPlayer(formData: any) {
  const parsed = PlayerSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error("Invalid form data");
  }

  // Insert into Supabase as JSONB in data_entry
  const { error } = await supabase
    .from("playerRegistrations")
    .insert({ data_entry: parsed.data });

  if (error) {
    throw new Error(error.message);
  }
  return { success: true };
}
