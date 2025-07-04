const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}
const Content = (props) => {
  return (
    <div>
      <Parts parts={props.parts} exercises={props.exercises}/>
    </div>
  )
}
const Parts = (props) => {
  return (
    <p>
      {props.parts[0]} = {props.exercises[0]}<br />
      {props.parts[1]} = {props.exercises[1]}<br />
      {props.parts[2]} = {props.exercises[2]}<br />
    </p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises = {props.exercises[0] + props.exercises[1] + props.exercises[2]}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [ 'Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App
