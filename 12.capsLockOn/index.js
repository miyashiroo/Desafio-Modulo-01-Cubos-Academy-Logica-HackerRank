function processData(input) {


    let stringEmArray = []

    let contadorMinuscula = 0
    let contadorMaiuscula = 0

    let trim = input.trim()

    function inverterTramanho(letra) {

        if (letra === letra.toLowerCase()) {
            return letra.toUpperCase()
        } else if (letra === letra.toUpperCase()) {
            return letra.toLowerCase()
        }


    }

    for (const letra of trim) {
        if (letra === letra.toLowerCase()) {
            contadorMinuscula++
        } else if (letra === letra.toUpperCase()) {
            contadorMaiuscula++
        }
        stringEmArray.push(letra)
    }

    let todasEmCaps = stringEmArray.every((palavra) => palavra === palavra.toUpperCase())
    let todasEmMinusculas = stringEmArray.every((palavra) => palavra === palavra.toLowerCase())

    if (todasEmCaps) {
        return console.log(trim.toLowerCase())
    } else if (todasEmMinusculas) {
        return console.log(trim)
    }

    let invertida = []
    if (contadorMinuscula === 1 && contadorMaiuscula === stringEmArray.length - 1) {
        invertida = stringEmArray.map(inverterTramanho)

        return console.log(invertida.join(""))


    }

    return console.log(trim)




}

processData("cAps")