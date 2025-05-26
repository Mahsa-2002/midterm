const calculator = { name: "math", result1: Sum(), result2: Subtract() }
let num1 = 0
let num2 = 0

function Sum(num1, num2) {
    let sum = 0
    sum = num1 + num2
    return sum
}

function Subtract(num1, num2) {
    let subtract = 0
    subtract = num1 - num2
    return subtract
}

console.log(Sum(10, 20))
console.log(Subtract(10, 20))