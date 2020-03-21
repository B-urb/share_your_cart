import React from 'react';
import './App.css';
import Navigation from './navigation';
import { 
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {

  return (<React.StrictMode>
    <Router>
      <Navigation />
    </Router>
  </React.StrictMode>);
}

export default App;
