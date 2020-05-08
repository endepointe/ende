import React, {
  useEffect,
} from 'react';
import './Chat.css';
import io from 'socket.io-client';

///* Use when in dev, otherwise, comment out
const url = 'http://localhost:3001';
const socket = io(url);
//*/

/*
const socket = io('/', {
  secure: true,
  rejectUnauthorized: false,
  path: '/socketio'
});
*/

const Chat = () => {

  useEffect(() => {
    socket.on('new message', (data) => {
      postMessage(data);
    });
  });

  const clearMessage = () => {
    document.getElementById('chat-input').value = '';
  }

  const sendMessage = (e) => {
    e.preventDefault();
    const msg = document.getElementById('chat-input').value;
    socket.emit('message', msg);
    console.log(msg);
    clearMessage();
  }

  const postMessage = (m) => {
    const msg = document.createElement('li');
    msg.classList.add('chat-msg');
    msg.textContent = m;
    document.getElementById('messages').appendChild(msg);
  }

  return (
    <div className='chat-container'>
      <h1>Anon Chat</h1>
      <h2>todo list</h2>
      <ul>
        <li>- users for guest and account</li>
        <li>- channels/rooms</li>
      </ul>
      <h2>Admin is listening, stick around for a reply.</h2>
      <h2>----temporary styling-----</h2>
      <h3>messages:</h3>
      <div id="chat-box">
        <ul id="messages"></ul>
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          id='chat-input'
          autoFocus
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Chat;