import { z } from "zod";
 
export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
}); 
 
export type SignUpSchema = typeof signUpSchema;
export type SignInSchema = typeof signInSchema;