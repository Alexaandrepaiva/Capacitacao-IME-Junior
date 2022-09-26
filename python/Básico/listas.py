""" 
Listas em Python
fatiamento
append, insertm pop, del, clearm extend
min, max
range
"""

lista = ['A', 'B', 'Cachorro', 10, '20.25']
print(lista)

# Append
lista.append('D')
print(lista)

# Insert
lista2 = [1, 2, 4, 5, 6, 7, 8, 9] 
lista2.insert(2, 3)
print(lista2)

# Pop
lista2.pop()
print(lista2)

# Del
del(lista2[3:5])
print(lista2)

# Clear

# Extend
l1 = [1, 2, 3]
l2 = [4, 5, 6]
l1.extend(l2)
print(l1)
l2.extend('a')
print(l2)

# +
l3 = l1 + l2

# min & max
lNumber = [1, 2, 4, 55, 10, 21]
print( max(lNumber))
print( min(lNumber))

# range
listaRange = list(range(10, 100, 7))
print(listaRange)
print(listaRange[2])