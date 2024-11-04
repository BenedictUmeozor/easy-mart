'use client';

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='h-8 w-4 rounded-sm bg-primary'></div>
      <p className='text-sm font-semibold capitalize'>{title}</p>
    </div>
  );
};
export default SectionTitle;
