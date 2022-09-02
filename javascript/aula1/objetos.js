// OBJETOS são estruturas que agrupam características e funções de um determinado... objeto
// ATRIBUTOS são as características do objeto (substantivos)
// MÉTODOS são as funções do objeto (verbos)

/*

SINTAXE: entre {}, atributos/métodos separados por vírgulas

{
    atributo1: valor1,
    atributo2: valor2,
    atributo3: valor3,
    ...
}

*/

let alunoBraga = {
    nome: 'Braga',
    numero: 21414,
    ativa: false,
    materiasFavoritas: ['ciamb', 'ipe', 'icm'],
    apresentar: () => console.log('Aluno Braga, Brasil!')
}

// objeto.atributo_n => acessa o valor do atributo_n do objeto

console.log(alunoBraga.nome); 

// objeto.metodo_n() => executa o método_n do objeto

console.log(alunoBraga.apresentar());

// um atributo de um objeto pode também ser um objeto
// reflexão: mas por que faríamos isso?
// um objeto nada mais é do que uma forma de agrupar características (atributos) e ações (métodos) de algo
// pode ser visto como um agrupamento de COISAS EM COMUM
// logo, se posso agrupar ainda mais meus atributos, melhor!

let alunoIME = {
    nome: 'João',
    idade: 19,
    numero: 23419,
    ativa: false,
    situacaoMedica: {
        baixado: true,
        diasDispensa: 3,
        motivo: 'cirurgia'
    },
    academico: {
        trancado: false,
        rec: true,
        situacao: [{ materia: 'alglin', nota: 3.5 }, { materia: 'calc2', nota: 4.0 }, { materia: 'fis2', nota: 8.6 }]
    },
    residente: true,
    apto: 5012,
    cama: 9
}

console.log(alunoIME.idade); // 19

console.log(alunoIME.situacaoMedica.diasDispensa) // 3

console.log(alunoIME.residente) // true

console.log(alunoIME.academico.trancado); // false

console.log(alunoIME.academico.situacao[0].nota); // 3.5