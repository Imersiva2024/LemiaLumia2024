import React, { useState } from 'react';
import '../styles/Chat.css'; 

//falta botão de curtir
//falta opção de responder


function Chat() {
  //armazena as mensagens do chat
  const [messages, setMessages] = useState([]);

  //armazena o texto da mensagem 
  const [newMessage, setNewMessage] = useState('');

  // Função que adiciona a mensagem
  const handlePostMessage = () => {
    if (newMessage.trim()) { // Verifica se o campo não ta vazio
      // Adiciona a mensagem
      setMessages([
        ...messages,
        { id: Date.now(), text: newMessage } 
      ]);
      setNewMessage(''); // Limpa o campo de mensagem após adicionar
    }
  };

  return (
    <div className="chat-container">
      {/* Código para adicionar a mensagem */}
      <div className="new-message">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} // atualizando o texto da mensagem
          placeholder="Digite uma nova mensagem..."
        />
        <button onClick={handlePostMessage}>Postar</button>
      </div>
      
      {/* parte que mostra as mensagens */}
      <div className="messages-list">
        {messages.map(msg => (
          <div key={msg.id} className="message-item">
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
