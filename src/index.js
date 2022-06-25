import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.css';
 import Clock from './Clock';
//import Greeter from './Greeter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
// <div>
// <Clock continent='Africa' City='Nairobi'  dyn ="false" /> <hr />
// <Clock continent='Europe' City='Paris'  dyn ="false" /> <hr />
// </div>,
// document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
