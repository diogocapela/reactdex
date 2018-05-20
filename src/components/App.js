import React, {Component} from 'react';
import PokeList from './PokeList';

class App extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            pokeData: null
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://pokeapi.co/api/v2/pokedex/1')
            .then(response => response.json())
            .then(data => this.setState({pokeData: data, isLoading: false}));
    }

    render() {
        /* is loading */
        if (this.state.isLoading) {
            return (
                <div className="container">
                    <p>Loading ...</p>
                </div>
            )
        }
        /* is loaded */
        if (!this.state.isLoading) {
            return (
                <div className="container">
                    <PokeList pokeData={this.state.pokeData}/>
                </div>
            )
        }
    }

}

export default App;