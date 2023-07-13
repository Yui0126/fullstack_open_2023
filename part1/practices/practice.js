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