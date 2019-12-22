import React from 'react'
import {Title, Paragraph} from './gameOfLive-styles'

class GameText extends React.Component{
  render () {
    return (
      <>
      <Title>The Game</Title>
      <Paragraph>
      The Game of Life is not your typical computer game. It is a 'cellular automaton', and was invented by Cambridge mathematician John Conway.

      This game became widely known when it was mentioned in an article published by Scientific American in 1970. It consists of a collection of cells which, based on a few mathematical rules, can live, die or multiply. Depending on the initial conditions, the cells form various patterns throughout the course of the game.
      </Paragraph>
      </>
    )
  }
}

export default GameText