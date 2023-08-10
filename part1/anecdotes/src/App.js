import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const VoteLine = props => <div>has {props.value} votes</div>

const MostVotes = ({votes, anecdotes}) => {
  const most = Math.max(...votes)
  const pos = votes.indexOf(most)
  const line = anecdotes[pos]
  if(most == 0){
    return(
      <p>No votes yet.</p>
    )
  }
  return(
    <div>
    <div>{line}</div>
    <div>has {most} votes</div>
    </div>
  ) 
} 

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const voteAnecdote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
    console.log(copyVotes)
  }


  const randomAnecdotes = () => {
    const rand = getRandomInt(anecdotes.length)
    setSelected(rand)
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <VoteLine value={votes[selected]}/>
      <Button handleClick={voteAnecdote} text="vote"/>
      <Button handleClick={randomAnecdotes} text="next anecdote"/>
      <h1>Anecdote with most votes</h1>
      <MostVotes anecdotes={anecdotes} votes={votes}/>
    </div>
  )
}

export default App