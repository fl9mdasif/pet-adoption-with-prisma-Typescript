import { z } from "zod";

export const userProfileUpdateSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
  }),
});
