import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className={`nav-wrapper ${this.props.backgroundColor}`}>
          <div className='container'>
            <a href='#' className='brand-logo'>
              {this.props.brand}
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              <li>
                <a href='sass.html'>Sass</a>
              </li>
              <li>
                <a href='badges.html'>Components</a>
              </li>
              <li>
                <a href='collapsible.html'>JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
