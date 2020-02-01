import React, { Component } from 'react';

class ToyCard extends Component {

  state = {
    likes: this.props.toy.likes
  }

  handleLikes = (event) => {
    // console.log('you clicked me!')
    let likedToyId = this.props.toy.id
    // let newLike = this.state.likes + 1
    this.props.getLikes(likedToyId)
  }

  handleDelete = (event) => {
    // console.log('i\'ve been clicked!')
    let deletedToyId = this.props.toy.id
    this.props.deleteToy(deletedToyId)
  }

  render() {
    // console.log(this.props.toy.likes)
    // console.log(this.props)
    let { name, image, likes } = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt="" className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick = {this.handleLikes} className="like-btn">Like {'<3'}</button>
        <button onClick = {this.handleDelete} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
