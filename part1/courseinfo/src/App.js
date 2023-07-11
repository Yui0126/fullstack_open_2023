import React from 'react'
const Header = (props) => {
    return ( <
        h1 > { props.course } < /h1>
    )
}

const Part = (props) => {
    return ( <
        div > { props.part } { props.exercises } < /div>
    )

}

const Content = (props) => {
    return ( <
        div >
        <
        Part part = { props.content[0].part }
        exercises = { props.content[0].exercises }
        / > <
        Part part = { props.content[1].part }
        exercises = { props.content[1].exercises }
        / > <
        Part part = { props.content[2].part }
        exercises = { props.content[2].exercises }
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
    const course = 'Half Stack application development'
    const content = [
        { part: 'Fundamentals of react', exercises: 10 },
        { part: 'Using props to pass data', exercises: 7 },
        { part: 'State of a component', exercises: 14 }
    ]
    let myNums = []
    for (let i = 0; i < content.length; i++) {
        myNums.push(content[i].exercises)
    }
    const sum = myNums.reduce((partialSum, a) => partialSum + a, 0);

    return ( <
        div >
        <
        Header course = { course }
        /> <Content content={content}/ > <
        Total total = { sum }
        / > < /
        div >
    )
}


export default App;