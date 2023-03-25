
const firstNumber = Number(prompt(`Digite o primeiro número:`))
const secondNumber = Number(prompt(`Digite o segundo número:`))


const sum = () => {
    return `A soma dos dois números é: ${firstNumber + secondNumber}`
}

const sub = () => {
    return `A subtração dos dois números é: ${firstNumber - secondNumber}`
}

const mult = () => {
    return `A multiplicação dos dois números é: ${firstNumber * secondNumber}`
}

const div = () => {
    return `A divisão dos dois números é: ${(firstNumber / secondNumber).toFixed(2)}`
}

const rest = () => {
    return `O resto da divisão dos dois números é: ${firstNumber % secondNumber}`
}

const evenOrOdd = () => {
    let sum = firstNumber + secondNumber
    let result

    if( (sum % 2) == 0 ) {
        result =`A soma dos dois números é par: ${sum}`
    } else {
        result =`A soma dos dois números é ímpar: ${sum}`
    }

    return result
}

const equals = () => {
    let result

    if (firstNumber == secondNumber) {
        result =`Os números inseridos são iguais`
    } else {
        result =`Os números inseridos são diferentes`
    }

    return result
}

const resultCalc = [sum(), sub(), mult(), div(), rest(), evenOrOdd(), equals()]

for(let result of resultCalc) {
    alert(result)
}
