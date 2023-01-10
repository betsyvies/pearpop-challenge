import React, { useEffect, useState } from 'react';
import { get as getProducts } from '../common/fetch-wrapper';
import { Product } from '../interfaces/product';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts('http://localhost:3000/api/products');
        setProducts(products);
      } catch (err) {
        setError('Lo sentimos, algo ha salido mal');
      } finally {
        setLoading(false);
      }
    })()
  }, [])

  if (isLoading) {
		return (
			<div>Loading</div>
		);
	}

  if (error) {
		return (
			<p>{error}</p>
		);
	}
  
  return (
    <>
      <h1>Products</h1>
      {
        products.map((product) => (
          <div key={product.productId}>
            <p>{product.productName}</p>
          </div>
        ))
      }
    </>
  );
};

export default Products;
