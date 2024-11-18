'use client';

import { loginSchema } from '@/lib/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { FormControl } from '@mui/material';
import { Button } from '@/components/ui/button';
import GoogleButton from '@/components/shared/google-button';
import Link from 'next/link';
import useMessage from '@/hooks/message';
import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import { TailwindSpinner } from '@/components/ui/spinner';
import { useRouter } from 'nextjs-toploader/app';

type FormSchema = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();
  const { alertMessage } = useMessage();

  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async ({ email, password }: FormSchema) => {
      const loginAttempt = await signIn('credentials', {
        email,
        password,
        redirect: false,
        callbackUrl: '/account',
      });
      if (!loginAttempt?.ok) throw new Error('Incorrect email or password');
      return true;
    },
    onSuccess: () => {
      alertMessage('Logged in successfully', 'success');
      router.replace('/account');
    },
    onError: error => alertMessage(error.message, 'error'),
  });

  const onSubmit = (values: FormSchema) => {
    mutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='space-y-6'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl className='w-full'>
                  <input
                    type='email'
                    placeholder='Email'
                    {...field}
                    className='w-full border-b-2 py-2 focus:border-b-primary focus:outline-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormControl className='w-full'>
                  <input
                    type='password'
                    placeholder='Password'
                    {...field}
                    className='w-full border-b-2 py-2 focus:border-b-primary focus:outline-none'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='space-y-4'>
          <Button
            type='submit'
            disabled={mutation.isPending}
            className='w-full'
            size='lg'
          >
            {mutation.isPending ? <TailwindSpinner /> : 'Login'}
          </Button>
          <GoogleButton disabled={mutation.isPending} />
        </div>
        <p className='text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/signup' className='underline hover:text-primary'>
            Sign Up
          </Link>
        </p>
      </form>
    </Form>
  );
};
export default LoginForm;
