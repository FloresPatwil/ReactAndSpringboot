import React from 'react';
import './App.css';

function App() {
  
  function generarAleatorio() {
    const v = Math.trunc(Math.random() * 100);
    setValor(v);
  }
  const [numero,setValor] = React.useState(0);
  return (
    <div>
      <p>Numero aleatorio : {numero}</p>
      <button onClick={generarAleatorio}>Generar aleatorio</button>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
