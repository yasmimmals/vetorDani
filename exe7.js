function exe7(){
    let idade, peso, altura
    let qtdePessoasIdade = 0
    let qtdePessoasPeso = 0
    let somaAltura = 0
    let qtdePessoasIdade10e20 = 0
    for(let conta = 1; conta <=5; conta++){
        idade = Number(prompt(`Informe a idade da pessoa ${coonta}`))
        peso = Number(prompt(`Informe o peso da pessoa ${conta}`))
        altura = Number(prompt(`Informe a altura da pessoa ${conta}`))
        if (idade > 50){
            qtdePessoasIdade++
        }
        if (peso < 40){
            qtdePessoasPeso++
        }
        if (idade >= 10 && idade <=20){
            somaAltura = somaAltura + altura
            qtdePessoasIdade10e20++
        }
    }
    alert(`Item 1 ${qtdePessoasIdade} Item 2 ${somaAltura/qtdePessoasIdade10e20} e Item 3 ${qtdePessoasPeso/5*100}`)
}