import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeMenu: 'Home' };
  }

  onChangeMenu(title) {
    this.setState({ activeMenu: title });
  }

  componentDidMount() {
    const initialMenu = this.props.menu[0].title;

    if (initialMenu !== this.state.activeMenu) {
      this.setState({ activeMenu: initialMenu });
    }
  }

  render() {
    const { brand, backgroundColor, menu } = this.props;
    const { activeMenu } = this.state;

    return (
      <nav>
        <div className={`nav-wrapper ${backgroundColor}`}>
          <div className='container'>
            <a href='#' className='brand-logo'>
              {brand}
            </a>
            <ul id='nav-mobile' className='right hide-on-med-and-down'>
              {menu.map((item) => (
                <li
                  key={item.title}
                  className={activeMenu === item.title ? 'active' : ''}
                  onClick={() => this.onChangeMenu(item.title)}
                >
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const menuItem = shape({
  title: string.isRequired,
  link: string.isRequired,
});

Navbar.defaultProps = {
  backgroundColor: null,
};

Navbar.propTypes = {
  backgroundColor: string,
  brand: string.isRequired,
  menu: arrayOf(menuItem).isRequired,
};

export default Navbar;
