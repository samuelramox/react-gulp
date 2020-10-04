import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import Navbar from './components/navbar';
import Title from './components/title';

const App = (
  <div>
    <Navbar brand='React' backgroundColor='blue' />
    <div className='container'>
      <Title title='React with Gulp' />
      <div className='row'>
        <div className='col m4'>
          <Card />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('App'));
