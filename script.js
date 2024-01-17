let n1 = prompt('Digite o primeiro número: ')
let n2 = prompt('Digite o segundo número: ')

n1 = Number(n1)
n2 = Number(n2)

let sum = n1 + n2
let subtraction = n1 - n2
let multiplication = n1 * n2
let division = n1 / n2
let rest = n1 % n2
let par = (n1 + n2) % 2 

alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + subtraction)
alert('A multiplicação dos dois números é: ' + multiplication)
alert('A divisão dos dois números é: ' + division)
alert('O resto da divisão dos dois números é: ' + rest)

if(n1 == n2){
  alert('Os dois números inseridos são iguais!')
} else{
  alert('Os dois números inseridos são diferentes!')
}

if(par == 0){
  alert('A soma dos dois números é par!')
} else{
  alert('A soma dos dois números é impar!')
}