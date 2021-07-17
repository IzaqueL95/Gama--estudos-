"use strict";
/* Em typescript, devemos dar o nome da variavel, e em seguida colocar o tipo, como visto abaixo, sempre em minusculo*/
//Boolean
var contaPaga = false;
//Number
var idade = 24;
//String
var nome = 'izaque';
//Array
var idades = [1, 2, 3, 5];
//Tuple - definir exatamente o tipo e a posição do item do array
var jogadores;
jogadores = ['Izaque', 'Pedro', 'Felipe', 'Ana', 10];
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao[StatusAprovacao["aprovado"] = 0] = "aprovado";
    StatusAprovacao[StatusAprovacao["pendente"] = 1] = "pendente";
    StatusAprovacao[StatusAprovacao["reprovado"] = 2] = "reprovado";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.aprovado;
//Any espera qualquer coisa como retorno, não muito recomendado por "anular" a typagem do Typescript
var retorno = [123, 'nome', 'qualquer coisa'];
//Uniom Types: Permite a união de tipos
function notas(nota) {
    console.log("A nota \u00E9 " + nota);
}
notas('10');
