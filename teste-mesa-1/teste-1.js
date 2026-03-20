// 1. Verificação de Média e Aprovação
// O Bug: Erro clássico de precedência matemática
function calcularMedia(n1, n2, n3, n4) {
    let media = n1 + n2 + n3 + n4 / 4; 
    
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
// Gabarito: Faltam os parênteses na soma das notas.
// O computador dividirá apenas a nota 4 (n4) por 4 e depois somará com as outras.
// No teste de mesa, o aluno notará que a variável media receberá um valor absurdamente alto (ex: 20 ou 30).


// 2. Classificação de Categoria por Idade
// O Bug: Uso incorreto de operador lógico (|| no lugar de &&).
function classificarNadador(idade) {
    if (idade >= 5 || idade <= 7) return "Infantil A";
    else if (idade >= 8 && idade <= 10) return "Infantil B";
    else if (idade >= 11 && idade <= 13) return "Juvenil A";
    else if (idade >= 18) return "Adulto";
    else return "Idade inválida";
}
// Gabarito: Ao usar o operador || (OU), a primeira condição (idade >= 5 || idade <= 7)
// será verdadeira para qualquer número positivo. Se a idade for 20, 20 >= 5 é verdadeiro,
// então o laço entra na primeira condição e retorna "Infantil A" para um adulto.


// 3. Maior de Três Números
// O Bug: Falha na exclusão mútua por uso de operador lógico errado.
function maiorDeTres(a, b, c) {
    if (a > b || a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}
// Gabarito: Se testarem com os valores a=10, b=5, c=20,
// a condição a > b é verdadeira (10 > 5).
// Como usamos ||, o algoritmo ignora que c é maior e retorna a (10) como sendo o maior de todos.
// O correto seria usar &&.


// 4. Soma de Ímpares Múltiplos de Três
// O Bug: Esquecer de acumular o valor (sobrescrevendo a variável).
function somaImparesMultiplosDeTres(limite) {
    let soma = 0;
    for (let i = 1; i <= limite; i++) {
        if (i % 2 !== 0) { 
            if (i % 3 === 0) { 
                soma = i; 
            }
        }
    }
    return soma;
}
// Gabarito: Em vez de fazer soma = soma + i;
// o código faz soma = i;.
// No teste de mesa, o aluno vai perceber que a variável soma não está crescendo;
// ela está apenas guardando o último múltiplo encontrado, perdendo todo o histórico anterior.


// 5. Cálculo de Fatorial
// O Bug: Inicialização incorreta do acumulador multiplicativo.
function calcularFatorial(n) {
    let fat = 0; 
    
    for (let i = n; i > 0; i--) {
        fat = fat * i;
    }
    return fat;
}
// Gabarito: A variável fat foi inicializada com 0.
// Como é um laço de multiplicação, qualquer número multiplicado por zero é zero.
// O teste de mesa resultará sempre em 0 para qualquer fatorial. O correto seria inicializar com 1.


// 6. Controle de Tentativas (Jogo de Adivinhação)
// O Bug: Erro na lógica de parada do laço while.
function tentativaAcerto(numeroSecreto, chutes) {
    let tentativas = 0;
    let acertou = false;
    let i = 0;
    
    while (!acertou || i < chutes.length) { 
        tentativas++;
        if (chutes[i] === numeroSecreto) {
            acertou = true;
        }
        i++;
    }
    return tentativas;
}
// Gabarito: A condição !acertou || i < chutes.length
// fará com que o loop continue rodando mesmo que o usuário acerte (acertou = true),
// contanto que ainda existam itens no vetor chutes, pois uma das condições do OU ainda é válida.
// Isso gerará tentativas extras e incorretas. O correto seria &&.


// 7. Busca Linear em Vetor
// O Bug: Saída prematura (Encerramento no primeiro laço).
function buscaLinear(vetor, x) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === x) {
            return true;
        } else {
            return false; 
        }
    }
}
// Gabarito: Este é um dos bugs mais comuns entre iniciantes.
// Ao colocar o return false dentro do else associado ao if do laço,
// o algoritmo olha apenas para a primeira posição (i=0).
// Se o número não estiver lá, ele já encerra a função retornando falso e ignora todo o resto do vetor.


// 8. Encontrar o Maior Valor em um Array
// O Bug: Armadilha do valor inicial fixo em vetor.
function encontrarMaiorValor(array) {
    let maior = 0; 
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}
// Gabarito: Inicializar com 0 funciona bem para números positivos.
// Peça para os alunos testarem com um array contendo apenas números negativos (ex: [-10, -5, -20]).
// O algoritmo dirá que o maior número é 0, que sequer existe no array! O correto é inicializar com array.


// 9. Busca Binária
// O Bug: Atualização incorreta das metades e falha no limite (loop infinito).
function buscaBinaria(array, alvo) {
    let inicio = 0;
    let fim = array.length - 1;
    
    while (inicio < fim) { 
        let meio = Math.floor((inicio + fim) / 2);
        
        if (array[meio] === alvo) {
            return meio;
        } else if (array[meio] < alvo) {
            inicio = meio;
        } else {
            fim = meio;
        }
    }
    return -1;
}
// Gabarito: Usar inicio = meio em vez de meio + 1 impede que os ponteiros se cruzem adequadamente,
// causando um loop infinito se o número não estiver na lista ou estiver nas bordas.
// Além disso, inicio < fim (sem o =) fará com que o algoritmo não encontre a resposta
// se o alvo estiver exatamente na última posição validada.


// 10. Bubble Sort (Ordenação)
// O Bug: Perda de dados na troca de variáveis (Swap quebrado).
function bubbleSort(array) {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = array[j]; 
            }
        }
    }
    return array;
}
// Gabarito: Ao fazer array[j+1] = array[j], a variável temporária (temp) não é usada.
// Como o valor de array[j] já havia sido substituído na linha anterior por array[j+1],
// o algoritmo acabará duplicando o mesmo valor e o número original se perderá.
// O array final sairá corrompido, com valores repetidos.