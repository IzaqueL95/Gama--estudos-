const pessoa = {
    nome: "Izaque",
    altura: 1.80
}

//console.log(pessoa.nome)

//Uma outra forma menos verbosa é usando o destructuring

const {nome, altura} = pessoa

console.log(nome)

const filmes = [
    {
        id: 1,
        titulo: "Titanic",
        ano: 1997

    },
    {
        id: 2,
        titulo: "Avengers ultimato",
        ano: 2019

    },
    {
        id: 3,
        titulo: "O rei leao",
        ano: 1997

    },


]

const [{id, titulo, ano}] = filmes

//console.log(titulo)
filmes.map(tody => console.log(tody.ano))

var myName1
var 1Myname 