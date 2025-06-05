// faça um programa em JS que solicita 6 números
// calcular e exibir:
// os números pares e a qtde de pares
// os números impares e a qtde de impares
function exe1(){
    let vet = [] // declaração do vetor
    for(let i=0;i<6;i++){
        vet.push(Number(prompt(`Informe o ${i+1} elemento`)))
    }
    // encontrar pares e impares e colocar em 2 vetores
    let pares = []
    let impares = []
        for(let i=0;i<6;i++){
            if (vet[i] % 2 == 0){
                pares.push(vet[i])
            }
            else {
                impares.push(vet[i])
            }
        }
       alert(`Qtde de pares ${pares.lenght} - ${pares}`)
       alert(`Qtde de impares ${impares.lenght} - ${impares}`) 

}