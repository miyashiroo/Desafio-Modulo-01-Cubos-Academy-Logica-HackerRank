function solucao(lista) {

    function filtroMaiorIdade(valor) {
        return valor >= 18
    }

    let maioresDeIdade = lista.filter(filtroMaiorIdade)

    if (maioresDeIdade.length === 0) { // Caso nao tenha ninguem de maior
        console.log("CRESCA E APARECA")
    } else {
        let cacula = maioresDeIdade[0]; // inicia com o primeiro elemento do array para assim ter alguem para comparar.

        for (const idade of maioresDeIdade) {
            if (idade < cacula) {
                cacula = idade
            }
        }
        console.log(cacula)
    }

}

