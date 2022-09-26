secreto = "abacaxi"
digitadas = []
chances = 5

while True:
    if chances <= 0:
        print(f'Infelizmente, você perdeu todas suas chances! A palavra era {secreto}\n')
        break
    
    letra = input("Digite uma letra: ")
    
    if len(letra)>1:
        print("Isso não vale, digite apenas uma letra.")
        continue
    
    
    
    if letra in secreto:
        print(f"\nBoa! A letra '{letra}' existe na palavra secreta.")
        digitadas.append(letra)
    else:
        print(f"\nInfelizmente a letra '{letra}' NÃO EXISTE na palavra secreta.")
        chances -= 1
    
    secreto_temporario = ''
    for letra_secreta in secreto:
        if letra_secreta in digitadas:
            secreto_temporario += letra_secreta
        else:
            secreto_temporario += '*'
    
    if secreto_temporario == secreto:
        print(f'\nParabéns, você acertou!\nA palavra era: "{secreto_temporario}"\n')
        break
    else:
        print(f'A palavra secreta está assim: {secreto_temporario}\n')
    