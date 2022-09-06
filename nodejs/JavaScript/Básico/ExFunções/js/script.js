function meuEscopo () {
    const form = document.querySelector('.form');
    // form.onSubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    // }
    let contador = 1;
    function recebeEventpForm (evento) {
        evento,preventDefault();
        console.log(`Form não foi enviado ${contador}`)
        contador++; 
    }
    form.addEventListener('submit', recebeEventpForm);
};
meuEscopo ();