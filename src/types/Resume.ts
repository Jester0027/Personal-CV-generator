import { z } from "zod";

export const keysSchema = z.object({
  summary: z.string(),
  mainSkills: z.string(),
  projects: z.string(),
});

export type Keys = z.infer<typeof keysSchema>;

export const resumeSchema = z.object({
  fullName: z.string(),
  title: z.string(),
  phoneNumber: z.string(),
  location: z.string(),
  email: z.string(),
  website: z.object({
    display: z.string(),
    link: z.string(),
  }),
  summary: z.string(),
  skills: z.array(z.string()).min(3),
  experience: z.array(
    z.object({
      title: z.string(),
      subtitle: z.string(),
      company: z.string().optional(),
      actions: z.array(z.string()),
    }),
  ),
});

export type Resume = z.infer<typeof resumeSchema>;
