import { z } from 'zod';

export const signupSchema = z.object({
  name: z.string().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(8, {
      message: 'Password must be at least 8 characters long',
    })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
    })
    .regex(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
    })
    .regex(/[0-9]/, { message: 'Password must contain at least one digit' })
    .regex(/[\W_]/, {
      message: 'Password must contain at least one special character',
    }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email' }),
  password: z.string().min(1, { message: 'Password is required' }),
});

export const contactSchema = z.object({
  name: z.string().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email' }),
  phone: z.string().min(1, { message: 'This field is required' }),
  message: z.string().min(1, { message: 'This field is required' }),
});

export const profileSchema = z
  .object({
    name: z.string().min(1, { message: 'This field is required' }),
    email: z
      .string()
      .min(1, { message: 'This field is required' })
      .email({ message: 'Invalid email' }),
    address: z.string().min(1, { message: 'This field is required' }),
    phoneNumber: z.string().min(1, { message: 'This field is required' }),
    currentPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // If either newPassword or confirmPassword is filled, currentPassword becomes required
    if ((data.newPassword || data.confirmPassword) && !data.currentPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Current password is required when changing password',
        path: ['currentPassword'],
      });
    }

    // If newPassword is filled, confirmPassword must match
    if (data.newPassword && data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['confirmPassword'],
      });
    }

    // If confirmPassword is filled, newPassword must match
    if (data.confirmPassword && data.newPassword !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Passwords do not match',
        path: ['newPassword'],
      });
    }
  });
