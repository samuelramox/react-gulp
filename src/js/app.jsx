import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './components/card-list';
import Navbar from './components/navbar';
import Title from './components/title';

const contents = [
  {
    title: 'Title 1',
    subtitle: 'Subtitle 1',
    image: 'http://materializecss.com/images/office.jpg',
    description:
      'Here is some more information about this product that is only revealed once clicked on.',
  },
  {
    title: 'Title 2',
    subtitle: 'Subtitle 2',
    image: 'https://materializecss.com/images/sample-1.jpg',
    description:
      'Here is some more information about this product that is only revealed once clicked on.',
  },
  {
    title: 'Title 3',
    subtitle: 'Subtitle 3',
    image: 'http://materializecss.com/images/office.jpg',
    description:
      'Here is some more information about this product that is only revealed once clicked on.',
  },
  {
    title: 'Title 4',
    subtitle: 'Subtitle 4',
    image: 'https://materializecss.com/images/sample-1.jpg',
    description:
      'Here is some more information about this product that is only revealed once clicked on.',
  },
  {
    title: 'Title 5',
    subtitle: 'Subtitle 5',
    image: 'http://materializecss.com/images/office.jpg',
    description:
      'Here is some more information about this product that is only revealed once clicked on.',
  },
  {
    title: 'Title 6',
    subtitle: 'Subtitle 6',
    image: 'https://materializecss.com/images/sample-1.jpg',
    description:
      'Here is some more information about this product that is only revealed once clicked on.',
  },
];

const menuLinks = [
  { title: 'Home', link: '#home' },
  { title: 'About', link: '#about' },
  { title: 'Contact', link: '#contact' },
];

const App = (
  <div>
    <Navbar brand='React' backgroundColor='blue' menu={menuLinks} />
    <div className='container'>
      <Title title='React Project' />
      <div className='row'>
        <CardList cardPerColumn={3} contents={contents} />
      </div>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('App'));
