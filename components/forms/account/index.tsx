'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { profileSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type FormSchema = z.infer<typeof profileSchema>;

const ProfileForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <section className='space-y-6'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='text'
                      placeholder='John'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='text'
                      placeholder='Doe'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='email'
                      placeholder='example@gmail.com'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='address'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='text'
                      placeholder='4, Easymart street'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>
        <section className='space-y-4'>
          <FormLabel>Password Changes</FormLabel>
          <div className='space-y-6'>
            <FormField
              control={form.control}
              name='currentPassword'
              render={({ field }) => (
                <FormItem>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='password'
                      placeholder='Current Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <FormItem>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='password'
                      placeholder='New Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='password'
                      placeholder='Confirm Password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>
        <div className='flex items-center gap-2 lg:justify-end'>
          <Button
            type='reset'
            variant='ghost'
            className='max-lg:flex-1 lg:w-28'
          >
            Cancel
          </Button>
          <Button className='max-lg:flex-1 lg:w-56' type='submit'>
            Save Changes
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ProfileForm;
