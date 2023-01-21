import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Info from './components/info/Info';
import Content from './components/content/Content';
import './App.css';
const App = () => {
  return (
    <div className='app' id='app'>
      <Navbar />
      <Info />
      <Content />
    </div>
  );
};

export default App;
