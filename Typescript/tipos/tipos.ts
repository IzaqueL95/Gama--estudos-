/* Em typescript, devemos dar o nome da variavel, e em seguida colocar o tipo, como visto abaixo, sempre em minusculo*/


//Boolean
const contaPaga: boolean = false;

//Number
const idade:number = 24;

//String
const nome: string = 'izaque';

//Array
const idades: number[] = [1,2,3,5]

//Tuple - definir exatamente o tipo e a posição do item do array
let jogadores: [string, string, string,string, number]
jogadores = ['Izaque', 'Pedro', 'Felipe','Ana', 10]

enum StatusAprovacao{
    aprovado,
    pendente,
    reprovado,
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.aprovado;

//Any espera qualquer coisa como retorno, não muito recomendado por "anular" a typagem do Typescript
const retorno: any[] = [123, 'nome', 'qualquer coisa']

//Uniom Types: Permite a união de tipos

function notas(nota:number | string){
    console.log(`A nota é ${nota}`)
}
notas('10')

//Alias - basicamente defino um tipo para uma váriavel, para usa-la.
type Pessoas  = string[];
const pessoas: Pessoas = ['hugo', 'izaque', 'vitoria']

type Funcionario = {
    nome: string;
    idade: number;
}

const funcionarios: Funcionario[] = [{
    nome: 'izaque',
    idade: 24
},{
    nome: 'Pamela',
    idade: 25
}]