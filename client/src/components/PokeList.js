import React from 'react';
import PokeCell from './PokeCell';

const PokeList = ({pokeData, searchTerm}) => {

    const filteredPokemons = pokeData.pokemon_entries.filter(pokemon => {
        return pokemon.pokemon_species.name.indexOf(searchTerm) !== -1;
    });

    return (
        <div className="row">
            {filteredPokemons.map(p => {
                return (
                    <PokeCell
                        key={p.entry_number}
                        number={p.entry_number}
                        name={p.pokemon_species.name}
                        url={p.pokemon_species.url}
                    />
                )
            })}
        </div>
    )
};

export default PokeList;