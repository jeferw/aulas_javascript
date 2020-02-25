let velocidade = Number(prompt('Informe a velocidade:'));

if (velocidade) {
    if (velocidade > 80) {
        let multa = (velocidade - 80) * 7;
        alert(`Multa de R$ ${multa}!`);
    } else {
        alert('Sem multas.');
    }
}