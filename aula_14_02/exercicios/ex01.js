// criar um prompt e armazenar o valor retornado dele
// em uma variaável
let nome = prompt('Informe seu Nome!');

// validar as variaveis
// apenas o if com a variavel já valida
// se ela está undefined, null, zero, em branco ('')
if (nome) {
    alert(`Olá, ${nome}!`);
    // deixar todas as letras em mausculo
    // invocamos a função com os dois ()
    alert(`Olá, ${nome.toUpperCase()}!`);
    // deixar todas em minusculo
    alert(`Olá, ${nome.toLowerCase()}!`);
}