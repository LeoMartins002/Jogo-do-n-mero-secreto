function calculoimc(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}
let imc = calculoimc(76, 1.72);
console.log('O IMC é', imc)


function converterDolarParaReal(valorEmDolar) {
    let cotacaoDoDolar = 5.80;
    let valorEmReais = valorEmDolar * cotacaoDoDolar;
    return valorEmReais.toFixed(2)
}
let valorEmDolar = 50
let valorEmReais = converterDolarParaReal(valorEmDolar)
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`)


function areaEPerimetro(altura, largura) {
    let area = altura * largura
    let perimetro = 2 * (altura + altura)

    console.log(`Área da sala: ${area} metros quadrados`)
    console.log(`Perimetro da sala: ${perimetro} metros`)
}

let altura = 3 
let largura = 5
areaEPerimetro(altura, largura)