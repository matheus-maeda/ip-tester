import * as React from 'react';
import './style.css';

export default function App() {
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState(' ');
  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  function handleClick() {
    try {
      var urlhttps = 'https://' + message;
      window.open(urlhttps, '_blank');
      urlhttps += ':8082';
      window.open(urlhttps, '_blank');
      var urlhttp = 'http://' + message;
      window.open(urlhttp, '_blank');
      urlhttp += ':8082';
      window.open(urlhttp, '_blank');
    } catch (e) {
      setError('Insira um endereço IP válido');
    }
  }
  return (
    <div className="Menu">
      <div className="Header">
        <h1>Acessar remotamente roteadores</h1>
        <p>
          Insira abaixo o Last-IP que será aberto no seu roteador as abas
          possíveis para acessar o roteador do cliente
        </p>
        <p id="errorLabel">{error}</p>
      </div>
      <div className="inputs">
        <input
          type="text"
          id="textInput"
          className="input"
          onChange={handleChange}
          placeholder="Insira aqui o Last-IP"
        ></input>
        <button onClick={handleClick} id="sendButton" className="input">
          Tentar IP
        </button>
      </div>
      <div className="errors">
        <p>
          OBS: Caso seja a primeira vez utilizando, seu navegador pode bloquear
          a quantidade de abas que será aberta, caso isso aconteça, basta
          liberar os pop-ups!
        </p>
      </div>
    </div>
  );
}
