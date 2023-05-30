import React from 'react'
import MyCarousel from '../components/MyCarousel'
import Header from '../components/Header'
type Props = {}

export default function Favorites({}: Props) {
  return (
    <div>
        <Header/>
        <MyCarousel />
    </div>
  )
}