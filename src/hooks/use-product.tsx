import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import { Product } from '../interfaces/product';
import { get } from '../common/fetch-wrapper';

const PRODUCTS_API = `${process.env.BASE_URL}/api/products`;

const useProduct = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<Product>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query.id) return
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const product: Product = await get<Product>(`${PRODUCTS_API}/${query.id}`);
        setProduct(product);
      } catch (err) {
        setError(err as string);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
    
  }, [query.id])

  return {product, isLoading, error}
}

export default useProduct;