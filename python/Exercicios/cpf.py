cpf = '16899535009'
soma1 = 0
soma2 = 0
verificador_1 = 0
verificador_2 = 0

for indice, value in enumerate(range(10, 1, -1)):
    produto = int(cpf[indice]) * value
    soma1 += produto

if int(11-(soma1 % 11) > 9):
    verificador_1 = 0
else:
    verificador_1 = int(11-(soma1 % 11))

for indice, value in enumerate(range(11, 1, -1)):
    produto = int(cpf[indice]) * value
    soma2 += produto

if int(11-(soma2 % 11) > 9):
    verificador_2 = 0
else:
    verificador_2 = int(11-(soma2 % 11))

if int(cpf[-2]) == verificador_1 and int(cpf[-1]) == verificador_2:
    print('CPF válido')
else:
    print('CPF inválido')
