import React from 'react';
import './App.css';

function App() {
  
  function generarAleatorios() {
    const vector = new Array(5);
    for(let x = 0; x < vector.length; x ++ ){
      vector[x] = Math.trunc(Math.random() * 100);
    } 
    setNumeros(vector);
  }
  const [numeros,setNumeros] = React.useState([0,0,0,0,0]);
  return (
    <div>
      <p>Numeros aleatorios : {numeros}</p>
      { numeros.map(num => (
        <p>{num}</p>
      ))}
      <button onClick={generarAleatorios}>Generar valores aleatorios aleatorio</button>
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
