import { Card } from 'antd'
import { HeartOutlined } from '@ant-design/icons'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Recomendation from '../atoms/Recomendation'
import {setLiked} from '../../actions/index'


type ClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;
type Props = {  }

export default function AnimesContainer({  }: Props) {

  const dispatch: any = useDispatch()
  const wanted = useSelector((state: any) => state.wanted)
  const animes = useSelector((state: any) => state.animes)
  const liked = useSelector((state: any) => state.liked)
  const favorites = (id:string) => {
    console.log(animes)
    const newList = liked
    const newFav =animes.find((e:TAnimes)=>e.mal_id===id)
    newList.push(newFav)
      dispatch(setLiked(newList))
      localStorage.setItem('liked', JSON.stringify(newList))
      console.log(newFav)
      console.log(newList)

    }
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
              <HeartOutlined value={i.mal_id} style={{ fontSize: 20, color: 'pink' }}  onClick={()=>{favorites(i.mal_id)}} />
            </div>
          </Card>
        </div>
      )}

    </section>
  )
}