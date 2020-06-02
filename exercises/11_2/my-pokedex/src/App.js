import React from 'react';
import './App.css';
import Pokemons from './data';
import Card from './components/card'


const Cards =
  
  Pokemons.map(({name, type, averageWeight, image}, index) => {
    
    return (<li className="item-lista"><Card key={index}
      name={name}
      element={type}
      weight={averageWeight.value}
      src={image}
  /></li>)
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
  <div className="pokedex">{Cards}</div>
      </header>
    </div>
  );
}

export default App;
