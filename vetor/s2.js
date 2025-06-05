//2. faça um programa em JS que solicita 10 números
// calcular e mostar o vetor alterado da seguinte forma:
// nas posições pares, somar 10 no elemento
// nas posições impares, multiplicar por 3 o elemento
function exe2() {
    let vet = []
    for (let i = 0; i < 10; i++) {
        vet.push(Number(prompt(`Informe o ${i + 1} elemento`)))
    }
    //altera o vetor original
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) { //posição é par
            vet[i] = vet[i] + 10
        }
        else {
            vet[i] = vet[i] * 3
        }
    }
    alert(`Novo vetor alterado ${vet}`)
}