import React from 'react';
import './App.css';
import SampleComponent from './components/SampleComponent';
import { MapComponent } from './components/MapComponent';
import BottomTabBar from './components/BottomTabBar';

function App() {
  return (
    <div className="App">
      <SampleComponent/>
      <MapComponent/>
      <BottomTabBar/>
    </div>
  );
}

export default App;
