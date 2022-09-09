// condição ? valor para verdadeiro : valor para falso

const pontuacaoUsuario = 1500;
const nivelUsuario = pontuacaoUsuario >=1000? 'Usuario VIP':'Usuario normal';

const corPadrao = 'red';
const corDeFundo = corPadrao || 'black';

console.log(nivelUsuario, corDeFundo);