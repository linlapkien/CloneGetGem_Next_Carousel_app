import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from '@/styles/Carousel.module.css';
import Product from './Product';
import { productData, responsive } from '../data';

const cardCarousel = () => {
  // eslint-disable-next-line react/jsx-key
  const product = productData.map((item) => (
    <Product
      key={item.id}
      name={item.name}
      url={item.imageUrl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className={style.App}>
      <h1>React multi carousel</h1>
      <Carousel
        ssr={true} // means to render carousel on server-side.
        responsive={responsive}
        draggable={true}
        swipeable={true}
        customTransition="transform .5s ease-in-out"
        transitionDuration={500}
      >
        {product}
      </Carousel>
    </div>
  );
};

export default cardCarousel;
