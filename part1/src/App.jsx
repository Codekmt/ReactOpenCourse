import { useState } from 'react'
import viteLogo from '/vite.svg'

const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.course.name}</p>
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
        <Part1 parts={props.course.parts[0].name} exercises={props.course.parts[0].exercises}/>
        <Part2 parts={props.course.parts[1].name} exercises={props.course.parts[1].exercises}/>
        <Part3 parts={props.course.parts[2].name} exercises={props.course.parts[2].exercises}/>
      </div>
)
}

const Total = (props) => {
  return (
    <>
    <p>{props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}
export default App
