import React from 'react';
import './App.css';

// function retornarNumeroAleatorio(){
//   return Math.trunc(Math.random * 10);
// }
function mostrarTitulo(Titulo){
  return <h1>{Titulo}</h1>
}
function App() {
  const title = 'Fin';
  const siglo = 21;
  const persona = {
    nombre : 'Christian',
    edad: '17'
  }
  function retornarNumeroAleatorio(){
    return Math.trunc(Math.random() * 10);
  }
  return (
    <div>
      {mostrarTitulo('Hola mundo')}
      {mostrarTitulo(title)}
      <hr/>
      <h1>Titulo nivel 1</h1>
      <hr/>
      <p>Estamos en siglo {siglo}</p>
      <h3>Accesos a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Lllamada a una funcion</h3>
      <p>Un valor Aleatorio</p>
      <p>{retornarNumeroAleatorio()}</p>
      <h3>Calculo inmediato de expresiones</h3>
      3 + 3 = {3 + 3}
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
