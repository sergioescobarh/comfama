import { Inter } from 'next/font/google'
import { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })
import { setAnimes, setWanted } from '../actions/index';
import  AnimesContainer  from '../components/AnimesContainer'
import Header from '../components/Header'
import Search from '@/components/Search'


export default function Home() {
  const dispatch: any = useDispatch()
  useEffect(() => {
    fetch('https://api.jikan.moe/v4/anime')
      .then(response => response.json())
      .then(data => {
        dispatch(setAnimes(data.data))
        dispatch(setWanted(data.data))
      });
  }, [])

  return (
    <div>
      <Search/>
      <Header/>
      <main className='homeMain'>
      <AnimesContainer />
    </main>
    </div>
    
  )
}
