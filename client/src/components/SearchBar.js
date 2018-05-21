import React from 'react';

const getInput = (event) => {
    return event.target.value;
};

const SearchBar = ({searchTerm, onSearchInput}) => {

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">P</span>
            </div>
            <input className="form-control"
                   type="text"
                   placeholder="Search"
                   value={searchTerm}
                   onChange={event => onSearchInput(getInput(event))}/>
        </div>
    );

};

export default SearchBar;