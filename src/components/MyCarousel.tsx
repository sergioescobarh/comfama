import React from 'react'
import { Carousel } from 'antd';

const  MyCarousel = () => {
  const images: string[] = [
    'https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/0a38c58d-908b-4d5f-84b9-6b3ed2442aba/DreamShaper_v5_Anime_web_aplication_logo_3.jpg',
    'https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/0a38c58d-908b-4d5f-84b9-6b3ed2442aba/DreamShaper_v5_Anime_web_aplication_logo_3.jpg', // URL de imagen inválida
    'https://cdn.leonardo.ai/users/ac0a2dde-445c-4723-af7c-3d669913ecb6/generations/0a38c58d-908b-4d5f-84b9-6b3ed2442aba/DreamShaper_v5_Anime_web_aplication_logo_3.jpg',
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