import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const checkalert = (e) => {
    alert('The link was clicked.');
  }

ReactDOM.render(



  <React.StrictMode>
//     <App />
  <p>Show Demo ReactJS</p>
<button onclick="checkalert(e)">
  Activate Lasers
</button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
