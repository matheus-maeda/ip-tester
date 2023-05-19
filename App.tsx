import * as React from 'react';
import './style.css';

export default function App() {
  const [message, setMessage] = React.useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  function handleClick() {
    var urlhttps = 'https://' + message;
    window.open(urlhttps, '_blank');
    urlhttps += ':8082';
    window.open(urlhttps, '_blank');
    var urlhttp = 'http://' + message;
    window.open(urlhttp, '_blank');
    urlhttp += ':8082';
    window.open(urlhttp, '_blank');
  }
  return (
    <div className="Menu">
      <h1>Acessar remotamente roteadores</h1>
      <p>
        Insira abaixo o Last-IP que será aberto no seu roteador as abas
        possíveis para acessar o roteador do cliente
      </p>
      <div className="inputs">
        <input
          type="text"
          id="textInput"
          className="input"
          onChange={handleChange}
        ></input>
        <button onClick={handleClick} id="sendButton" className="input">
          Tentar IP
        </button>
      </div>
    </div>
  );
}
