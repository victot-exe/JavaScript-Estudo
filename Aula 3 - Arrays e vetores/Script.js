//declarando uma array
/* let array = ['String', 1, true]
console.log(array) */
let array = ['string', 1, true, ['array 1'], ['array2'], ['array3'], ['array4']]
console.log(array)

//forEach
/* array.forEach(function( item, index){console.log(item, index)}) */

/* array.push('novo item')
console.log(array)

array.pop()

array.shift()

array.unshift()

console.log(array.indexOf(true))

array.splice(0, 3)
console.log(array)

let novoArray = array.slice(0, 3)
console.log(novoArray) */

let object={ string: 'string', number: 1, boolean: true, array:['array'], objetoInterno:{objetoInterno: 'objeto interno'}}
console.log(object.string)
var string = object.string//desestruturação