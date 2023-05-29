import React from 'react'

type Props = {score: number}

export default function Recomendation({score}: Props) {
  return (
    <div>
        {score>=8 && <div>Genial, este es uno de los mejores animes</div>}
        {score>=5 && score<8 && <div>Puedes divertirte</div>}
        {score<5 && <div>No lo recomiendo</div>}
    </div>
    
  )
}