import React from 'react'

type Props = {score: number}

export default function Recomendation({score}: Props) {
  return (
    <div className='recomendation'>
        {score>=8 && <div className='recomended' >Genial, este es uno de los mejores animes</div>}
        {score>=5 && score<8 && <div className='middle' >Puedes divertirte</div>}
        {score<5 && <div className='notRecomended' >No lo recomiendo</div>}
        
    </div>
    
  )
}