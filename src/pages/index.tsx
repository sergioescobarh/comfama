import { Inter } from 'next/font/google'
import  AnimesContainer  from '../components/organisms/AnimesContainer'
import  Footer  from '../components/molecules/Footer'
import Header from '../components/molecules/Header'
import Search from '@/components/molecules/Search'
import { UseFetch } from '@/hooks/UseFetch';
const url = 'https://api.jikan.moe/v4/anime'

export default function Home() {
    UseFetch(url)  
  return (
    <div>
      <Search/>
      <Header/>
      <main className='homeMain'>
      <AnimesContainer />
    </main>
    <Footer/>
    </div>
    
  )
}
