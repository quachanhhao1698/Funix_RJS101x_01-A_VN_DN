import React,{ Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainComponent from './components/MainComponent';

class App extends Component{
  
  render() {
    return(
      <Router>
        <div className='App'>
          <MainComponent/>
        </div>
      </Router>
    );
  }
}

export default App;
