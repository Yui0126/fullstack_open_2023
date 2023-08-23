
const Course = ({course}) => {
  // const total = course.reduce(function(sum, parts) {
  //   return sum + parts.exercises
  // }, 0)
  const parts = course.map((names) => names.parts)
  const names = parts.map(cns => cns.map(cn => cn.name))
  console.log(names[0])

  const nm = course.map(cnms => cnms.parts.name)
  console.log(nm)

  for(var i = 0; i < parts.length; i++){
    var cns = Array()
    cns.push(parts[i])
    const nms = Object.values(cns)
    console.log(nms)
    // for(var j = 0; j < cns.length; j++){
      
    //   console.log(nms)
    //   console.log(typeof nms)
    // }
  }
  // const cn = parts.map(function(names){
  //   return names.

  // })
  // const cn = parts.map((cns) => cns.map(nms => nms.name))
  // console.log(cn)
  // const courses = names.map((cns) => cns.name)
  // console.log(courses)

  return(
    <div>
    <h1 key={course.id}>{course.map(names => names.name)}</h1>
    <div ket={course.name}>
      <div>{}</div>
    </div>
    </div>
  )
}




// {names.map(part => 
//   <div key={part.id}>
//   </div>)}


const App = () => {
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


  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={course} />
}

export default App