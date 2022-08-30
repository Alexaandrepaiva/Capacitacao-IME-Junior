
def checkInt(var):
    try:
        number = int(var)
        return True
    except:
        return False

def recursive(p, e):
    if e == 0:
        return 1
    elif e == 1:
        return p
    elif e > 1:
        return recursive(p, e-1) * p

    
b = input() 
exp = input()

is_b = checkInt(b)
is_exp = checkInt(exp)

if not is_b and not is_exp:
    print(f"Base {b} e expoente {exp} não estão no formato devido")
elif not is_b:
    print(f"Base {b} não está no formato devido")
elif not is_exp:
    print(f"Expoente {exp} não está no formato devido")
else:
    elevado = recursive(int(b), int(exp))
    print(f"{b} elevado a {exp} é igual a {elevado}")
