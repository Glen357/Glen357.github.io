import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// document.addEventListener('DOMContentLoaded', () => {
//   const image = document.querySelector('.Icon');
//   let angle = 0;

//   setInterval(() => {
//     angle += 1; // Adjust the speed by changing the increment value
//     image.style.transform = `rotate(${angle}deg)`;
//   }, 10); // Adjust the interval for smoother or slower animation
// });
