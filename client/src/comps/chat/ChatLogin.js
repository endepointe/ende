import React from 'react';
import { useState } from 'react';
import Chat from './Chat';

const ChatLogin = () => {
  const [valid, validate] = useState('');
  const [username, setUser] = useState('');
  const [chatroom, setRoom] = useState('');

  const validateUser = (e) => {
    e.preventDefault();
    const u = e.target.elements.username.value;
    const r = e.target.elements.room.value;
    if (u) {
      setUser(u);
      setRoom(r);
      console.log(u, r);
      validate(1);
    } else {
      validate(0);
    }
  }

  return (
    <div>
      {valid ? <Chat name={username} room={chatroom} /> :
        <div>
          <header>
            <h1>Enter a chat name</h1>
          </header>
          <main>
            <form onSubmit={validateUser}>
              <div>
                <label htmlFor="username">Name: </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  required
                />
              </div>
              <div>
                <label htmlFor="room">Room: </label>
                <select name="room" id="room">
                  <option value="Work">Work</option>
                  <option value="Play">Play</option>
                </select>
              </div>
              <button type='submit'>Join Room</button>
            </form>
          </main>
        </div>}
      <div>
        <h3>site status: in testing and development.</h3>
        <h4>To do list</h4>
        <ul>
          <li>- add authentication</li>
          <li>- minimize chat section of site</li>
          <li>- add services and client portal</li>
          <li>- add routing</li>
          <li>- add emailing</li>
          <li>- enable the chat bot to help clients</li>
          <li>- complete styling</li>
        </ul>
      </div>
    </div>
  )
}

export default ChatLogin;