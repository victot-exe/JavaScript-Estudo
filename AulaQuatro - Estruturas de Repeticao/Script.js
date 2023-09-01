//if
var j1 = 0
var j2 = 0
if(j1 > j2){
    console.log('Jogador 1 ganhou!')
} else if(j2 > j1){
    console.log('Jogador 2 ganhou!')
} else{
    console.log('O jogo empatou')
}
//if ternario
//var condicao = j1 > j2 ? true : false
//for
var array = ['valor1','valor2', 'valor3', 'valor4']
let objeto = {
    propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'
}
for(let i = 0; i < array.length; i++){
    console.log(i)
} 
//for/in
for(i in array){
    console.log(i)
}
for(i in objeto){
    console.log(i)
}
//for/of
for(i of array){
    console.log(i)
}
//while
var a = 0;
while(a < 10){
    a++
    console.log(a)
}
//do/while
do{
    a++
    console.log(a)
} while(a<10)