// let, var, const são os 3 modos de declarar uma variável

/*

1. var

- nunca vamos usar
- existe por razões históricas: no início, havia apenas var e const
- muitos códigos foram escritos
- muitos erros
- foi substituído pelo let, mas sua existência nunca foi apagada

- sujeito a hoisting (bizarro)

- ESCOPO: GLOBAL
- VALOR MUTÁVEL? SIM

*/

var nomes = 'Luiz';

var numero;
numero = 15;

sobrenome = 'Braga';
var sobrenome; // hoisting: o programa leva automaticamente as declarações de variáveis pro começo

/*

2. let

- usamos a todo momento
- variável mais comum
- não tem hoisting e palhaçadas do var

- ESCOPO: LOCAL
- VALOR MUTÁVEL? SIM

*/

let x = 2;
let nome = 'Braga';
let bool = true;
let arr = [1, 2, 3];

/*

3. const

- usada para valores constantes no seu código
- quando criamos uma array com const, ela pode ser modificada no sentido de adicionar/returar elementos
- entretanto, não podemos mudar seu tipo (array)

ex. 

const arr = [];
arr.push('Pessoa1'); OK

const arr = [];
arr = 'Pessoa1' NÃO!

- ESCOPO: GLOBAL
- VALOR MUTÁVEL? NÃO

*/

const pi = 3.1415;
const nomes = ['Luiz', 'Ana', 'Nome'];

// para pensar: a palavra reservada para declarar variáveis em JS é let (seja...)
// é uma palavra muito genérica, porque JS é uma linguagem de tipagem DINÂMICA
// note que NÃO ESPECIFICAMOS o tipo de variável ao declarar!

// let, const

// quanto a local/global
// quanto a 'constante'

