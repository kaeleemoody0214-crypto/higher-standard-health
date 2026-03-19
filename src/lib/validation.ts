import { z } from "zod";

export const leadSchema = z.object({
  goal: z.string().min(1),
  experience: z.string().min(1),
  struggle: z.string().min(1),
  commitment: z.string().min(1),
  budget: z.string().min(1),
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional().or(z.literal("")),
  occupation: z.string().min(2).max(120),
  age: z.string().min(1).max(3),
  utmSource: z.string().max(120).optional().or(z.literal("")),
  utmMedium: z.string().max(120).optional().or(z.literal("")),
  utmCampaign: z.string().max(120).optional().or(z.literal("")),
  utmContent: z.string().max(120).optional().or(z.literal("")),
  utmTerm: z.string().max(120).optional().or(z.literal("")),
  website: z.string().max(0).optional().or(z.literal(""))
});

export type LeadPayload = z.infer<typeof leadSchema>;
