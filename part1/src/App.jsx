import { useState } from 'react'
import viteLogo from '/vite.svg'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}

const Part1 = (props) => {
  return (
      <div>
        <p>{props.part1} and the number of exercises is {props.exercises1}</p>
      </div>
  )

}

const Part2 = (props) => {
  return (
      <div>
        <p>{props.part2} and the number of exercises is {props.exercises2}</p>
      </div>
  )

}

const Part3 = (props) => {
  return (
      <div>
        <p>{props.part3} and the number of exercises is {props.exercises3}</p>
      </div>
  )
}

const Content = (props) => {
  console.log(props)
    return (
      <div>
        <Part1 part1={props.part1[0].name} exercises1={props.part1[0].exercises}/>
        <Part2 part2={props.part2[0].name} exercises2={props.part2[0].exercises}/>
        <Part3 part3={props.part3[0].name} exercises3={props.part2[0].exercises}/>
      </div>
)
}

const Total = (props) => {
  return (
    <>
    <p>{props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={[part1]} part2={[part2]} part3={[part3]}/>
    </div>
  )
}

export default App
