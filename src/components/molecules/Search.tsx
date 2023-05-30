import React from 'react'
import { Col, Input } from 'antd' 
import { useDispatch, useSelector } from 'react-redux'
import { setAnimes, setWanted } from '../../actions/index';
type Props = {}

export default function Search({}: Props) {
  const animes = useSelector((state: any) => state.animes)
  const dispatch: any = useDispatch()
  let search = function (event: any) {
    if (event.target.value === '') {
      dispatch(setWanted(animes))
    } else {
      if (animes) {
        let animesMatched = animes.filter((i: TAnimes) => i.titles[0].title.toLowerCase().includes(event.target.value.toLowerCase()))
        dispatch(setWanted(animesMatched))
      }
    }
  }
  return (
    <section className='search'>
      <Col span={8} offset={8}>
        <Input placeholder='Busca tu anime...' onChange={search} />
      </Col>
    </section>
  )
}