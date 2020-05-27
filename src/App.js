import React from 'react';
import './App.css';
import Card from './components/Card';
import CardSlot from './components/CardSlot';

function App(props) {     /* aqui le pasamos los props a nuestro componente 'App' */
  
  return (
    <div className="App">
      <div className="hour"><h1>{props.hour}</h1></div>
      <div className="minute"><h1>{props.minute}</h1></div>
      <div className="second"><h1>{props.second}</h1></div> 
     {/* aqui dejamos impresos los props para mostrarlos en nuestro html  */}
    </div>
  );
}

export default App;