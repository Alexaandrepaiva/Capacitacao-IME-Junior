

more_vogals = ""
mv = 0

biggest = ""
length = 0

palindrome = ""
n = 0

def palin(string):
    for i in range(len(string)//2):
        if string[i] != string[-(i + 1)]:
            return False
    return True


while True:
    string = input()
    if string == "":
        break

    now = string.lower().count("a") + string.lower().count("e") + string.lower().count("i") + string.lower().count("o") + string.lower().count("u")
    if now > mv:
        mv = now
        more_vogals = string

    count = 0
    for word in string.split():
        if len(word) > length:
            length = len(word)
            biggest = word
        if palin(word):
            count += 1

    if count > n:
        palindrome = string
        n = count



if biggest == "":
    print("Nenhuma linha não vazia foi lida!!")
else:
    print(f"Linha com mais vogais sem acento: {more_vogals}")
    print(f"Quantidade de vogais sem acento: {mv}\n")

    print(f"Palavra de maior comprimento lida: {biggest}\n")

    print(f"Linha com mais Palíndromos: {palindrome}")
    print(f"Quantidade de palavras Palíndromas: {n}\n")
    
