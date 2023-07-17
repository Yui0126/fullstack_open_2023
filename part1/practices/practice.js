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
