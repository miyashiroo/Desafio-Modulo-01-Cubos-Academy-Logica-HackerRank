// // Ela está fazendo um trabalho de realocar as mesas da sala para que as pessoas preci
// sem andar o mínimo possível. Para tal, ela precisa primeiro rever a posição atual e determinar
// qual é a maior distância que precisa ser andada para uma pessoa chegar na mesa do colega.
// Como o número de pessoas está ficando bem grande, ela precisa escrever um programa para isso.
// Considere que cada pessoa é um ponto no plano euclidiano e que a distância é sempre uma linha reta entre dois pontos.

// // Input Format

// // Neste problema a entranda é um único string que você deve tratar adequadamente para
// obter as informações que você precisa em variáveis separadas.

// // A primeira linha deste string será o inteiro N que indica o número de funcionários da Cubos.
// Nas próximas N linhas você lerá dois números, as coordenadas X e Y do i - ésimo funcionário.

function processData(input) {
    //Enter your code here
    let inputFormatado = input.trim().replaceAll("\n", " ")
    let stringEmArray = inputFormatado.split(" ")
    let numeroDeFuncionarios = stringEmArray[0]
    let coordenadas = []

    // Popula o array de coordenadas, iniciando com i = 1 pois a i = 0 é o numero de funcionarios. 
    // Depois pega i + 2 pra pegar o proximo funcionário no array.
    for (let i = 1, j = 0; j < numeroDeFuncionarios; i = i + 2, j++) {
        coordenadas.push(stringEmArray.slice(i, i + 2))

    }

    let distanciaMaior = 0
    let calculaDistancia = 0

    // Pega as coordenadas e coloca nas variaveis e depois calcula a distancia entre elas, logo após a maior distancia é comparada com o resultado.
    for (let i = 0; i < coordenadas.length; i++) {
        for (let j = 1; j < coordenadas.length; j++) {
            let x1 = parseFloat(coordenadas[i][0])
            let x2 = parseFloat(coordenadas[j][0])
            let y1 = parseFloat(coordenadas[i][1])
            let y2 = parseFloat(coordenadas[j][1])

            calculaDistancia = parseFloat(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)))
            if (calculaDistancia > distanciaMaior) {
                distanciaMaior = calculaDistancia
            }
        }

    }

    console.log(distanciaMaior)




}

