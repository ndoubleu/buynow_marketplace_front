import { atomWithCache } from 'jotai-cache';
import { getCategories } from './services/categories';
import { getNewArrivals } from './services/products';

export const categoriesAtom = atomWithCache(async (get) => {
    const categories = await getCategories();
    return categories;
  });

  export const newArrivalsAtom = atomWithCache(async (get) => {
    const newArrivals = await getNewArrivals();
    return newArrivals?.results || [];
  });