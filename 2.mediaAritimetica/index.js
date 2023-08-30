function solucao(lista) {
    //seu codigo aqui
    let somaTotal = 0;
    let tamanhoDaLista = lista.length
    let mediaPorDia = 0

    for (const numero of lista) {
        somaTotal += numero
    }

    mediaPorDia = somaTotal / tamanhoDaLista

    console.log(mediaPorDia)

}