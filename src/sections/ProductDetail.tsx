import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useProduct from '../hooks/use-product';

const ProductDetail = () => {
  const { product, isLoading, error } = useProduct();

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

  return product ? (
    <>
      <Link className='go-back' href='/'>
        &#8592;
        go back
      </Link>
      <div
        className='product-detail'
      >
        <div className='container-image-detail'>
          <Image
            src={product.productImage}
            alt={product.productName}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='container-detail'>
          <h2>{product.productName}</h2>
          <p>
            <span>Price: </span>
            {product.productPrice}
          </p>
          <p>
            <span>Stock: </span>
            {product.productStock}
          </p>
          <p>
            <span>Rating: </span>
            {product.rating}
          </p>
        </div>
      </div>
    </>
  ) : null;
};

export default ProductDetail;
