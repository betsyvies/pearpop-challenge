import Image from 'next/image';
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
      <div className='container-product'>
        {
          products.map((product) => (
            <div
            key={product.productId}
            className='product'
            >
              <div className='container-image'>
                <Image
                  src={product.productImage}
                  alt={product.productName}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <p>{product.productName}</p>
              <button>More</button>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default Products;
