import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Title from './components/title';

const App = (
  <div>
    <Navbar brand='React' backgroundColor='blue' />
    <div className='container'>
      <Title title='React with Gulp' />
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('App'));
