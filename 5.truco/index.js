function solucao(carta) {
    //seu codigo aqui
    let arrayDeCartas = ["Q", "J", "K", "A", "2", "3"]
    let posicaoCarta = arrayDeCartas.indexOf(carta)

    // Caso a carta passada for a ultima do array de cartas, será impressa a primeira posicao do array
    if (posicaoCarta === arrayDeCartas.length - 1) {

        console.log(arrayDeCartas[0])
    } else {
        // Imprime a proxima carta da posicao do array
        console.log(arrayDeCartas[posicaoCarta + 1])
    }



}

