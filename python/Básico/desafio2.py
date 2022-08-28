numero = input('Digite um número inteiro: ')

try:
    numero_int = int(numero)
    if numero_int%2 == 0:
        print ('O número é par')
    else:
        print('O número é ímpar')
except:
    print('O caractere digitado não foi um número inteiro.')