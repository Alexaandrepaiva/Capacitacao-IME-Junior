
def main():
    n = int(input())

    if n == 0:
        print("Nenhum número foi lido, portanto, sem mínimo e máximo!!")
    else:
        full = []
        for i in range(n):
            sub = list(map(lambda x: int(x), input().split()))
            full.extend(sub)
        
        print(f"Menor Número: {min(full)} e Maior Número: {max(full)}")

main()

