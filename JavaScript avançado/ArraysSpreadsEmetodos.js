const nomes = ["Paula", "Felip", "João", "Sidney"]
console.log(nomes[0])

//operador spred, permite copiar alterações de um array sem altera-lo diretamente (...)
const novosNomes= [...nomes, "Izaque"]
console.log(novosNomes)

//Métodos de iteração
for(let i=0; i < novosNomes.length; i++){
    console.log(novosNomes[i])
}

//.Map espera uma função call back, que é executada quando ele passar por todos os itens do array
//Bom quando se quer percorrer um array sem altera-lo
novosNomes.map(aluno  => console.log(aluno))


//filter
const numeros = [20, 34, 4, 2, 7, 14, 37, 55]
//Filtrando numeros que o resto da divisão por 2 é diferente de 0 ou seja os impares
const numerosImpares = numeros.filter(abc => abc%2 !=0)
console.log(numerosImpares)

const ordemDecresente = numeros.sort((a,b) => b-a)   
console.log(ordemDecresente)

//reduce - reduz o array a um resultado de uma operação matematica
const valores = [10,20,30,40,50]

// passo 2 parametros dentro do reduce, para indicar no escopo o que cada item do Array fara a seguir, somar, subtrair etc.
const soma = valores.reduce((valorAnterior, valorAtual) => {
    return valorAnterior * valorAtual
    
})
console.log(soma)