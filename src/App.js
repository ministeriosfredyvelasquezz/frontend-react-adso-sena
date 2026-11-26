/* 
   EVIDENCIA: GA7-220501096-AA4-EV03
   COMPONENTE FRONT-END - PROYECTO FORMATIVO
   APRENDIZ: JOHN VELÁSQUEZ
   TECNOLOGÍA: REACT.JS
   DESCRIPCIÓN: Este archivo contiene la estructura principal de la interfaz gráfica (Front-end) del proyecto.
*/



import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
