import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




var sec = 0;
var min = 0;
var hr = 0;
var myVar = setInterval(()=>{
  ReactDOM.render(<App second={sec} minute={min} hour={hr} />,document.getElementById('root'));
  sec++;                    /* aqui le indicamos a la funcion que en cada Interval sume un valor a "sec" */
  if (sec == 60) {                             /* esto nos indica que "si 'sec' es igual a 60" entonces */
    min++;                                                                     /* "sumale uno a 'min'" */
    sec = 0;                                                             /* "y reinicia 'sec' a cero" */
  }
  else if (min == 60) {
    hr++;
    min = 0;
  }
  else if (hr == 24) {
  sec = 0;
  min = 0;
  hr = 0;
  clearInterval(myVar)
  }
},1000);        /* todo esto se ejecuta cada vez que el "setIterval" llega a 1000 */


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
