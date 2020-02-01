import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'
import SearchForm from './components/SearchForm'
import data from './data'


class App extends React.Component{

  state = {
    toyData: data,
    search: ""
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

  updateSearch = (newValue) => {
    this.setState({
      search: newValue
    })
  }

  searchForm = () => {

    let searchArr = this.state.toyData.filter(toy => {
      let {name} = toy

      let searchInput = this.state.search.toLowerCase()
      name.toLowerCase().includes(searchInput)
    })
    return searchArr
    // console.log(value)
  }

  render(){
    // console.log(data)
    return (
      <>
        <Header/>
        <ToyForm addToy={this.addToyFunction} />
        <SearchForm search={this.state.search} updateSearch={this.updateSearch}/>
        <ToyContainer deleteToy={this.deleteToy} getLikes={this.updateLikes} toyData={this.searchForm()}/>
      </>
    );
  }

}

export default App;
