function exe6(){
    let codigo, valor
    let valorVista = 0, valorPrazo = 0
    let total, primeiraParcela
    for(let conta=1;conta<=5;conta++){
        codigo = prompt(`Informe V (à vista) ou P (à prazo)`).toUpperCase()
        valor = Number(prompt(`Informe o ${conta} valor`))
        if (codigo == `V`){
            valorVista = valorVista + valor
        }
        else if (codigo == `P`){
            valorPrazo = valorPrazo + valor
        }
        else {
            alert(`Código Inválido`)
            conta--
        }
    }
    total = valorVista + valorPrazo
    primeiraParcela = valorPrazo / 3
    alert(`Total à vista ${valorVista}, Total à prazo ${valorPrazo}, Total ${total} 1ª parcela ${primeiraParcela}`)
}