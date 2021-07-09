import React from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Home } from './home';
import { Login } from './login';

const App = () => {
    return <div className="flex-container main">
          <BrowserRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/home" component={Home} />
              <Redirect exact to="/home" />
            </Switch>
        </BrowserRouter>
      </div>
}

export default App;
