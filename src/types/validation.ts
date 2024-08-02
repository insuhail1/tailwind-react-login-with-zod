import { z } from "zod";

const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;

const emailOrUsernameSchema = z.union([
  z.string().email({ message: "Invalid email address" }),
  z.string().regex(usernameRegex, { message: "Invalid username" }),
]);

export const registerInputSchema = z.object({
  password: z.string().min(8),
  email: z.string().email(),
  username: z.string().regex(usernameRegex, { message: "Invalid username" }),
});

export const loginInputSchema = z.object({
  password: z.string().min(8),
  emailOrUsername: emailOrUsernameSchema,
});

export type LoginFormInput = z.infer<typeof loginInputSchema>;
export type RegisterFormInput = z.infer<typeof registerInputSchema>;
