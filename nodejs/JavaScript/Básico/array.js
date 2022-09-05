// Array é um objeto indexado
// Para verificar, pode-se usar instanceof Array
const alunos = ['Luiza', 'Carlos', 'Amanada', 'Abacate', 'Antonieta']

console.log(typeof alunos)
console.log(alunos instanceof Array)

// Para adicionar um elemento ao fim
alunos.push('Fuchshuber')

// Para remover o último elemento
alunos.pop()

// Para adicionar um elemento no início
alunos.unshift('Rômulo')

console.log(alunos)
