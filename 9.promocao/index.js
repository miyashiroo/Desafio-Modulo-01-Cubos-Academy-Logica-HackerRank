function solucao(precos) {


    let somaTotal = 0

    for (const preco of precos) {
        somaTotal += preco
    }



    if (precos.length >= 3) { // verifica se ocorre promocao
        let maisBarato = precos[0]
        let totalDepoisDoDesconto = 0

        for (const preco of precos) { // acha o mais barato 
            if (preco < maisBarato) {
                maisBarato = preco

            }
        }

        totalDepoisDoDesconto = (somaTotal - maisBarato) + (maisBarato * 0.5)
        return console.log(totalDepoisDoDesconto)


    }


    console.log(somaTotal)


}