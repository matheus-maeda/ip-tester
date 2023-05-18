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
    var urlhttp = message;
    window.open(urlhttp, '_blank');
    urlhttp += ':8082';
    window.open(urlhttp, '_blank');
  }
  return (
    <div>
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleClick}>Tentar IP</button>
    </div>
  );
}
