import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import List from './components/List';
import InputList from './components/InputList';

function App() {
  return (
    <div className="App">
      <InputList />
      <List />
      <main>
        <Switch>
          <Route path="/" component={Home}>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
