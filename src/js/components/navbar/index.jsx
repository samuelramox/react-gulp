import React from 'react';
import { string } from 'prop-types';

class Navbar extends React.Component {
  render() {
    const { brand, backgroundColor } = this.props;

    const links = [
      { title: 'Home', link: '#home' },
      { title: 'Sobre', link: '#sobre' },
      { title: 'Contato', link: '#contato' },
    ];

    return (
      <nav>
        <div className={`nav-wrapper ${backgroundColor}`}>
          <div className='container'>
            <a href='#' className='brand-logo'>
              {brand}
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

Navbar.defaultProps = {
  backgroundColor: null,
};

Navbar.propTypes = {
  brand: string.isRequired,
  backgroundColor: string,
};

export default Navbar;
