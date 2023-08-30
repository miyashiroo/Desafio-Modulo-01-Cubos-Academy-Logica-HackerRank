const jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 1
    },
    {
        "nome": "Laurel",
        "jogada": 1
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 1
    },
    {
        "nome": "Saundra",
        "jogada": 1
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
]

function solucao(jogadores) {

    let vencedor = ""

    let filtroDeUm = jogadores.filter((jogador) => {
        if (jogador.jogada === 1) {
            return jogador.nome
        }
    })
    let filtroDeZero = jogadores.filter((jogador) => {
        if (jogador.jogada === 0) {
            return jogador.nome
        }
    })

    if (filtroDeUm.length === 1) {
        vencedor = filtroDeUm[0].nome
    } else if (filtroDeZero.length === 1) {
        vencedor = filtroDeZero[0].nome
    } else {
        vencedor = "NINGUEM"
    }

    console.log(vencedor)


}



solucao(jogadores)
