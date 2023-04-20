///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////// O código lê a entrada e armazena a senha original s, as palavras com as possíveis letras ////////////////
/////// para substituir as letras borradas words e o número p. Em seguida, ele gera todas as possíveis senhas //
/////// substituindo as letras borradas por cada uma das letras possíveis e as armazena em allPasswords. //////
/////// Por fim, ele ordena essa lista de possíveis senhas e imprime a senha correta na posição p. ///////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////



const leia = require('readline-sync');

// Lê a entrada
const entrada1 = leia.question('Digite três números separados por espaço (n, m e k): ');
const [n, m, k] = entrada1.split(' ').map(Number);
const senhaBorrada = leia.question('Digite a senha borrada: ').split('');
const palavrasSubstitutas = Array(m);
for (let i = 0; i < m; i++) {
  palavrasSubstitutas[i] = leia.question(`Digite a palavra substituta ${i + 1}: `);
}
const p = Number(leia.question('Digite o valor de p: '));

// Gera todas as possíveis senhas a partir das palavras substitutas
const possiveisSenhas = [];
const gerarSenhasRecursivamente = (senhaAtual, indexDaLetraBorrada) => {
  if (indexDaLetraBorrada === m) {
    possiveisSenhas.push(senhaAtual.join(''));
    return;
  }

  for (let i = 0; i < k; i++) {
    senhaAtual[indexDaLetraBorrada] = palavrasSubstitutas[indexDaLetraBorrada][i];
    gerarSenhasRecursivamente(senhaAtual, indexDaLetraBorrada + 1);
  }
};

gerarSenhasRecursivamente(senhaBorrada, 0);

// Ordena as possíveis senhas e exibe a senha correta
possiveisSenhas.sort();
console.log(possiveisSenhas[p - 1]);
