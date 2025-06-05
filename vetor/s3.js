/* Enunciado: Pesquisa Opinião com Vetores
Crie uma função chamada exe3() que simule uma pesquisa de opinião sobre 
um evento. O programa deve:
Ler as respostas 10 pessoas, onde cada resposta é um número:
1 = Gostou muito 
2 = Gostou 
3 = Não gostou 
 Armazenar as respostas em um vetor. 
 Ao final, exibir: 
 Quantas pessoas responderam cada opção (1, 2 e 3)
 A porcentagem de pessoas que não gostaram (responderam 3) */

function exe3() {
    let vet = []
    let opcao1 = 0, opcao2 = 0, opcao3 = 0
     for(let i =0; i<10; i++){
        do{
        vet[i] =(Number(prompt(`Informe o seu voto (1, 2, 3)`)))
        }
        while  (vet[i])
        
    //vamos contar
    for (let i = 0; i < 10; i++){
        if (vet[i] == 1){
            conta1++
        }
        else if (vet[i] == 2){
            conta2++
        }
        else {
            conta3++
        }
    }
    alert(`Gostou muito ${conta1} Gostou ${conta2} não gostou ${conta3}`)
}