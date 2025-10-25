# 💬 Chat em Tempo Real

## 📝 Descrição
O **Chat em Tempo Real** é uma aplicação web de código aberto para bate-papo instantâneo, projetada para facilitar a comunicação rápida e acessível em salas compartilhadas para pequenos grupos.

Resolve o problema de comunicação instantânea sem a dependência de serviços de terceiros complexos, utilizando uma arquitetura leve e moderna.

---

## 🚀 Status do Projeto
<img src="https://img.shields.io/badge/status-em%20andamento-yellow.svg" alt="Status: Em Andamento" >

---

## 💻 Tecnologias Utilizadas
A aplicação é construída com as seguintes tecnologias:

### Frontend
* **HTML5**
* **CSS3**
* **JavaScript** (Vanilla)

### Backend
* **Node.js**
* **Express.js** (Framework web)
* **Socket.io** (WebSockets)

### Ferramentas Adicionais
* **Git**
* **NPM** (Gerenciador de pacotes)

---

## ⚙️ Instalação e Configuração

Para rodar o projeto localmente, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio-chat.git](https://github.com/seu-usuario/seu-repositorio-chat.git) # Substitua pelo seu link
    cd seu-repositorio-chat
    ```

2.  **Instale as dependências do Node.js:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor:**
    ```bash
    npm start # Ou node server.js, dependendo do seu script de inicialização
    ```

O servidor estará acessível em `http://localhost:3000`.

---

## 🛠 Exemplo de Uso

### Acessando a Aplicação
Abra `http://localhost:3000` em seu navegador. Para simular múltiplos usuários, abra a URL em várias abas ou janelas. Digite sua mensagem no campo de texto e clique em **"Enviar"**.

### Integração com a API (WebSockets)
Você pode se conectar ao servidor de WebSockets usando o cliente `socket.io`:

```javascript
// No seu código JavaScript
const socket = io('http://localhost:3000');

// Enviar uma mensagem
socket.emit('chat message', 'Olá, mundo!');

// Receber mensagens
socket.on('chat message', (msg) => {
  console.log('Nova mensagem recebida:', msg);
});

### Integração com a API (WebSockets)
Você pode se conectar ao servidor de WebSockets usando o cliente `socket.io`:

```javascript
// No seu código JavaScript
const socket = io('http://localhost:3000');

// Enviar uma mensagem
socket.emit('chat message', 'Olá, mundo!');

// Receber mensagens
socket.on('chat message', (msg) => {
  console.log('Nova mensagem recebida:', msg);
});





















