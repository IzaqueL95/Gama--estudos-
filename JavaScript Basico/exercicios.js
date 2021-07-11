/*  FizzBuzz

Divisivel por 3 => 'Fizz'
Divisivel por 5 => 'Buzz'
Divisivel por 3 e 5 => 'FizzBuzz'
Se não for um numero => 'Não é um numero'
Se não for divisivel por 3 e por 5 => 'entrada'

*/
function FizzBuzz(entrada){
    if(typeof entrada != 'number')
        return 'não é um numero';
    if(entrada %3 === 0 && entrada %5 ===0 )    
        return 'FizzBuzz';
    if(entrada %3 ===0)
        return 'Fizz';    
    if(entrada %5 ===0)
        return 'Buzz'; 
    if(entrada %3 != 0 || entrada %5 != 0)    
        return entrada   


}

let resultado = FizzBuzz(8);
console.log(resultado)

//Faça uma reversão de string ex: 'Hello' => 'olleH'

let NewStr ='';
let results = reverseStr('Hello Gama')
function reverseStr(str){
    for(let i = str.length - 1; i>=0; i--){
        NewStr += str[i];
        console.log(NewStr)
    }
}
