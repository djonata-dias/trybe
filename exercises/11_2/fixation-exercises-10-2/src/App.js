import React from 'react';
import logo from './logo.svg';
import './App.css';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image source={'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'} className="App-logo" alternativeText={"logo"} />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
