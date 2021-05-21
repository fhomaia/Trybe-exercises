import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        return (
            <section className = 'Pokemon-card'>
                <h1>{this.props.pokemon.name}</h1>
                <p>type: {this.props.pokemon.type}</p>
                <p>weight: {this.props.pokemon.averageWeight.value + this.props.pokemon.averageWeight.measurementUnit }</p>
                <img src = {this.props.pokemon.image} alt = {this.props.pokemon.name}></img>
                <a href={this.props.pokemon.moreInfo} target = '_blank' rel = 'noreferrer' > More Info </a>
            </section>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired,
        }),
        image: PropTypes.string.isRequired,
        moreInfo: PropTypes.string.isRequired,
    })
};

export default Pokemon;