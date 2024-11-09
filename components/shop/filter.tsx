'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

const options: { value: string; label: string }[] = [
  { value: 'price asc', label: 'Price Low to High' },
  { value: 'price desc', label: 'Price High to Low' },
];

const FilterProducts = () => {
  return (
    <Select>
      <SelectTrigger className='sm:w-[180px]'>
        <SelectValue placeholder='Filter by price' />
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default FilterProducts;
