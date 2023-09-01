var funcao = () =>{
    console.log('pronto')
}

function calculadora(){
    var alerta = 'Escolha uma operação:/n 1-Soma (+)\n 2-Subtração (-)\n 3-Multiplicação (*)\n 4-Divisão\n 5-Resto de divisao (%)\n 6-Potenciação (**)'
    const operacao = prompt(alerta)
    
    let n1 = Number(prompt('Insira o primeiro valor'))
    let n2 = Number(prompt('Insira o segundo valor'))
    let resultado


    if(operacao == 1){
        var soma = () => {
            resultado = num1 + num2
            alert(`${num1} + ${num2} = ${resultado}`)
        }
    }else if(operacao == 2){
        var subtracao = () => {
            resultado = num1 - num2
            alert(`${num1} - ${num2} = ${resultado}`)
        }
    }else if(operacao == 3){
        var multiplicacao = () => {
            resultado = num1 * num2
            alert(`${num1} * ${num2} = ${resultado}`)
        }
        
    }else if(operacao == 4){
        var divisao = () => {
            resultado = num1 / num2
            alert(`${num1} / ${num2} = ${resultado}`)
        }
        
    }else if(operacao == 5){
        var restoDeDivisao = () => {
            resultado = num1 % num2
            alert(`${num1} % ${num2} = ${resultado}`)
        }
       
    }else if(operacao == 6){
        var potencia = () => {
            resultado = num1 ** num2
            alert(`${num1} ^ ${num2} = ${resultado}`)
        }
    }
}



calculadora()