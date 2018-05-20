import React from 'react';
import PokeCell from './PokeCell';

const PokeList = (props) => {
    return (
        <div className="row">
            {props.pokeData.pokemon_entries.map(p => {
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