// concatenação (entre STRINGS)
// símbolo + entre strings

console.log('Hello' + ' ' + 'World' + '!');  // Hello World!

string1 = 'Hello';
string2 = ' ';
string3 = 'World';
string4 = '!'

stringConcatenada = string1 + string2 + string3 + string4;

console.log(stringConcatenada);

// operações usuais (entre números)

// soma (+)
console.log(2 + 2);

// multiplicação (*)
console.log(2 * 5);

// subtração (-)
console.log(5 - 3);

// divisão normal (/)
console.log(3 / 4); 

// potenciação (**)
console.log(2 ** 5);

console.log(7 ** (0.5)); // raiz quadrada!

// resto (%)
console.log(10 % 4);
console.log(18 % 5);

// incrementos (++)

// x++

let x = 5;

console.log(x); // 5
console.log(x++); // 5
console.log(x); // 6

/*

nesse caso, o console.log primeiro lê o x, e imprime o x, e
somente depois altera seu valor para (x + 1)

*/

let y = 10;

console.log(y); // 10
console.log(++y); // 11
console.log(y); // 11

/*

nesse caso, primeiro é realizada a operação de incremento em si,
e, já alterado o valor da variável, o console.log a lê e a impri-
me já com seu novo valor

*/
