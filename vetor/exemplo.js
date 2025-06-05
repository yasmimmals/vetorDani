function exemplo(){
    //declara valor
    let vet = []
    // solicita a entrada de dados
    for(let i=0;i<vet.length;i++){
        vet.push(Number(prompt(`Informe o ${i+1}o. elemento`)))
    }
    //calcula a média
    let soma = 0
    for(let i=0;i<vet.length;i++){
        soma = soma + vet[i]
    }
    alert(`A média dos elementos é ${soma/vet.length}`)
}


//2. faça um programa em JS que solicita 10 números
// calcular e mostar o vetor alterado da seguinte forma:
// nas posições pares, somar 10 no elemento
// nas posições impares, multiplicar por 3 o elemento