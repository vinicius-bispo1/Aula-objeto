console.log("Bom dia!!")

// indice      0        1       2       3         4
let dia = ["Segunda","Terça","Quarta","Quinta","Sexta"]

console.log(dia[3])
// .length retorna o número de elementos.
console.log(dia.length)

// Podemos guardar dados diferentes:
let sobre = ["Vinicius", 24, "Salvador"]
// E para imprimirmos no console um item específico do nosso array, escrevemos no console da seguinte maneira:
console.log(sobre[1])

let filmes = ["Interestelar","Tropa de Elite","Contato","Jogo da Imitação","o alto da compadecida"]

//.push - Para acrescentar mais um valor no FINAL
filmes.push("Psicopata Americano")

//.unshift - Para acrescentar mais um valor no INÍCIO
filmes.unshift("O circulo")
//.pop() - remove o ÚLTIMO valor da lista
filmes.pop()
//.shift() - remove o PRIMEIRO valor da lista
filmes.shift()
console.log(filmes)


// OBJETOS

// Objetos são uma maneira de organizar informações de forma estruturada, com pares de chave e valor.
// Componentes de um Objeto:
// Nome do Objeto: uma variável que armazena o objeto.
// Chaves e Valores:
// Chave (também chamada de "propriedade"): é o identificador que usamos para referenciar um valor dentro do objeto.
// Valor: pode ser qualquer tipo de dado, como strings, números, arrays, funções, ou até mesmo outros objetos.

// Exemplo de estrutura:

// const objeto = {
//   chave1: valor1,
//   chave2: valor2,
//   chave3: valor3
// }

const filme = {
    nome: "Corra",// chave: "nome", valor: "Corra"
    lancamento: 2017,// chave: "lancamento", valor: 2017
    avaliacao: 9,// chave: "avaliacao", valor: "9"
    genero: "suspense" // chave: "genero", valor: "suspense"
}

// Acessar propriedades de um objeto:
// Você pode acessar as propriedades de um objeto de duas maneiras:
// Notação de ponto:
console.log(filme.genero)// "suspense"

// Para adicionar propriedades
filme.bilheteria = 300

// Para remover propriedades
delete filme.avaliacao
console.log(filme)


const alunos = [
    {
        nome:"Luccas",
        idade: 22,
        cor: "Azul"
    },
    {
       nome: "Kairo",
       idade: 24,
       cor: "Verde"
    },
    {
        nome:"Ricardo",
        idade: 47,
        cor: "Vermelho"
    }
]

// Para acessar o nome do primeiro aluno:
console.log(alunos[0].nome) // Retorna "Luccas"

// Para adicionar uma nova propriedade ao terceiro aluno:
alunos[1].cidade = "Salvador"
// Para adicionar uma nova propriedade em todos os objetos:
for (i = 0; i <= 2; i++) {

    console.log(i)
    alunos[i].cidade = "Salvador"
}
// Se você quer adicionar um novo aluno ao final do array, use .push():
// Adicionando um novo aluno ao final do array
 alunos.push({nome: "Marina", idade: 25, cor: "Amarelo"})
 console.log(alunos)


//  O código delete alunos[0] irá remover a primeira entrada do array alunos, mas o índice ainda permanecerá no array com o valor undefined.
 delete alunos[0]
 console.log(alunos)
// remover completamente o elemento e ajustar os índices, uma abordagem melhor seria usar o método alunos.splice(0, 1);
