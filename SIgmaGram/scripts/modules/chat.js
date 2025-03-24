function openChat(chatName, avatarUrl) {
  document.getElementById('chat-window').style.display = 'flex';
  document.getElementById('chat-title').textContent = chatName;
  document.querySelector('.ch-avatar').src = avatarUrl;
}

function closeChat() {
  document.getElementById('chat-window').style.display = 'none';
}

function sendMessage() {
  const input = document.getElementById('message-input');
  const message = input.value.trim();
  if (message) {
    const messagesContainer = document.getElementById('chat-messages');
    
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent');

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const messageText = document.createElement('span');
    messageText.textContent = message;

    const timeElement = document.createElement('span');
    timeElement.classList.add('message-time');
    timeElement.textContent = currentTime;

    messageElement.appendChild(messageText);
    messageElement.appendChild(timeElement);

    messagesContainer.appendChild(messageElement);
    
    input.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}