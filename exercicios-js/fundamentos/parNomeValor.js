// par nome/valor
const saudacao = 'Opa' // contexto léxico 1 (contexto onde a variável está definida fisicamente no código)

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2 
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Eduardo',
    idade: 26,
    peso: 81,
    endereco: {
        logradouro: 'Rua Monte Alto',
        numero: 220
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)