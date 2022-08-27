nome = 'Alexandre Paiva';
idade = 23;
altura = 1.80;
peso = 82.5;
ano_atual = 2022;

ano_nascimento = ano_atual - idade;
imc = peso/altura**2;

print(f'{nome} tem {idade} anos, {altura} de altura e pesa {peso}kg.\nO IMC de {nome} é {imc:.2f}\n{nome} nasceu em {ano_nascimento}')