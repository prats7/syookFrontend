import React, { Component } from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
//Reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div className="App">
            <Home />
          </div>
        </Provider>
      </div>
    )
  }
}

export default App

