import React from 'react';
import { arrayOf, number, obj } from 'prop-types';
import Card from '../card';

class CardList extends React.Component {
  render() {
    const { cardPerColumn, contents } = this.props;

    return contents.map((content) => (
      <div className={`col m${12 / cardPerColumn}`} key={content.title}>
        <Card
          title={content.title}
          subtitle={content.subtitle}
          image={content.image}
          description={content.description}
        />
      </div>
    ));
  }
}

CardList.defaultProps = {
  cardPerColumn: 4,
};

CardList.propType = {
  cardPerColumn: number,
  contents: arrayOf(obj).isRequired,
};

export default CardList;
