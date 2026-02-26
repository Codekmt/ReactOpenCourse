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
        <p>{props.parts} and the number of exercises is {props.exercises}</p>
      </div>
  )

}

const Part2 = (props) => {
  return (
      <div>
        <p>{props.parts} and the number of exercises is {props.exercises}</p>
      </div>
  )

}

const Part3 = (props) => {
  return (
      <div>
        <p>{props.parts} and the number of exercises is {props.exercises}</p>
      </div>
  )
}

const Content = (props) => {
  console.log(props)
    return (
      <div>
        <Part1 parts={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part2 parts={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part3 parts={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </div>
)
}

const Total = (props) => {
  return (
    <>
    <p>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
export default App
