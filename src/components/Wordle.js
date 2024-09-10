import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './grid/Grid'

export default function Wordle({solution}) {
  const {currentGuess,handleKeyUp,guesses,isCorrect,turn} = useWordle(solution)

  useEffect(()=>{
    window.addEventListener('keyup',handleKeyUp);

    return () =>window.removeEventListener('keyup',handleKeyUp);
  },[handleKeyUp])

  useEffect(()=>{
    console.log(guesses,isCorrect,turn);
  },[guesses,turn,isCorrect]);

  return (
    <div>
      <div>current guess - {currentGuess}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  )
}
