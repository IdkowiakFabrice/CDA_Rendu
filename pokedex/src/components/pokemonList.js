import React, { Component } from 'react'
import PokemonCard from './pokemonCard'
import PokemonData from './pokedex.json'


export default class PokemonList extends Component {

    render() {
        return (
            <div>
                {PokemonData.map(() => {
                    <PokemonCard />
                })}
            </div>
        )
    }
}
