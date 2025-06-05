function exe3() {
    let a, b, c, d, aux, cont, cont1
    let grupo = 1
    a = Number(pronpt(`Informe o valor de a: `))
    b = Number(pronpt(`Informe o valor de a: `))
    c = Number(pronpt(`Informe o valor de a: `))
    d = Number(pronpt(`Informe o valor de a: `))
    cont = 0
    while (grupo <= 5) {
        while (cont < 3) {
            if (a > b) {
                aux = a; a = b; b = aux;
            }
            if (b > c) {
                aux = b; b = c; c = aux;
            }
            if (c > d) {
                aux = c; c = d; d = aux;
            }
            if (a > b) {
                aux = a; a = b; b = aux;
            }
            if (b > c) {
                aux = b; b = c; c = aux;
            }
            if (a > b) {
                aux = a; a = b; b = aux;
            }
            conta++
            alert(`Ordem crescente ${a} ${b} ${c} ${d}` `Ordem decrescente ${d} ${c} ${b} ${a}`)
        }
    }
}