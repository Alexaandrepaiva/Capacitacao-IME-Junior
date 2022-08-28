""" 
While / Else - contador e acumulador
"""
contador = 1
acumulador = 1

while contador <= 10:
    print(contador)
    contador += 1

while contador <= 10:
    print(contador, acumulador)
    acumulador = acumulador + contador
    contador += 1
else:
    print('Finalizei o laço do While')


