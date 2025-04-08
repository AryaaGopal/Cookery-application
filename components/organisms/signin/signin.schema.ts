import z from 'zod';
/**
 * Schema for sign-in form data.
 * @param translate - Translate function to handle internationalization.
 * @returns - Returns zod schema for signin component.
 */
export const signInSchema = z.object({
  /** Schema for the email field */
  email: z.string().email({ message: 'INVALID_EMAIL' }).min(1, { message: 'EMAIL_REQUIRED' }),
  /** Schema for the password field */
  password: z.string().min(1, { message: 'ENTER_YOUR_PASSWORD' }),
});

/**
 * Type representing the inferred type of the sign-in form schema.
 */
export type FormData = z.infer<typeof signInSchema>;
