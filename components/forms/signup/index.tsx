'use client';

import { signupSchema } from '@/lib/zod';
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
import { createUser } from '@/server/mutations/auth';
import { signIn } from 'next-auth/react';
import { TailwindSpinner } from '@/components/ui/spinner';
import { useRouter } from 'nextjs-toploader/app';

type FormSchema = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const router = useRouter();
  const { alertMessage } = useMessage();

  const mutation = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (values: FormSchema) => {
      const { success, message } = await createUser(values);
      if (!success) throw new Error(message);
      const loginAttempt = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl: '/account',
      });
      if (!loginAttempt?.ok)
        throw new Error(loginAttempt?.error || 'Unknown error');
      return true;
    },
    onSuccess: () => {
      alertMessage('Account created successfully', 'success');
      router.replace('/account');
    },
    onError: error => {
      alertMessage(
        error instanceof Error ? error.message : 'Unknown error',
        'error'
      );
    },
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
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl className='w-full'>
                  <input
                    placeholder='Name'
                    type='text'
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
            disabled={mutation.isPending}
            type='submit'
            className='w-full'
            size='lg'
          >
            {mutation.isPending ? <TailwindSpinner /> : 'Create Account'}
          </Button>
          <GoogleButton disabled={mutation.isPending} />
        </div>
        <p className='text-center text-sm'>
          Already have an account?{' '}
          <Link href='/login' className='underline hover:text-primary'>
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
};
export default SignupForm;
