import { Card } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Recomendation from '../components/Recomendation'

type Props = {}

export default function AnimesContainer({ }: Props) {

  const dispatch: any = useDispatch()
  const wanted = useSelector((state: any) => state.wanted)

  return (
    <section className='animesContainer'>

      {wanted.map((i: TAnimes) =>
        <div className='card' key={i.mal_id}>
          <Card bodyStyle={{ backgroundColor: ' #e0e7ea ' }} 
          title={i.titles[0].title} 
          // eslint-disable-next-line @next/next/no-img-element
          cover={<img src={i.images.jpg.image_url} 
          alt='animeImage' />}>
            <p>Puntaje: {i.score}</p>
            <div className='foot'>
              <Recomendation score={i.score} />
              <HeartOutlined style={{ fontSize: 20, color: 'pink' }} />
            </div>
          </Card>
        </div>
      )}

    </section>
  )
}