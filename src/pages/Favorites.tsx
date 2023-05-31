import React from 'react'
import MyCarousel from '../components/atoms/MyCarousel'
import Header from '../components/molecules/Header'
import  Footer  from '../components/molecules/Footer'
import FavoritesList from '../components/organisms/FavoritesList'
import { UseLocal } from '@/hooks/UseLocal'
type Props = {}

export default function Favorites({}: Props) {
  UseLocal()
  return (
    <div className='favorites'>
        <Header/>
        <FavoritesList/>
        <div className='background'>
        {/* <MyCarousel/> */}
        </div>
        <Footer/>
    </div>
  )
}