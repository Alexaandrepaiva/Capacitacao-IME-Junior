// Para exibir algo na tela, usamos console.log()
// Dentro dos parêntes, coloa-se o argumento da função. Para colocar uma string, deve-se envolver o texto por aspas (simples ou dupla) ou crase

console.log("Essa é a minha primeira frase de teste") // string

console.log(123123, 15.85, 35, 29.90) // number

//Concatenação de Strings
let umaString = "Eu não gosto de frutas, MAS gosto de"
console.log(umaString.concat(' cereja e banana'));
console.log(umaString + ' abacaxi e banana');
console.log(`${umaString} banana e melancia`);


//Para repartir uma string
console.log(umaString.split(' ', 3))
console.log(umaString.split(' '))

// Para alterar a formatação da string
console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())