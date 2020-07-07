import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Home, LoginPage} from './pages';

function App() {
  return (
    <div className="App"> 
    
    <main>
      <Switch>
        <Route to="/" component={Home} />
        <Route to="/login" component={LoginPage} />
      </Switch>
    </main>
    </div>
  );
}

export default App;
