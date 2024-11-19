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
import { TailwindSpinner } from '@/components/ui/spinner';
import useMessage from '@/hooks/message';
import type { SelectUser } from '@/lib/drizzle/schema';
import { cn } from '@/lib/utils';
import { profileSchema } from '@/lib/zod';
import { editProfile } from '@/server/mutations/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type FormSchema = z.infer<typeof profileSchema>;

const ProfileForm = ({ user }: { user: SelectUser | undefined }) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      address: user?.address || '',
      phoneNumber: user?.phoneNumber || '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const { alertMessage } = useMessage();

  const mutation = useMutation({
    mutationKey: ['update-profile'],
    mutationFn: async (values: FormSchema) => {
      const { success, message } = await editProfile(values);
      if (!success) throw new Error(message);
    },
    onSuccess: () => {
      alertMessage('Profile updated successfully', 'success');
    },
    onError: error => alertMessage(error.message, 'error'),
  });

  const onSubmit = (values: FormSchema) => {
    mutation.mutate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <section className='space-y-6'>
          <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
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
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='email'
                      placeholder='example@gmail.com'
                      disabled
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
              name='phoneNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl className='w-full'>
                    <Input
                      className={cn(
                        'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                      )}
                      type='tel'
                      placeholder='08100000000'
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
            disabled={mutation.isPending}
            className='max-lg:flex-1 lg:w-28'
          >
            Cancel
          </Button>
          <Button
            type='submit'
            disabled={mutation.isPending}
            className='max-lg:flex-1 lg:w-56'
          >
            {mutation.isPending ? <TailwindSpinner /> : 'Save Changes'}
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ProfileForm;
