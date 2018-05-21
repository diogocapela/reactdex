import React from 'react';

const PokeCell = (props) => {
    return (
        <div className="col-3 col-sm-3 col-md-2 col-lg-1">
            <img className="img-fluid" src={'/img/pokemons/front_default/' + props.number + '.png'} alt={props.name}/>
            <p>#{props.number} {props.name}</p>
        </div>
    );
};

export default PokeCell;