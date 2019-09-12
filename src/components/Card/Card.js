import React from 'React';
import styles from './Card.scss';

class Card extends React.Component {
    render() {
        return (
            <section className={styles.component}>
                <h4>{this.props.title}</h4>
            </section>
        )
    }
}

export default Card;