import React from 'react'
const Header = (props) => {
    return ( <
        h1 > { props.course.name } < /h1>
    )
}

const Part = (props) => {
    return ( <
        div > { props.name } { props.exercises } < /div>
    )

}

const Content = (props) => {
    return ( <
        div >
        <
        Part name = { props.course.parts[0].name }
        exercises = { props.course.parts[0].exercises }
        / > <
        Part name = { props.course.parts[1].name }
        exercises = { props.course.parts[1].exercises }
        / > <
        Part name = { props.course.parts[2].name }
        exercises = { props.course.parts[2].exercises }
        / > < /
        div >
    )
}

const Total = (props) => {
    return ( <
        div > The total number of exercises is { props.total } < /div>
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
    let myNums = []
    for (let i = 0; i < course.parts.length; i++) {
        myNums.push(course.parts[i].exercises)
    }
    const sum = myNums.reduce((partialSum, a) => partialSum + a, 0);

    return ( <
        div >
        <
        Header course = { course }
        /> <Content course={course}/ > <
        Total total = { sum }
        / > < /
        div >
    )
}


export default App;