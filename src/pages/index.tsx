import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Input, Col} from 'antd'
import { ChangeEvent, ChangeEventHandler, useEffect,  } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })
import {setAnimes,setWanted} from '../actions/index';


export default function Home() {
  const animes = useSelector((state:any) => state.animes)
  const dispatch:any = useDispatch()
  const wanted = useSelector((state:any) => state.wanted)

  
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
    .then(response => response.json())
    .then(data =>{
      dispatch(setAnimes(data.data))
      dispatch(setWanted(data.data))
    } );

  }, [])

  
  let search = function  (event:any)  {
    if(event.target.value===''){
      dispatch(setWanted(animes))
    }else {
      if(animes){
        let animesMatched = animes.filter( (i:TAnimes)=> i.titles[0].title.toLowerCase().includes(event.target.value.toLowerCase()) )
    dispatch(setWanted(animesMatched))
      }
      
    }
  }
  return (
    <>
      <Col span={8} offset={8}>
          <Input onChange={search}/>
      </Col>
        { wanted.map( (i:TAnimes)=> <div key={i.mal_id}>  {i.mal_id}  </div> ) }
        
    </>
  )
}
