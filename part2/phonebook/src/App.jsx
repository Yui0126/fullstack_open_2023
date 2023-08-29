import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    console.log(nameObject)
    console.log(persons)
    setNewName('')
  }

  const handleNamechange = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    setNewName(event.target.value)
    console.log(newName)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNamechange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
      <div>debug: {newName}</div>
    </div>
  )
}

export default App