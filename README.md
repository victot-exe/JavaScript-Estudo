# JavaScript-Estudo
Estudo de JavaScript


## Definição
JavaScript != Java, o erro se da por conta de uma jogada de marketing na época.  
JavaScript é usado para fazer a parte interativa de apps e páginas web.  

## Boas prátivas
<ul>
<li>Externar o Script.js</li>
<li>Carregar o Script.js ao final do body</li>
</ul>

## Variáveis
Espaço reservado na memória para guardar dados de diferentes tipos.
### Três modos de declarar
* `var` - Escopo local e global e pode ter seu valor alterado, se não declarado um valor inicial será tratado como `null`.
* `let` - Escopo local e pode ter seu valor alterado, se não declarado um valor inicial será tratado como `null`.
* `const` -Escopo local, somente leitura, é obrigatório declarar um valor inicial.

### Tipagem
#### O que é?
Regra de uso de dados, quanto mais forte for a tipagem mais obrigatório é a declaração do tipo de dado. Java é uma linguagem com a tipagem forte, enquanto JS é de tipagem fraca onde a declaração dos dados acontece de modo dinâmico.
#### Tipos primitivos
* `boolean` - true or false.  
* `null`  
* `undefined` - valor que ainda não foi definido.  
* `number` - Números(1, 2...).  
* `string` - "entre aspas texto".  
* `array`  
* `object`  
* `function` - função/método.  

### Escopo
Escopo define a visibilidade de um bloco de código:
* Escopo local: declarada dentro de um bloco de código, pode ficar visível ou não.
* Escopo global: declarada fora de qualquer bloco, fica visível e disponível em todo o código.

### Regras para declarar variáveis
* Iniciar com letra, `_` ou `$`.
* Não iniciar com números.
* Usar `camelCase` ou `camel_case`.
* Não usar palavras reservadas (`function`, `number`).
* Declarar as variáveis no topo do bloco de código.

## Usos do `=`
* `=` -> Atribuição de valor.
~~~
var variavel = "valor";
console.log(variavel);
~~~
`valor`
* `==` -> Comparação de valor, retorna um `boolean`.
~~~
var comparacao = '0' == 0 ?;
console.log(comparacao);
~~~
`true`
* `===` -> Comparação absoluta de variaveis (compara o valor e o tipo), retorna um `boolean`.
~~~
var comparacao = '0' == 0 ?;
console.log(comparacao);
~~~
`false`

## Operadores 
### Operadores aritiméticos
* `+` -> Soma;
* `-` -> Subtração;
* `*` -> Multiplicação;
* `/` -> Divisão;
* `**` -> Potenciação;
* `%` -> Resto de divisão;
### Operadores relacionais
_retornam boolean_
* `>` -> maior que;
* `<` -> menor que;
* `>=` -> maior ou igual a;
* `<=` -> menor ou igual a;

### Operadores lógicos
* `&&` - "and" - considera se todos sejam true;
* `||` - "or" - considera se qualquer valor seja true;
* `!` - "not" - negação(quando verdadeiro vira falso e vice-versa);

## Vetores ou Arrays
* São um tipo de lista ou matriz de variáveis, onde cada uma delas possui um índice(começando do 0).
* Os tipos podem variar e inclusive ser array.
* Imagine caixas dentro de caixas.
* Deve ser declarado entre `[]` e ter as variáveis dividido por `,`;
~~~
let array = ['string', 1, true...];
~~~
### Manipulando arrays
* `forEach()` - Percorre a array;
* `push()` - Adiciona um item no final da array;
* `pop()` - Remove item no final da array;
* `shift()` - Remove item no inicio da array;
* `unshift()` - Adiciona item no inicio da array;
* `indexOf()` - Retorna o índice de um valor;
* `splice()` - Remove ou substitui um item pelo índice;
* `slice()` - Retorna parte da array existente;

## Objetos
Dados que possuem propriedades e valores, deve ser declarado entre `{}`
~~~
var camiseta = {
    cor: 'branca',
    tamanho: 'p',
    funcao: vestir(){}
}
~~~
### Manipulando objetos
Para facilitar a manipulação as propriedades do objeto podem ser atribuidas a variáveis. Chamamos isso de desestruturação.
~~~
var camiseta ={cor: 'branca', tamanho: 'p', funcao: vestir()}
var cor = camiseta.cor
var tamanho = camiseta.tamanho
var funcao = camiseta.vestir()
~~~

## Estruturas de decisão
### if
* Usamos o `if` para estabelecer uma condição para passar ou não por um bloco de código:
~~~
var j1 = 0
var j2 = 0
if(j1 > 0){
    console.log('jogador 1 marcou ponto.')
}
~~~
### else
* No caso do `if` não ser atendido colocamoso `else` para outro bloco de código:
~~~
var j1 = 0
var j2 = 0
if(j1 > j2){
    console.log('Jogador 1 ganhou!')
} else{
    console.log('Jogador 2 ganhou!')
}
~~~
`Jogador 2 ganhou`   
_temos esse resultado pois j1 não é maior que j2(o algoritimo ainda precisa melhorar.)_

### else if
* `else if` é utilizado para quando temos varias condições e precisamos de varios 'ifs'
~~~
var j1 = 0
var j2 = 0
if(j1 > j2){
    console.log('Jogador 1 ganhou!')
} else if(j2 > j1){
    console.log('Jogador 2 ganhou!')
} else{
    console.log('O jogo empatou')
}
~~~
`O jogo empatou`  
_Aqui já temos um algoritimo mais completo_  

### if ternário
* Podemos usar o operador ternário para verificar o `if` em apenas uma linha:
~~~
var condicao = j1 > j2 ? condicao se true : conficao false
~~~

### switch/case
* Outra estrutura de condição, recebemos um variavel e falamos o que acontece com ela dependendo do valor:
~~~
switch(expressão){
    case 1:
    {bloco de código}
    break
    case 2:
    {bloco de código}
    break
}
~~~

## Laços de repetição
* Estruturas que repetem as instruções até atingir uma condição:

### for
* Repete a instrução até que a condição seja false
for(expressãoInicial; condição; incremento){
    bloco de código
}
~~~
for(let i = 0; i < array.length; i++){
    console.log(i)
}
~~~
### for/in
* Percorre as propriedades de um objeto e retorna o índice de cada uma, além de executar o bloco de código a cada repetição;
* Para objetos ela retorna as propriedades e para arrays retorna o índice;
~~~
var array = [1, 2, 3, 4]
for(i in array){
    console.log(i)
}
~~~
### for/of
* Parecido com o `for/in`, a diferença é que este retorna o valor de cada elemento
~~~
var array = [1, 2, 3, 4]
for(i of array){
    console.log(i)
}
~~~
### while
* Enquanto a condição for verdadeira ele executa o código;
* A verificação é feita antes da execução
~~~
var a = 0;
while(a < 10){
    a++
    console.log(a)
}
~~~
### do/while
* Parecido com o while ele repete o código até que a condição seja `false`
* A diferença é que a verificação é feita após a execução do mesmo:
~~~
var a = 0
do{
    a++
    console.log(a)
} while(a<10)
~~~
