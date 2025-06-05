function exe2() {
    let preco = 5.0
    let qtde = 120
    let lucro
    const despesa = 200
    let aux = ""
    let maiorLucro = 0, precoMaiorLucro = 0, qtdeMaiorLucro = 0
    while (preco >= 1.0){
        lucro = (preco * qtde) - despesa
        if (lucro > maiorLucro){
            maiorLucro = lucro
            precoMaiorLucro = preco
            qtdeMaiorLucro = qtde
        }
        aux = aux + "\n" + (`Preço: ${preco} - Qtde: ${qtde} - Despesa: ${despesa} - Lucro: ${lucro}`)
        preco = preco - 0.50
        qtde = qtde + 26
    }
    alert(aux)
    alert(`Maior Lucro ${maiorLucro} com preço ${precoMaiorLucro} e qtde ${qtdeMaiorLucro}`)
}