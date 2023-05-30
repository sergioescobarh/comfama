import React from 'react'
import { Carousel } from 'antd';

const  MyCarousel = () => {
  const images: string[] = [
    'https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/2bf5a9d6-d967-4fc3-b46c-a8fe55637cf0/DreamShaper_v5_Anime_web_aplication_image_for_carusel_ultra_hd_1.jpg',
    'https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/53c31a27-63b3-45ef-a1e4-ad423dba2f60/DreamShaper_v5_Anime_web_aplication_image_for_carusel_ultra_hd_1.jpg', // URL de imagen inválida
    'https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/cace124b-9608-48aa-a9a9-636912aab078/DreamShaper_v5_Anime_web_aplication_image_for_carusel_ultra_hd_1.jpg',
  ];

  return (
    <Carousel dots={{className:'carousel'}} >
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