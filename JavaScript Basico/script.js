/* Var pode ser usada em ESCOPO GLOBAL, ESCOPO DE FUNÇÃO, PODE SER RESSIGNIFICADO, PODE SER REDECLARADO, PODE SER HOSPEDADO*/

/* lET não pode ser usada em ESCOPO GLOBAL, e não PODE SER REDECLARADO, e não PODE SER HOSPEDADO 
  mas pode em ESCOPO DE FUNÇÃO, PODE SER RESSIGNIFICADO, */

/*Const não pode ser usada em ESCOPO GLOBAL, não pode SER RESSIGNIFICADO não pode ser REDECLARADO e não pode ser HOSPEDADO*/


var myName = 'Izaque'

console.log(`My name is ${myName}`)

let language = 'JavaScript'
const country = 'Brazil'

console.log(typeof true)

/*operadores aritiméticos
adição +
subtração -
multiplicação *
divisão /
módulo ou resto da divisão %
incremento ++
decremento --

*/

/* operador de atribuição
= atribuição 

+= atribui o valor da variável + o da atribuida ex: Y = 1  X = 2  (Y+= X   RES: 3) Daria no mesmo se Y = Y + X RES: 3
-=                                                          | | 
*= 
/=
%=                                                         | |
*/

/* Operadores de comparação
== Comparando valor
=== comparando valor e tipo
!= diferente de
< menor
<= menor igual
> maior
>= maior igual

*/

/* Operadores lógicos 
e && 
ou || 
! negação

**/

var num = 4
var num2 = 1

if(num != num2){
  num+= num2 // num é igual a num + num3
  console.log(`${num}`)
}

console.log(13%2) // = 1 
console.log(num++)