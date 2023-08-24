const t = [1, 2, 3]
const m1 = t.map(value => value * 2) //multiply each value
console.log(m1)

const r = [1, 2, 3, 4, 5]
const [first, second, ...rest] = r
console.log(first, second) //prints 1 and 2
console.log(rest) //prints 3,4,5

const square = p => p * p //square is a function
console.log(square(5))

const rSquared = r.map(p => p * p)
console.log(rSquared) //[1,4,9,16,25]

const average = function(a, b) {
        return (a + b) / 2
    } // this is function expression

const result = average(2, 5)
    // result is 3.5

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
    console.log(course.parts[0].name)
    console.log(course.parts.length)


const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function(){
        console.log('Hello, my name is '+this.name)
    },
    doAddition: function(a,b){
        console.log(a+b)
    }
}
arto.greet()
arto.growOlder = function(){
    this.age += 1
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)

arto.doAddition(1,4)

const referenceToAddition = arto.doAddition
referenceToAddition(10,15)

arto.greet()
const referenceToGreet = arto.greet
referenceToGreet() //nothing will be printed as we lose track of 'this'

// setTimeout(arto.greet.bind(arto), 1000) //this 'bind' is the way to preserve original 'this'

//There is no class mechanism in JavaScript like the ones in 
//object-oriented programming languages. 
//There are, however, features to make "simulating" object-oriented 
//classes possible.


class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log('Hello, my name is ' + this.name)
    }
}

const adam = new Person('Adam Ondra', 29)
adam.greet()

const janja = new Person('Janja Carnbret', 23)
janja.greet()


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



const Hello = (props) => {
    console.log(props)
    return ( 
        <div>
            <p> Hello { props.name }, you are { props.age } years old </p>
        </div>
    )
}

const App = () => {
    const friends = [
        { name: 'Peter', age: 4 },
        { name: 'Maya', age: 10 }
    ]
    return ( 
    <div>
        <h1> Greetings </h1>
        <p> { friends[0].name } { friends[0].age } </p>
        <p> { friends[1].name } { friends[1].age } </p>
    </div>
    )
}

export default App


///
const pets = [
    {
      name: "Bob",
      species: "Dog",
      Age: 8,
      food: [
        {main: "meat",
         snack: "biscuits"
        }
      ]  
    },
    {
      name: "Sam",
      species: "Cat",
      Age: 6,
      food: [
        {main: "fish",
         snack: "cheese"
        }
      ]
    }
  ]
  console.log(pets.map(names => names.name))
  // console.log(pets.map(foods => foods.food.map(mains => mains.main)))

  const foods = pets.map((foods) => foods.food)
  // console.log(foods.map(mains => mains.main))
  console.log(foods.map(mains => mains[0].main))



    // const total = course.reduce(function(sum, parts) {
  //   return sum + parts.exercises
  // }, 0)
