import React from 'react'
import Pokemon from './Pokemon'

class Pokedex extends React.Component {
    render() {
        return (
            this.props.pokemons.map((pokemon) => <Pokemon pokemon = {pokemon} key = {pokemon.id} />)
        )
    }
}

export default Pokedex