import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Main/>
        </div>
      </Router>
        
      );
  }
}

export default App;
