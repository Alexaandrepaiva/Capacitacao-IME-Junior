"""
Funções lambda são funções anônimas (NÃO TEM NOME)
VARIAVEL = lambda ARGUMENTOS: SAÍDA
"""

lista = [
    ['banana', 4.99],
    ['maça', 7.90],
    ['leite', 14.29],
    ['açucar', 3.39],
    ['sal', 4.59],
]

lista.sort(key=lambda item: item[1], reverse=True)
print(lista)
print(sorted(lista, key=lambda item: item[0], reverse=False))
