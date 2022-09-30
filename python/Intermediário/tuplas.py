"""
A diferença entre tuplas e listas é que não se pode alterar os elementos de uma tupla
"""

tupla = (1, 2, 3.25, 'Alexandre', True, None)
print(type(tupla))

# Fatiamento
print(tupla[2:5])

# Podem ser criadas sem os parênteses
tupla_2 = 1, 2, 3, 4, 5
print(type(tupla_2))

# concatenação
tupla_3 = 6, 7, 8, 9
tupla_concatenada = tupla_2 + tupla_3
print(tupla_concatenada)

# Desempacoteamento
inicio, meio, *resto, ultimo = tupla_concatenada
print(inicio)
print(resto)

# converter em lsitas
tupla_lista = list(tupla_concatenada)
print(tupla_lista)
