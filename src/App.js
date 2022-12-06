import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <MissionCard />
      </>
    );
  }
}

export default App;
