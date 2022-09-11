// É uma função construtora
// Para usar uma função construtora, inicia-se com 'new' e letra maiúscula:

const data = new Date(0);
console.log (data.toString());

// É exibido a data em milésimo de segundo com marco zero o dia 01/01/1970
// Para obter uma data especificia, pode-se pedir a data no formato:
// (ano, mes, dia, hora, minuto, segundo, milesimos de segundo)
// Pode-se omitir do dia para frente se desejar
const dataEspecifica = new Date(2015, 1, 5);
console.log(dataEspecifica.toString());

// Com o parâmetro em branco, mostra-se a data atual
const dataAtual = new Date();
console.log(dataAtual.toString());

//Por fim, pode-se impremir com dataString:
const dataString = new Date('2019-04-03 14:12:50');
console.log(dataString.toString());

// Para se obter o dia, usa-se getDate()
console.log('Dia', dataAtual.getDate());
console.log('Mês', dataAtual.getMonth()); // contagem inicia do 0
console.log('Ano', dataAtual.getFullYear());
console.log('Hora', dataAtual.getHours());
console.log('Min', dataAtual.getMinutes());
console.log('Dia semana', dataAtual.getDay()); // 0 é domingo