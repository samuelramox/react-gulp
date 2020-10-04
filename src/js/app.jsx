import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card-list';
import Navbar from './components/navbar';
import Title from './components/title';

const App = (
  <div>
    <Navbar brand='React' backgroundColor='blue' />
    <div className='container'>
      <Title title='React with Gulp' />
      <div className='row'>
        <CardList cardPerColumn={3} />
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('App'));
