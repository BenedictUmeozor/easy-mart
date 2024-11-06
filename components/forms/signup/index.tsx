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

type FormSchema = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
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
          <Button type='submit' className='w-full' size='lg'>
            Create Account
          </Button>
          <GoogleButton />
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
