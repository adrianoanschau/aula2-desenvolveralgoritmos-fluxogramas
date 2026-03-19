import { useState, useEffect } from 'react';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Busca inicial das tarefas (GET)
  useEffect(() => {
    fetch('http://localhost:3000/tarefas')
      .then(res => res.json())
      .then(data => setTarefas(data));
  }, []);

  // Adicionando uma nova tarefa (POST)
  const adicionarTarefa = async () => {
    if (!novaTarefa) return;
    
    const res = await fetch('http://localhost:3000/tarefas', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ titulo: novaTarefa })
    });
    
    const data = await res.json();
    setTarefas([...tarefas, data]); // Atualiza a tela com o novo dado
    setNovaTarefa(''); // Limpa o campo
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>To-Do List (Treinamento Senac)</h1>
      
      <div>
        <input
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa..."
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.titulo} - {tarefa.concluida ? 'Concluída' : 'Pendente'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
