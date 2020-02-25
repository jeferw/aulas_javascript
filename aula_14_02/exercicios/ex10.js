let qtde = Number(prompt('Informe a quantidade de itens:'));
let valor = Number(
    prompt('Informe o valor dos itens:').replace(',', '.'));

function calculaTotal(qtde, valor) {
    let total = qtde * valor;
    if (total > 90) {
        let tresPorCento = (3 * total) / 100;
        total -= tresPorCento;
    }
    return total;
}

function exibe(total) {
    // toFixed formata um valor numerico 
    // com a quantidade de casas que ela 
    // recebeu como parametro 
    alert(`O total da compra é R$ ${total.toFixed(2)}.`)
}

if (qtde && valor) {
    exibe(calculaTotal(qtde, valor));
} else { 
    alert('vc não informou qtde e valor dos produtos!')
}