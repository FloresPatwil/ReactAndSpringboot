import React from 'react';
import './App.css';

function App() {
  
  function realizarOperacion(e) {
    e.preventDefault();
    const v1 = parseInt(e.target.valor1.value);
    const v2 = parseInt(e.target.valor2.value);
    const suma = v1 + v2 ;
    alert('La suma es: ' + suma);
  }
  return (
    <div>
      <form onSubmit={realizarOperacion}>
        <p>Ingrese el primer valor 1
          <input type="number" name="valor1" />
        </p>
        <p>Ingrese el segundo valor2
          <input type="number" name="valor2" />
        </p>
        <p> 
          <input type="submit" value="Sumar" />
        </p>
      </form> 
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
