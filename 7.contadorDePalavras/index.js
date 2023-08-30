function solucao(texto) {

    let arrayDoTexto = texto.split(" ")

    function filtroDeEspacoVazio(array) {
        return array !== ""
    }

    let textoFiltrado = arrayDoTexto.filter(filtroDeEspacoVazio)
    let contadorPalavras = textoFiltrado.length

    console.log(contadorPalavras)

}

