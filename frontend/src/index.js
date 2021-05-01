import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Offers from './Offers';
import Properties from './Properties'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
<React.StrictMode>
    <Offers />
  </React.StrictMode>,
  document.getElementById('offers')
);
ReactDOM.render(
  <React.StrictMode>
    <Properties />
  </React.StrictMode>,
  document.getElementById('properties')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
