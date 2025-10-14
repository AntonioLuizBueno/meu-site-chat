const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Conexão de sockets
io.on('connection', (socket) => {
    console.log('Usuário conectado');

    socket.on('mensagem', (msg) => {
        console.log('Mensagem recebida:', msg);

        // Simulação de resposta automática
        setTimeout(() => {
            socket.emit('mensagem', 'Olá! Como posso ajudar você?');
        }, 1000);
    });

    socket.on('disconnect', () => {
        console.log('Usuário desconectado');
    });
});

// Iniciar servidor
server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
