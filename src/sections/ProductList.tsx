import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useProducts from '../hooks/use-products';

const ProductList = () => {
  const {products, isLoading, error} = useProducts();

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
          products?.map((product) => (
            <div
            key={product.productId}
            className='product'
            >
              <div className='container-image'>
                <Image
                  src={product.productImage}
                  alt={product.productName}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <p>{product.productName}</p>
              <Link
                href={{
                  pathname: '/[slug]',
                  query: { 
                    slug: product.productName,
                    id: product.productId,
                  },
                }}
                className='link'
              >
                More
              </Link>
            </div>
          ))
        }
      </div>
    </>
  );
};

export default ProductList;
