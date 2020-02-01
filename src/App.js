import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    toyData: data
  }

  addToyFunction = (newToy) => {
    // console.log(newToy)
    let newToyWithLikes =  {...newToy, likes: 0}
    let newToyArr = [...this.state.toyData, newToyWithLikes]
      this.setState({
        toyData: newToyArr
      })
    // let newToyWithLikes = newToy
    // newToyWithLikes.likes = 0
    // console.log(newToyWithLikes)
    console.log(newToyArr)
  }

  updateLikes = (id, newLikes) => {
    // console.log(id, newLikes)
    let updatedArr = this.state.toyData.map((toy) => {
        if (toy.id === id) {
          let newLikes = toy.likes + 1
          let newToyObj = {...toy, likes: newLikes}
          return newToyObj
          // let newToyArr = [...this.state.toyData, newToyObj]
        } else {
          return toy
        }
    })
    this.setState({
      toyData: updatedArr
    })
  }

  deleteToy = (id) => {
    // console.log('hello!')
    let filteredToys = this.state.toyData.filter((toy) => {
        return toy.id !== id
    })
    this.setState({
      toyData: filteredToys
    })
  }

  render(){
    // console.log(data)
    return (
      <>
        <Header/>
        <ToyForm addToy={this.addToyFunction} />
        <ToyContainer deleteToy={this.deleteToy} getLikes={this.updateLikes} toyData={this.state.toyData}/>
      </>
    );
  }

}

export default App;
