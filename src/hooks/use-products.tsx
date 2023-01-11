
import {useState, useEffect} from 'react';
import { Product } from '../interfaces/product';
import { get } from '../common/fetch-wrapper';

const PRODUCTS_API = `${process.env.BASE_URL}/api/products`;

const useProducts = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const products: Product[] = await get<Product[]>(PRODUCTS_API);
        setProducts(products);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [])

  return {products, isLoading, error}
}

export default useProducts;