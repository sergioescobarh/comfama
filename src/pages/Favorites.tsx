import React from 'react'
import MyCarousel from '../components/atoms/MyCarousel'
import Header from '../components/molecules/Header'
import FavoritesList from '../components/organisms/FavoritesList'
import { UseLocal } from '@/hooks/UseLocal'
type Props = {}

export default function Favorites({}: Props) {
  UseLocal()
  return (
    <div>
        <Header/>
        <MyCarousel />
        <FavoritesList/>
    </div>
  )
}