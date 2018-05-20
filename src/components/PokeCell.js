import React from 'react';

const PokeCell = (props) => {
    return (
        <div className="col-6 col-sm-1">
            <img className="img-fluid" src={'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/' + props.number + '.png'} alt={props.name}/>
            <h5>#{props.number} {props.name}</h5>
        </div>
    );
};

export default PokeCell;