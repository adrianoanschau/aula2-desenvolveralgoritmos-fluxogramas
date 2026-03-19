// Dependências necessárias: npm install express cors mysql2
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

// Habilitando CORS conforme exigido na infraestrutura da API
app.use(cors());
app.use(express.json());

// Conexão com o MariaDB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // O aluno deve ajustar para o usuário local
    password: '',
    database: 'todo_app'
});

// Endpoint de Leitura (Método GET)
app.get('/tarefas', (req, res) => {
    db.query('SELECT * FROM tarefas', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
});

// Endpoint de Criação (Método POST)
app.post('/tarefas', (req, res) => {
    const { titulo } = req.body;
    db.query('INSERT INTO tarefas (titulo) VALUES (?)', [titulo], (err, results) => {
        if (err) return res.status(500).json(err);
        res.json({ id: results.insertId, titulo, concluida: false });
    });
});

// Levantando o servidor
app.listen(3000, () => {
    console.log('API rodando na porta 3000');
});