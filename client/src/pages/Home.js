import React, {Component} from 'react';
import SearchBar from '../components/SearchBar';
import PokeList from '../components/PokeList';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            isLoading: true,
            pokeData: null,
            searchTerm: ""
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/api/pokemons')
            .then(res => res.json())
            .then(pokemons => this.setState({pokeData: pokemons}, () => {
                this.setState({isLoading: false});
            }));
    }

    handleSearchInput = (searchTerm) => {
        this.setState({searchTerm: searchTerm})
    };

    render() {
        /* is loading */
        if (this.state.isLoading) {
            return (
                <div>
                    <SearchBar searchTerm={this.state.searchTerm}
                               onSearchInput={this.handleSearchInput}/>
                    <p>Loading ...</p>
                </div>
            )
        }
        /* is loaded */
        if (!this.state.isLoading) {
            return (
                <div>
                    <SearchBar searchTerm={this.state.searchTerm}
                               onSearchInput={this.handleSearchInput}/>
                    <PokeList pokeData={this.state.pokeData}
                              searchTerm={this.state.searchTerm}/>
                </div>
            )
        }
    }

}

export default Home;