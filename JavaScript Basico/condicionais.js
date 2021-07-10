var num = 1;

/* comparação tanto de igualdade quanto de tipo*/
if( num === 1){
    console.log(`sim ${num} é igual a 1`)
}

var mes = "abril"

switch(mes){
    case "fevereiro":
    console.log("mes 2")
    break;

    case "abril":
        console.log("mes 4")
        break;

        default:
            console.log("Não atendido")
}

/* Estruturas de repetição */

var colors = ["yellow", "blue", "black", "white", "pink"];

for (var i=0; i<4; i++){
    console.log(colors[i]);
}

for(var i=0; i<=10; i++){
    console.log(i)
}

var a = 0

while(a >=0 && a<10){
    a++
    console.log(a)
}

var b = 0

do{
    console.log(b)
    b++;
} while(b >=0 && b<= 10);