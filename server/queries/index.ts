'use server';

import type { AppCategory, ProductResponse, SingleProduct } from '@/interfaces';

export const fetchCategories = async (): Promise<AppCategory[]> => {
  const res = await fetch('https://dummyjson.com/products/categories', {
    next: { revalidate: 6 * 3600 },
  });
  return res.json();
};

export const fetchProducts = async ({
  limit,
  skip,
}: {
  skip?: number;
  limit?: number;
}): Promise<ProductResponse> => {
  let url = 'https://dummyjson.com/products';
  if (limit) url += `?limit=${limit}`;
  if (skip) {
    url += url.includes('?') ? `&skip=${skip}` : `?skip=${skip}`;
  }
  const res = await fetch(url, {
    next: { revalidate: 6 * 3600 },
  });
  return res.json();
};

export const fetchCaregoryProducts = async (
  category: string
): Promise<ProductResponse> => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`,
    {
      next: { revalidate: 6 * 3600 },
    }
  );
  return res.json();
};

export const fetchProduct = async (id: string): Promise<SingleProduct> => {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 6 * 3600 },
  });
  return res.json();
};
