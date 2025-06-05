function pesquisaSatisfacao() {
    let nota // guarda as notas
    let conta = 1 // conta de 1 a 10
    let Satisfeito = 0
    let Insatisfeito = 0
    let somaSatisfeito = 0
    let somaInsatisfeito = 0
    let soma = 0
    while (conta <= 10) {
        nota = Number(prompt(`Informe a nota ${conta}`))
        if (nota < 0 || nota > 10 || isNaN(nota)) {
            alert('Nota Inválida')
            continue // volta para o inicio do jogo
        }
        else if (nota >= 8) {
            Satisfeito++
            somaSatisfeito = Satisfeito
        }
        else if (nota < 5) {
            Insatisfeito++
            somaInsatisfeito = Insatisfeito
        }
        soma = soma + nota
        conta++ // conta = conta + 1 (incrementa conta)
    }

let media = soma / 10
// mostra o resultado
alert(`A média das notas é ${media.toFixed(1)}`)
alert(`A quantidade de pessoas satisfeitas é ${somaSatisfeito}`)
alert(`A quantidade de pessoas insatisfeitas é ${somaInsatisfeito}`)

}