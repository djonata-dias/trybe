import React from 'react';
import './App.css';
import Pokemons from './data';

class Card extends React.Component {
  render() {
    const { data, filter } = this.props;
    return (
      data.filter(({ type }) => [type, 'All'].includes(filter))
        .map(({ id, name, type, averageWeight, image }) => (
          <li key={name}>
            <div>
              <img src={image} alt={name} />
            </div>
            <div>
        {id} - {name} type: {type} averageWeight: {averageWeight.value} {averageWeight.measurementUnit}
            </div>
          </li>
       ))

    )
    
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ type: 'All' })
  }

  serFilterType = event => {
    this.setState({
      type: event.target.value === '' ? 'All' : event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="pokedex">
          <select onChange={this.serFilterType} type='text'>
            <option value="Eletric" >Eletric</option>
            <option value="Fire">Fire</option>
            <option value="Bug">Bug</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psychic</option>
            <option value="Normal">Normal</option>
            <option value="Dragon">Dragon</option>
            <option value="All" selected="selected">All</option>
          </select>
        </div>
        <Card filter={this.state.type} data={Pokemons}/>
      </div>
    );
  }
}

export default App;
