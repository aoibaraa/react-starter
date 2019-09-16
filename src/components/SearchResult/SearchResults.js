import React from 'react';
import styles from '../Column/Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import { settings } from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    icon: PropTypes.node,
    cards: PropTypes.array,
    columns: PropTypes.array,
    changeSearchString: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
    cards: [],
  }

  render() {
    const { title, icon, cards } = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <div>
            <h3 className={styles.title}>
              <span className={styles.icon}>
                <Icon name={icon} />
              </span>
              {title}</h3>
          </div>
          <div className={styles.component}>
            {cards.length > 0 && cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResults;