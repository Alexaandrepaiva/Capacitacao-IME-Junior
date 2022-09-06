function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const baixado = form.querySelector('.baixado');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            baixado: baixado.value
        });

        console.log(pessoas);
    }
    form.addEventListener('submit', recebeEventoForm);
};
meuEscopo ();