import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Title from './components/title';

const App = (
  <div>
    <Navbar />
    <div className='container'>
      <Title />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('App'));
