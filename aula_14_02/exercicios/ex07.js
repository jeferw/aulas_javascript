let nota01 = Number(prompt('Informe a primeira nota:'));
let nota02 = Number(prompt('Informe a segunda nota:'));

//função recebe as duas notas e retorna a mádia do aluno
function calculaMedia(nota01, nota02) {
    return (nota01 + nota02) / 2;
}
if (nota01 && nota02) {
    let media = calculaMedia(nota01, nota02);
    if (media < 5) {
        alert('Reprovado!');
    } else if (media >= 7) {
        alert('Aprovado!');
    } else {
        alert('Recuperação!')
    }
}