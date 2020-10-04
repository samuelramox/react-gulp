import React from 'react';

class Navbar extends React.Component {
  render() {
    const links = [
      { title: 'Home', link: '#home' },
      { title: 'Sobre', link: '#sobre' },
      { title: 'Contato', link: '#contato' },
    ];

    return (
      <nav>
        <div className={`nav-wrapper ${this.props.backgroundColor}`}>
          <div className='container'>
            <a href='#' className='brand-logo'>
              {this.props.brand}
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              {links.map((link) => (
                <li key={link.title}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
