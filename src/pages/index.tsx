import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Input, Col} from 'antd'
import { useEffect,  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })
import {setAnimes} from '../actions/index';


export default function Home() {
  const animes = useSelector((state:any) => state.animes)
  const dispatch:any = useDispatch()

  // const [items,setItems] = useState([]);
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
    .then(response => response.json())
    .then(data => (dispatch(setAnimes(data.data))))
  }, [])

  
  return (
    <>
      <Col span={8} offset={8}>
          <Input/>
      </Col>
        { animes.map( (i:TAnimes)=> <div key={i.mal_id}>  {i.mal_id}  </div> ) }
        
    </>
  )
}
