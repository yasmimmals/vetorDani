function faixa(){
    let conta = 1
    let f1 = 0
    let f2 = 0
    let f3 = 0
    let f4 = 0
    let f5 = 0
    let idade
    while (conta <= 8){
        idade = Number(prompt(`Informe a idade da pessoa: ${conta}`))

        if(idade >= 0 && idade <= 15){
            f1++
        }
        else if(idade >= 16 && idade <=30){
            f2++
        }
        else if(idade >= 31 && idade <= 45){
            f3++
        }
        else if(idade >= 46 && idade <= 60){
            f4++
        }
        else if(idade > 60 && idade < 120){
            f5++
        }
        else {
            alert(`Idade Inválida`)
            continue
        }
        conta ++
    }
    primeirafaixa = (f1/8)*100
    ultimafaixa = (f5/8)*100
alert(`A quantidade de pessoas é: \nf1 ${f1}\nf2 ${f2}\nf3 ${f3}\nf4${f4}\nf5${f5}`)
alert(`A porcentagem de pessoas na f1 é: ${primeirafaixa}%`)
alert(`A porcentagem de pessoas na f5 é: ${ultimafaixa}%`)
}