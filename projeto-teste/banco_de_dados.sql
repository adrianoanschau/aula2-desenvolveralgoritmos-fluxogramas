CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    concluida BOOLEAN DEFAULT FALSE
);

-- Inserindo dados iniciais (Seed)
INSERT INTO tarefas (titulo) VALUES ('Configurar ambiente Node.js'), ('Criar projeto React com Vite');