import React from 'React';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.node,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <h4>{this.props.title}</h4>
      </section>
    );
  }
}

export default Card;