"""
Split, Join, Enumerate em Pyhton
Split - Dividir uma stirng # str
Join - Juntar uma lista # str
Enumerate - Enumerar elementos da lista # list
"""

string = 'O Brasil é penta.'
lista = string.split(' ')
string_2 = ','.join(lista)

print(string)
print(lista)
print(string_2)

for indice, valor in enumerate(lista):
    print(f'Indice: {indice} Valor: {valor}')