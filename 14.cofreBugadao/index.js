// Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia.
// Na porta do cofre há um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

// Durante alguns testes de rotina foi descoberto um bug na hora
//  de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

// Por exemplo, se a senha for “cubos” e for digitado “cuggbyos”, o cofre irá abrir.

// Input Format

// A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

// Constraints

// S ≤ 10^3 N ≤ 10^5

// Output Format

// Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.

function processData(input) {
    //Enter your code here
    let formatar = input.trim().replaceAll("\n", " ").toLowerCase()
    let senhas = formatar.split(" ")

    let senhaCerta = senhas[0].split("")
    let senhaDigitada = senhas[1].split("")
    let senhaBug = ""
    let posicaoIndex = 0

    for (let i = 0; i < senhaCerta.length; i++) {
        let index = senhaDigitada.indexOf(senhaCerta[i], posicaoIndex)
        if (index >= 0) {
            senhaBug += senhaDigitada[index]
            posicaoIndex = index
        }

    }
    let senhaCertaString = senhaCerta.join("")

    if (senhaCertaString == senhaBug) {
        console.log("SIM")
    } else {
        console.log("NAO")
    }

}
processData(`cubos\ncuggbyos`)