// ? :
// (condição) ? 'Valor para verdade' : 'Valor para falso'

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
    console.los('Usuário VIP')
} else {
    console.log('Usuário normal')
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario normal';
console.log(nivelUsuario);