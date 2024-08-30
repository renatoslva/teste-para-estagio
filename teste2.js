function isPerfectSquare(x) {
    let s = Math.sqrt(x);
    return s * s === x;
}

function isFibonacci(n) {
    // Um número é Fibonacci se e somente se um dos dois valores for um quadrado perfeito:
    // 5*n^2 + 4 ou 5*n^2 - 4
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
}

// Número a ser verificado
let numero = 123;

// Verifica se o número pertence à sequência de Fibonacci
if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
}
