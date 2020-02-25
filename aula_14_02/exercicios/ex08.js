let peso = Number(prompt('Informe seu peso:'));
//  precisamos substituir a virgula pelo ponto
//  no valor que retorna do prompt, informado pelo usuário
//  fazemos isso com a função replace
//  o primeiro parametro da função saõ os caracteres que serão
//  substituidos e o segundo parametro e os caracteres que
//  serão colocados no lugar
let altura = Number(
    prompt('Informe sua altura:').replace(',', '.')
);

function calculaImc(peso, altura) {
    return peso / (altura * altura);
}

if (peso && altura) {
    let imc = calculaImc(peso, altura);
    console.log(imc);
    if (imc < 18.5) {
        alert('Abaixo do peso!');
    } else if (imc >= 18.5 && imc < 25) {
        alert('Peso Ideal!');
    } else if (imc >= 25 && imc < 30) {
        alert('Sobrepeso');
    } else if (imc >= 30 && imc < 40) {
        alert('Obesidade')
    } else {
        alert('Obesidade Morbida!')
    }
}