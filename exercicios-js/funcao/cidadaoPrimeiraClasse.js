// Função  em JS é First-Class Object (Citizens)
// Higher-order Function

// criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// passar funcao como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// uma funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)