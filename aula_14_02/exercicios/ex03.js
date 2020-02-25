// prompt retorna uma string
// temos que converter esta string para um número
// fazemos com a função Number
let numero01 = Number(prompt('Informe um número:'));
let numero02 = Number(prompt('Informe outro número:'));

console.log(typeof numero01);

if (numero01 && numero02) {
    alert(`A soma entre ${numero01} e ${numero02} é ${numero01 + numero02}.`);
}