"""
Split, Join, Enumerate em Pyhton
Split - Dividir uma stirng # str
Join - Juntar uma lista # str
Enumerate - Enumerar elementos da lista # list
"""

string = "O Brasil é o país do futebol, o Brasil é penta"
lista_espaco = string.split(' ')
lista_virgula = string.split(',')
print(f'A lista separada por espaços é: {lista_espaco}')
print(f'A lista separada por espaços é: {lista_virgula}')

# Contando o número de vezes que uma palavra aparece na frase:
for valor in lista_espaco:
    print(f'A palavra aparece {valor} apareceu {lista_espaco.count(valor)} x na frase.')

# Reconhecendo a palavra que apareceu mais vezes na frase:
print()
palavra = ''
cont = 0
for valor in lista_espaco:
    qtde = lista_espaco.count(valor)
    
    if qtde > cont:
        cont = qtde
        palavra = valor

print(f'A primeira palavra que apareceu mais vezes é {palavra} ({cont}x)')
