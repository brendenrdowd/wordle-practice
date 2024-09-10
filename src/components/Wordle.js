import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid/Grid'

export default function Wordle({solution}) {
  const {currentGuess,handleKeyUp,guesses,isCorrect,turn} = useWordle(solution)

  useEffect(()=>{
    window.addEventListener('keyup',handleKeyUp);

    return () =>window.removeEventListener('keyup',handleKeyUp);
  },[handleKeyUp])

  useEffect(()=>{
  },[guesses,turn,isCorrect]);

  return (
    <div>
      <div>solution - {solution}</div>
      <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
    </div>
  )
}
