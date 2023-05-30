import React from 'react'
import MyCarousel from '../components/atoms/MyCarousel'
import Header from '../components/molecules/Header'
import FavoritesList from '@/components/organisms/favoritesList'
type Props = {}

export default function Favorites({}: Props) {
  return (
    <div>
        <Header/>
        <MyCarousel />
        <FavoritesList/>
    </div>
  )
}