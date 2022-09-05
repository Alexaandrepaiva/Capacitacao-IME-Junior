// Não podemos criar constante com palavras reservadas
// Não podemos modificar o valor de uma constante - deve ser declarada e inicializada ao mesmo tempo
// Seu nome não pode começar com número, ter espaço ou traço

const nome = 'Alexandre';

// Const, em comparação com let, é bom para conseguirmos resgatar valores de variáveis intermediárias
const numero1 = 10;
const numero2 = 15;
const soma = numero1 + numero2;
console.log(numero1, numero2, soma);
// typeof imprime o tipo da variável ou constante
console.log(typeof soma)