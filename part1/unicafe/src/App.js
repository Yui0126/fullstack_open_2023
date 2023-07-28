import { useState } from 'react'

const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => (
  <div>{props.text} {props.value}</div>
)


const Statistics = (props) => {
  console.log(props.all)
  if (props.all === 0) {
    return(
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive+" %"}/>
    </div>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    const updatedGood = good + 1
    const updatedAll = updatedGood + neutral + bad
    setGood(updatedGood)
    setAll(updatedAll)
    setAverage((updatedGood-bad)/updatedAll)
    setPositive((updatedGood/updatedAll)*100)
  } 
  const handleNeutral = () => {
    const updatedNeutral = neutral + 1
    const updatedAll = updatedNeutral + good + bad
    setNeutral(updatedNeutral)
    setAll(updatedAll)
    setPositive((good/updatedAll)*100)
  }
  const handleBad = () => {
    const updatedBad = bad + 1
    const updatedAll = updatedBad + good + neutral
    setBad(updatedBad)
    setAll(updatedAll)
    setAverage((good-updatedBad)/updatedAll)
    setPositive((good/updatedAll)*100)
  }

  return (
    <div>
      <h1>get feedback</h1>
      <Button handleClick={handleGood} text='good'/><br/>
      <Button handleClick={handleNeutral} text='neutral'/><br/>
      <Button handleClick={handleBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics all={all} good={good} neutral={neutral} bad={bad} average={average} positive={positive}/>
    </div>
  )
}

export default App