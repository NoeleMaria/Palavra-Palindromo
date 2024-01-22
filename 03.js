let palavraRecebida = prompt('Olá! Digite uma palavra para verificar se é um palíndromo: ')

verificarPalavraPalindromo();

function verificarPalavraPalindromo () {
    var separandoLetrasPalavra = palavraRecebida.split('');
    //console.log(separandoLetrasPalavra);
    let palavraInvertida = separandoLetrasPalavra.reverse();
    palavraInvertida = palavraInvertida.join('');

    if (palavraRecebida == palavraInvertida) {
        console.log(`A palavra ${palavraRecebida} é um palíndromo.`);
    } else {
        console.log(`A palavra ${palavraRecebida} não é um palíndromo.`);
    }
}