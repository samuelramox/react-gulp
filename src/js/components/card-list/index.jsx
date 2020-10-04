import React from 'react';
import { number } from 'prop-types';
import Card from '../card';

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

class CardList extends React.Component {
  render() {
    const { cardPerColumn } = this.props;

    return contents.map((content) => (
      <div className={`col m${12 / cardPerColumn}`}>
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
};

export default CardList;
