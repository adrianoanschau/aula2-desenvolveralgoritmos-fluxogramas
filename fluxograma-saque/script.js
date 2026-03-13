// Variável global representando o 'Consultar Saldo_Atual'
let saldoAtual = 100.00;

function realizarSaque() {
    // 1. Ler Valor_Desejado
    const inputSaque = document.getElementById('valorSaque');
    const valorDesejado = parseFloat(inputSaque.value);
    const displayMensagem = document.getElementById('mensagem');
    const displaySaldo = document.getElementById('saldo');

    // Limpa mensagens anteriores
    displayMensagem.className = "mensagem";
    displayMensagem.innerText = "";

    // 2. Decisão: Saldo_Atual >= Valor_Desejado?
    if (valorDesejado > 0 && saldoAtual >= valorDesejado) {
        
        // Caminho SIM:
        // 3. Saldo_Atual = Saldo_Atual - Valor_Desejado
        saldoAtual = saldoAtual - valorDesejado;

        // Atualiza o saldo na tela
        displaySaldo.innerText = saldoAtual.toFixed(2);

        // 4. Entregar Cédulas e Recibo
        displayMensagem.className = "mensagem sucesso";
        displayMensagem.innerText = "Saque realizado! Retire suas cédulas e o recibo.";
        
    } else {
        // Caminho NÃO:
        // 5. Informar que não há saldo suficiente
        displayMensagem.innerText = "Erro: Saldo insuficiente ou valor inválido.";
    }

    // 6. Fim do Saque
    inputSaque.value = ""; // Limpa o campo para o próximo uso
}