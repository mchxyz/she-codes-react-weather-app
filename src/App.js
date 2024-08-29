import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className='App'>
      <div className='container'>
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by <a 
        href='https://github.com/mchxyz' 
        target='_blank' 
        rel='noopener noreferrer'
        >MA
        </a>{" "}
        and is{" "}
        <a 
        href='https://github.com/mchxyz/she-codes-react-weather-app' 
        target='_blank'
        rel='noopener noreferrer'
        > 
        open-sourced on GitHub
        </a>{" "}
        and <a
        href='https://she-codes-react-weather-app.netlify.app/' 
        target='_blank' 
        rel='noopener noreferrer'
        >
        hosted on Netlify
          </a> 
    </footer>
    </div>
  </div>
  );
}
