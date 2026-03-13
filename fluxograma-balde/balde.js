let canecas = 0;
const limite = 5; // Define quando o balde está "Cheio"

function iniciarProcesso() {
    // Resetando para o 'Início'
    canecas = 0;
    document.getElementById('agua').style.height = "0%";
    document.getElementById('status').innerText = "";
    document.getElementById('btnEncher').disabled = true;

    // Simula o Retângulo: "Colocar o balde sob a torneira"
    console.log("Iniciando: Balde sob a torneira...");

    // Criando o Laço (Loop)
    const loopEncher = setInterval(() => {
        
        // Decisão (Losango): O balde está cheio?
        if (canecas < limite) {
            
            // Caminho NÃO:
            // Processamento: Colocar 1 caneca de água
            canecas++;
            
            // Atualização visual
            document.getElementById('contador').innerText = `Canecas: ${canecas}`;
            document.getElementById('agua').style.height = `${(canecas / limite) * 100}%`;
            
            console.log("Ação: Adicionando caneca...");

        } else {
            // Caminho SIM:
            // Para o laço
            clearInterval(loopEncher);

            // Saída (Trapézio): Exibir mensagem de sucesso
            document.getElementById('status').innerText = "Balde pronto para uso!";
            document.getElementById('btnEncher').disabled = false;
            
            // Fim do Saque
            console.log("Fim: Processo concluído.");
        }

    }, 800); // Velocidade do laço (800ms por repetição)
}