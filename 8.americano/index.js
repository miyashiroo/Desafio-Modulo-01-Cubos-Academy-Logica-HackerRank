function solucao(numeros) {
    // seu codigo aqui

    let somaNumeros = 0
    let numeroDeJogadores = numeros.length

    for (const numero of numeros) {
        somaNumeros += numero
    }

    let contador = 1;
    let posicao = 1


    // Contador na posicao 1 e vai contando até a soma dos numeros.
    for (let i = 1; contador <= somaNumeros; i++, contador++) {

        // Quando o i tiver o valor dos numeros dos jogadores + 1 ele reinicia novamente para 1, como se fosse um circulo.
        if (i === numeroDeJogadores + 1) {
            i = 1
            posicao = i
        }
        posicao = i

    }
    console.log(posicao)

}

solucao([1, 3, 2, 1])