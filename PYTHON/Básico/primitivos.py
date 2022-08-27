""" 
Tipos de Dados Primitivos

str - string #textos 'Assim' ou "assim"
int - inteiro #não tem ponto
float - ponto flutuante #tem ponto 
bool - booleano #True/False

"""
print('Alexandre', type('Alexandre'));
print('10', type('10'));
print(10, type(10));
print(25.23, type(25.23));
print(10 == 10, type(10 == 10));
print('l' == 'L', type('l' == 'L'), '\n'); 

#A maioria das coisas que tiver vazias, tem valor booleano de falso
print(bool(''))
print(bool(0))
print(bool([]), '\n')

#É possível converter o tipo de Dados:
print('10', type('10'), type(int('10')), '\n')

#Mas isso pode dar erro, caso a gente tente conver uma string em int ou um float em int, como por exemplo:
#print('alexandre', int('alexandre'));
#print('20.25', int('20.25'));

#Exercíco Cadastro 
print('alexandre', type('alexandre')) #nome
print(23, type(23)) #idade
print(1.85, type(1.85)) #altura
print(23 >= 18, type(23 >= 18)) #maior de idade