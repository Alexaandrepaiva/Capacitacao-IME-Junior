""" 
Iterando strings com while
"""

# frase = 'O rato roeu a roupa do rei de roma'
# tamanho_frase = len(frase)
# contador = 0
# nova_string = ''

# while contador < tamanho_frase:
#     print(frase[contador], contador)
#     nova_string += frase[contador]
#     print(nova_string)
#     contador += 1
    
#Faça um programa que pergunte uma letra e a capitalize na frase dada
frase = 'O rato roeu a roupa do rei de roma'
nova_frase = ''
i = 0
letra_maiscula = input(f'Qual letra da frase: "{frase}" você quer deixar maiúscula? ')
letra_maiscula = letra_maiscula.lower()

while i < len(frase):
    letra = frase[i]
    if letra == letra_maiscula:
        nova_frase += letra_maiscula.upper()
    else:
        nova_frase += letra
    i += 1

print(nova_frase)

    


