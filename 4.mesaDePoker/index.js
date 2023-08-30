function solucao(min, max, valores) {
    //seu codigo aqui
    let arrayValores = valores

    function filtroMinMaxPermitido(valor) {
        if (valor >= min && valor <= max) {
            return valor
        }
    }

    let arrayResposta = arrayValores.filter(filtroMinMaxPermitido)
    console.log(arrayResposta)

}