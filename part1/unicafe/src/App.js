import { useState } from 'react'



const Button = (props) => (
    <button onClick={props.handleClick}>{props.text}</button>
)





const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setAll(all+1)
    setAverage(average+1)
    setPositive((good/all)*100)
  } 
  const handleNeutral = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setPositive((good/all)*100)
  }
  const handleBad = () => {
    setBad(bad+1)
    setAll(all+1)
    setAverage(average-1)
    setPositive((good/all)*100)
  }


  return (
    <div>
      <h1>get feedback</h1>
      <Button handleClick={()=>setGood(good+1)} text='good'/><br/>
      <Button handleClick={()=>setNeutral(neutral+1)} text='neutral'/><br/>
      <Button handleClick={()=>setBad(bad+1)} text='bad'/>
      <h1>statistics</h1>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {average}</div>
      <div>positive {positive} %</div>
    </div>
  )
}

export default App