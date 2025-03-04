//Gabriel Estevão dos Santos Silveira
//Luiz Antonio Barbosa dos Santos

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

let alunos = [
    { id: "00001", nome: "Luiz", celular: "(11)11111-1111" },
    { id: "00002", nome: "Luan", celular: "(22)22222-2222" },
    { id: "00003", nome: "Lucas", celular: "(33)33333-3333" }
];

app.get('/alunos', (req, res) => {
    res.json(alunos);
});

app.post('/alunos', (req, res) => {
    const { id, nome, celular } = req.body;
    alunos.push({ id, nome, celular });
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});