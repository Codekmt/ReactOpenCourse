import { useState } from 'react'
import viteLogo from '/vite.svg'

const Header = (props) => {
  
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Content = () => {
  const parts = ([
    { part1: 'fundamentals of React'},
    { part2: 'Using props to send data'},
    { part3: 'State of a component'}
  ])
    return (
      <div>
        <p>{parts[0].part1}</p>
        <p>{parts[1].part2}</p>
        <p>{parts[2].part3}</p>
      </div>
)
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return (
    <>
    <p>{exercises1 + exercises2 + exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14


  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App
