import React from 'react'
import Recomendation from '../atoms/Recomendation'
import { Card } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

type Props = {}

export default function FavoritesList({ }: Props) {
  const liked = useSelector((state: any) => state.liked)
  return (
    <section id='1' className='animesContainer'>
      {liked.map((i: TAnimes) =>
        <div className='card' key={i.mal_id}>
          <Card 
            title={i.titles[0].title}
            // eslint-disable-next-line @next/next/no-img-element
            cover={<img src={i.images.jpg.image_url}
              alt='animeImage' />}>
            <p>Puntaje: {i.score}</p>
            <div className='foot'>
              <Recomendation score={i.score} />
            </div>
          </Card>
        </div>
      )}
    </section>
  )
}