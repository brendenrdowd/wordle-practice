import React from 'react'
import Row from '../row/Row'

export default function Grid({currentGuess,turn,guesses}) {
  console.log('grid:',guesses)
  return (
    <div>{guesses.map((g,i)=>{
      return <Row key={i} guess={g} />
    })}</div>
  )
}
