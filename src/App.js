import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
        <ToyForm/>
        <ToyContainer/>
      </>
    );
  }

}

export default App;
