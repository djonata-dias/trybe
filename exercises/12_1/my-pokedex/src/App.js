import React from 'react';
import './App.css';
import Pokemons from './data';

class Card extends React.Component {
  render() {
    const { data, filter } = this.props;
    return (
      data.filter(({ type }) => [type, 'All'].includes(filter))
        .map(({ id, name, type, averageWeight, image }) => (
          <li key={id} className="hidden-card">
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ type: 'All', indexA: 0, indexB: 0 })
  }
  setFilterType = event => {
   this.setState({ type: event.target.value === '' ? 'All' : event.target.value })
  }

  setNext = async () => {
    const li = document.getElementsByTagName('li');
    const i = this.state.indexA
    let length = (li.length  < 9 ) ? 1 : li.length - 1;
    console.log(`length: ${length}, i: ${i}, li.length: ${li.length}`);
    if(length !== 1){
    if (i < length ) {
      await this.setState({ indexA: i + 1 }) 
    } else {
      await this.setState({ indexA: 0})
    }}
    for (let z = 0; z < li.length; z++) { li[z].classList.remove('card') }
    li[i].classList.add('card')

  }

  setPreviously = async () => {
    const li = document.getElementsByTagName('li');
    const i = this.state.indexB;
    let length = (li.length - 1 < 1) ? 1 : li.length - 1;
    console.log(`length: ${length}, i: ${i}, li.length: ${li.length}`);

    if (i > 0) {
      await this.setState({ indexB: i - 1 }) 
    } else {
      await this.setState({ indexB: length})
    }    for (let z = 0; z < li.length; z++) { li[z].classList.remove('card') }
    li[i].classList.add('card')
  }
  render() {
    return (
      <div className="App">
        <div className="pokedex">
          <select className="element-type" value={this.state.type} onChange={this.setFilterType}>
            <option value="Eletric" >Eletric</option>
            <option value="Fire">Fire</option>
            <option value="Bug">Bug</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psychic</option>
            <option value="Normal">Normal</option>
            <option value="Dragon">Dragon</option>
            <option value="All">All</option>
          </select>
          <div className="pokedex-screen">
            <Card filter={this.state.type} data={Pokemons} />
          </div>
          <button onClick={this.setNext} className="next-pokemon" />
          <button onClick={this.setPreviously} className="previously-pokemon" />
        </div>
      </div>
    );
  }
}
