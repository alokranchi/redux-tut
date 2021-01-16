import logo from './logo.svg';
import './App.css';

import React from 'react';

// import Home from './components/Home'
import User from './User';
//import HomeContainer from './containers/HomeContainer'
import HomeContainer from './containers/HomeContainer'


function App() {
  return (
    <div className="App">
      <h1>App component alok </h1>
      <User data={{ name: 'my name alok', age: 40 }} />
      {/* <Home /> */}
      <HomeContainer />
    </div>
  );
}

export default App;
