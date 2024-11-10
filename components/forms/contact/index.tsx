'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormMessage,
  FormControl,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { contactSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

type FormSchema = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      message: '',
      name: '',
      phone: '',
    },
  });

  const onSubmit = (values: FormSchema) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto space-y-6 max-lg:max-w-md'
      >
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl className='w-full'>
                  <Input
                    className={cn(
                      'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                    )}
                    type='text'
                    placeholder='Your Name'
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
                <FormControl className='w-full'>
                  <Input
                    className={cn(
                      'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                    )}
                    type='email'
                    placeholder='Your Email'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormControl className='w-full'>
                  <Input
                    className={cn(
                      'border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                    )}
                    type='tel'
                    placeholder='Your Phone Number'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormControl className='w-full'>
                <Textarea
                  {...field}
                  className={cn(
                    'resize-none border-[#f5f5f5] bg-[#f5f5f5] ring-offset-[#f5f5f5]'
                  )}
                  placeholder='Your Message'
                  rows={8}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex items-center justify-end'>
          <Button type='submit' className='w-full lg:w-44'>
            Send Message
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default ContactForm;
