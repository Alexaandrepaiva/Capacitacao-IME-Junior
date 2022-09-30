"""
Há duas maneiras de se criar dicionários
dicionario = { CHAVE : VALOR, OUTRA_CHAVE : OUTRO_VALOR}
"""

# Maneira 1
dicionario = {'nome': 'Alexandre', 'chave': 'valor da chave'}
dicionario['nova chave'] = 'Alguma coisa'
print(dicionario)

# Maneira 2
dicionario_2 = dict(chave1='Valor da chave 1', chave2='Valor da chave 2')
print(dicionario_2)