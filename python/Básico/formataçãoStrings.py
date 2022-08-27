""" 

Para exibir valores formatados pode-se usar f-strings

"""

nome = 'Alexandre Paiva';
idade = 23;
altura = 1.80;

#AO invés de digitar
print(nome, 'tem', idade, 'anos de idade e', altura, 'metros de altura.')
#podemos digitar, sem se preocupar com os tipos de dados
print(f'{nome} tem {idade} anos de idade e {altura:.2f} metros de altura.')
#Ou ainda:
print('{} tem {} anos de idade e {:.2f} metros de altura. \n'.format(nome, idade, altura))


#Para alterar a ordem usando .fomat:
print('{0} tem {1} anos de idade e {2:.2f} metros de altura, sim {2:.2f} metros mesmo. \n'.format(nome, idade, altura))

#Ainda, podemos dar outro nome de chamada para as váriveis
print('{n} tem {i} anos de idade e {a:.2f} metros de altura, sim {a:.2f} metros mesmo. '.format(n = nome, i = idade, a = altura))