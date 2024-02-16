import { Component }  from 'react';

class Card extends Component {
    render() {
        const { monsters } = this.props;

        return (
        <div>
            {monsters.map((monster) => (
                <h1 key={monster.id}>{monster.name}</h1>
            ))}
        </div>
        );
    }
};

export default Card;