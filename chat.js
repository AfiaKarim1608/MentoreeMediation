const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const socket = new WebSocket('ws://localhost:3000');

socket.addEventListener('message', (event) => {
  const messageData = JSON.parse(event.data);
  displayMessage(messageData.message, messageData.sender);
});

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    const messageData = { sender: 'You', message };
    socket.send(JSON.stringify(messageData));
    displayMessage(message, 'self');
    messageInput.value = '';
  }
}

function displayMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('chat-message');
  if (sender === 'self') {
    messageElement.classList.add('self');
  }
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
