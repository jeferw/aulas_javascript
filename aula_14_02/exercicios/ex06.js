let largura = Number(
    prompt('Informe a largura da parede em metros:'));

let altura = Number(
    prompt('Informe a altura da parede em metros:'));

// definição da função para calcular a área 
function calculaArea(largura, altura) {
    return largura * altura;
}

function calculaTinta(area) {
    return area / 2;
}

if (largura && altura) {
    // faz a chamada da função para calcular a área
    let area = calculaArea(largura, altura);
    alert(`A área da parede é ${area}.`);
    alert(`${calculaTinta(area)} litros de tinta vão ser necessários para pinta-lá.`)
}