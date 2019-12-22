import React, { Component } from 'react'
import PokemonData from './pokedex.json'


export default class PokemonImages extends Component {
    render() {
        return (
            <div>
                {PokemonData.map((element) => {
                    return <div className="col-md-3 col-sm-6 mb-5">
                        <div className="card">
                            <div className="card-header">
                                <h1>{element.nom}</h1>
                            </div >
                        </div>
                    </div >
                })}
            </div >
        )
    }
}

