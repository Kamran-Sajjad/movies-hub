import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email."),
  password: z.string().min(1, "Please enter your password."),
});

export const signupSchema = z.object({
  name: z.string().min(1, "Please enter your name."),
  email: z
    .string()
    .min(1, "Please enter your email.")
    .email("Please enter a valid email."),
  password: z.string().min(1, "Please enter your password."),
  gender: z.enum(["Male", "Female"], {
    required_error: "Please select a gender.",
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms." }),
  }),
});
