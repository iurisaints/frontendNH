let nome = prompt("Insira seu nome: ")
let anoNasc = Number(prompt("Insira o ano do seu nascimento: "))
let anoAtual = Number(prompt("Insira o ano atual: "))

alert(`Nome: ${nome}`)
alert(`Idade: ${anoAtual- anoNasc}`)
alert(`É maior de idade? ${(anoAtual - anoNasc) > 17}`)
alert(`Idade em 2050: ${2050 - anoNasc}`)



/*

let a = Number(prompt("Insira um valor: "))
let b = Number(prompt("Insira outro valor: "))
alert(`Idade: ${anoNasc - anoAtual}`)


let a = true
let b = false
let c = true

alert(!a)
alert(!b)

alert(a&&b) //false
alert(b&&c) //false
alert(a&&c) //true
alert(a && b && c) //false

alert(a||b) //true
alert(b||c) //true
alert(a||c) //true
alert(a || b || c) //true 
*/