import React from 'react';
import { string } from 'prop-types';

class Card extends React.Component {
  render() {
    const { description, image, subtitle, title } = this.props;

    return (
      <div className='card sticky-action'>
        <div className='card-image waves-effect waves-block waves-light'>
          <img className='activator' src={image} />
        </div>
        <div className='card-content'>
          <span className='card-title activator grey-text text-darken-4'>
            {title}
            <i className='material-icons right'>more_vert</i>
          </span>
          <p>{subtitle}</p>
        </div>
        <div className='card-action'>
          <a href='#'>See more..</a>
        </div>
        <div className='card-reveal'>
          <span className='card-title grey-text text-darken-4'>
            {title}
            <i className='material-icons right'>close</i>
          </span>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

Card.propType = {
  description: string.isRequired,
  image: string.isRequired,
  title: string.isRequired,
  subtitle: string.isRequired,
};

export default Card;
