import React from 'react'
import { Carousel } from 'antd';
import {images} from '../../utils/carusel'

const  MyCarousel = () => {
  return (
    <Carousel dots={{className:'carousel'}} autoplay={true} >
      {images.map((imageUrl: string, index: number) => (
        <div key={index}>
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              const target = e.target as HTMLImageElement;
              target.src = 'imagen-de-respaldo.jpg'; // URL de imagen de respaldo
            }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default MyCarousel;