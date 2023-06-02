import * as React from 'react';
import './style.css';

export default function App() {
  const [message, setMessage] = React.useState('');
  const [error, setError] = React.useState(' ');
  const [https, sethttps] = React.useState(true);
  const [https8082, sethttps8082] = React.useState(true);
  const [http, sethttp] = React.useState(true);
  const [http8082, sethttp8082] = React.useState(true);
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
  async function handleClick1() {
    console.log(https);
    console.log(https8082);
    console.log(http);
    console.log(http8082);
    try {
      var object = await navigator.clipboard.readText();
    } finally {
      try {
        var urlhttps = 'https://' + object;
        https ? window.open(urlhttps, '_blank') : '';
        urlhttps += ':8082';
        https8082 ? window.open(urlhttps, '_blank') : '';
        var urlhttp = 'http://' + object;
        http ? window.open(urlhttp, '_blank') : '';
        urlhttp += ':8082';
        http8082 ? window.open(urlhttp, '_blank') : '';
      } catch (e) {
        setError('Insira um endereço IP válido');
      }
    }
  }

  function handleChangeCheckbox(option) {
    option == 1 ? sethttps(!https) : '';
    option == 2 ? sethttps8082(!https8082) : '';
    option == 3 ? sethttp(!http) : '';
    option == 4 ? sethttp8082(!http8082) : '';
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
        <button
          onClick={handleClick1}
          id="sendButtonClipboard"
          className="input"
        >
          Utilizar IP copiado
        </button>
      </div>

      <div className="options">
        <div className="box" onClick={() => handleChangeCheckbox(1)}>
          <input type="checkbox" checked={https} />
          <span>HTTPS</span>
        </div>
        <div className="box" onClick={() => handleChangeCheckbox(2)}>
          <input type="checkbox" checked={https8082} />
          <span>HTTPS 8082</span>
        </div>
        <div className="box" onClick={() => handleChangeCheckbox(3)}>
          <input type="checkbox" checked={http} />
          <span>HTTP</span>
        </div>
        <div className="box" onClick={() => handleChangeCheckbox(4)}>
          <input type="checkbox" checked={http8082} />
          <span>HTTP 8082</span>
        </div>
      </div>

      <div className="errors">
        <p id="OBS">
          OBS: Caso seja a primeira vez utilizando, seu navegador pode bloquear
          a quantidade de abas que será aberta, caso isso aconteça, basta
          liberar os pop-ups, caso queira utilizar a função do "IP Copiado"
          quando seu navegador pedir permissão para acessar sua Área de
          Transferência basta liberar também!
        </p>
      </div>
    </div>
  );
}
