const socket = io();

const toggleBtn = document.getElementById('chat-toggle');
const chatBox = document.getElementById('chat-box');
const input = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');
const messages = document.getElementById('chat-messages');

// Alternar visibilidade do chat
toggleBtn.addEventListener('click', () => {
  chatBox.classList.toggle('hidden');
});

// Enviar mensagem
sendBtn.addEventListener('click', () => {
  const msg = input.value.trim();
  if (msg) {
    socket.emit('mensagem', msg);
    addMessage(`Você: ${msg}`);
    input.value = '';
  }
});

// Exibir mensagens recebidas
socket.on('mensagem', (msg) => {
  addMessage(`Atendente: ${msg}`);
});

function addMessage(message) {
  const p = document.createElement('p');
  p.textContent = message;
  messages.appendChild(p);
  messages.scrollTop = messages.scrollHeight;
}






















