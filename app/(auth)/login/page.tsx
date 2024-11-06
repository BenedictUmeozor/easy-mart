import LoginForm from '@/components/forms/login';

export default function Page() {
  return (
    <div className='mx-auto max-w-md'>
      <h2 className='mb-4 text-3xl font-medium'>Login in to EasyMart</h2>
      <p className='mb-8'>Enter your details below</p>
      <LoginForm />
    </div>
  );
}
