let num1 = 10;
let num2 = 5;
let num3 =15.838398;

console.log(num1.toString()+num2.toString())

//Representação na base n = .toString(n)
console.log(num1.toString(2))

//Arredondar para n casas decimais = .toFixed(n)
console.log(num3.toFixed(2))

//PAra verificar se um numero é inteiro ou não = Number.isInteger()
const conta1 = (num1 ** num2)/num3
const conta2 = num1 + num2
console.log(Number.isInteger(conta1))
console.log(Number.isInteger(conta2))

// Para verificar se o resultado é um NaN = Number.isNaN()
console.log(Number.isNaN(conta1))