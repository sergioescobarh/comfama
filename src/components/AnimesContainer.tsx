import { Card } from 'antd'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Recomendation from '../components/Recomendation'

type Props = {}

export default function AnimesContainer({}: Props) {

  const dispatch: any = useDispatch()
  const wanted = useSelector((state: any) => state.wanted)

  return (
    <section className='animesContainer'>
      
      {wanted.map((i: TAnimes) => 
      <div className='card' key={i.mal_id}>
          <Card  title={i.titles[0].title}  cover={<img src={i.images.jpg.image_url} alt='animeImage'/>}>
          
          <p>Puntaje: {i.score}</p>
          <Recomendation score={i.score}/>
        </Card>
      </div>
        )}

    </section>
  )
}