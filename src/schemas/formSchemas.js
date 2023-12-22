import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().min(1, 'Email is required!').email('Invalid email!'),
  password: z
    .string()
    .min(1, 'Password is required!')
    .min(8, 'Password must have more than 8 characters!')
})

export const RegisterSchema = z
  .object({
    email: z.string().min(1, 'Email is required!').email('Invalid email!'),
    username: z
      .string()
      .min(2, 'Username is required!')
      .max(15, 'Username must have less than 15 characters!'),
    password: z.string().min(8, 'Password must have more than 8 characters!'),
    confirmPassword: z.string().min(1, 'Password confirmation is required!')
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match!'
  })
