import { z } from "zod";

export const signupSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(50),
  email: z.string().email({ message: "Enter valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});
