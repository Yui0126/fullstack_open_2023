import { useState } from 'react'

// const Filter = (props) => {
// const filteredNames
//   return(
//     <div>
//       <input value={props.name} onChange={props.handleFilter}/>
//     </div>
//   ) 
// }

const PersonForm = () => {

}

const Persons = (props) => {
  return(
    <div>
      <ul>
        {props.person.map(person => 
          <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}






const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '00000',
      id:1
    }
  ])
  const [searchName, setSearchName] = useState('') 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  const addPhonebook = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already in the list :o`);
      return;
    }

    const nameObject = {
      name: newName,
      number: newPhone,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject))
    console.log(nameObject)
    console.log(persons)
    setNewName('')
    setNewPhone('')
  }

  const handleNamechange = (event) => {
    event.preventDefault()
    setNewName(event.target.value)
    // console.log(persons.map(nm => nm.name))
    const nmls = persons.map(nm => nm.name)
    if(nmls.includes(newName)){
      return(
        alert(`${newName} is already in the list :o`)
      )
    }
  }

  const handlePhonechange = (event) => {
    event.preventDefault()
    setNewPhone(event.target.value)
  }

  const nameFilter = (event) => {
    event.preventDefault()
    const searchTerm = event.target.value.toLowerCase();
    setSearchName(searchTerm)
    const filtered = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(searchTerm)
    )
    setFilteredPersons(filtered)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={searchName} onChange={nameFilter}/>
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPhonebook}>
        <div>
          name: <input value={newName} onChange={handleNamechange}/>
        </div>
        <div>number: <input value={newPhone} onChange={handlePhonechange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      <Persons person={filteredPersons.length > 0 ? filteredPersons : persons}/>
      </div>
    </div>
  )
}

export default App


