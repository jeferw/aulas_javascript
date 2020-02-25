// parseInt converte um numero que está em string
// para um numero inteiro
let numero01 = parseInt(prompt('Informe um número:'));

if (numero01) {
    alert(`O sucessor de ${numero01} é ${numero01 + 1} e o seu antecessor é ${numero01 - 1}.`);
}