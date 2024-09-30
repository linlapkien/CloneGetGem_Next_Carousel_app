import React from 'react';
import style from '@/styles/Carousel.module.css';

interface ProductProps {
  name: string;
  url: string;
  price: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ name, url, price, description }) => {
  return (
    <div>
      <div className={style.card}>
        <img className={style.product_image} src={url} alt="" />
        <h2>{name}</h2>
        <p className={style.price}>{price}</p>
        <p>{description}</p>
        <p>
          <button>Add to cart</button>
        </p>
      </div>
    </div>
  );
};

export default Product;
