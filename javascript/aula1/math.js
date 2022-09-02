// Math é um OBJETO (igual o console)
// de forma análoga, é provida de métodos (funções) prontas!
// então, acessamos da forma Math.metodo()

// Math.ceil(x)
// retorna a função teto de x (menor número inteiro maior ou igual a x)

number = Math.ceil(3.14);
console.log(number);

// Math.floor(x)
// retorna o maior número inteiro menor ou igual a x

a = Math.floor(3.14);
console.log(a);

// Math.round(x)
// retorna o valor arredondado de x

r = Math.round(3.45);
console.log(r);

// Math.PI
// é o número pi (3.14159265...)
// note: não é um método, pois não é da forma Math.metodo()
// é um atributo, da forma Math.atributo

const pi = Math.PI;
console.log(pi);

// Math.max(x1, x2, x3...) ou Math.min(y1, y2, y3...)
// retorna o máximo/mínimo dos argumentos passados

console.log(Math.max(1, 4, 12, 3, 6, 8, 1));
console.log(Math.min(4, 8, 9, 2, 12, 31));

// Math.random() 
// retorna um número aleatório entre 0 e 1

randomNumber = Math.random();
console.log(random);

// EXERCÍCIO: 

// 1. Número aleatório entre min e max

let min = 100;
let max = 200;

let random01 = Math.random(); // número aleatório entre 0 e 1

let random = random01 * (max - min) + min;
console.log(random);

// 2. Número inteiro aleatório entre min e max

let randomInt = Math.round(random);



