--  Exercícios de fixação - normalização de dados
 
 CREATE DATABASE IF NOT EXISTS normalization;
 USE normalization;
 CREATE TABLE setor(
	setor_id INT PRIMARY KEY,
    nome VARCHAR(100)
 ) ENGINE=InnoDB;
 
 INSERT INTO setor(setor_id, nome) VALUES
	(1, 'Adiministração'),
    (2, 'Vendas'),
    (3, 'Operacional'),
    (4, 'Estratégico'),
    (5, 'Marketing');
    
CREATE TABLE funcionario(
	funcionario_id INT PRIMARY KEY,
    nome VARCHAR(100),
    sobrenome VARCHAR(100),
    contato VARCHAR(100),
    telefone VARCHAR(100),
    data_cadastro VARCHAR(100)
) ENGINE=InnoDB;

INSERT INTO funcionario(funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
    (15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE funcionario_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE=InnoDB;

-- INSERT INTO funcionario_setor(funcionario_id, setor_id) VALUES
-- 	(22, 1),
-- 	(12, 2),
-- 	(13, 3),
-- 	(14, 4),
-- 	(14, 2),
-- 	(15, 5);