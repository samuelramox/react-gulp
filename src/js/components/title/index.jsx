import React from 'react';
import { string } from 'prop-types';

class Title extends React.Component {
  render() {
    const { title } = this.props;

    return <h1>{title}</h1>;
  }
}

Title.propTypes = {
  title: string.isRequired,
};

export default Title;
