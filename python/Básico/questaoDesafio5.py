first_string = input()
second_string = input()
bigger_string = ""
smaller_string = ""
biggest_substring = ""
i = 0
diferentes = 0
n = 1


if len(first_string) > len(second_string):
    bigger_string = first_string
    smaller_string = second_string
else:
    bigger_string = second_string
    smaller_string = first_string

for letter in smaller_string:
    if bigger_string[i] == letter:
        for bigger_string[i] in len(smaller_string):
            if bigger_string[i] == letter:
                i += 1
            else:
                diferentes += 1


print(
    f"A subcadeia mais próxima tem {diferentes} caracteres distintos e começa na posição x da cadeia {bigger_string}")
