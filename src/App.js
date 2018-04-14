import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";

import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends:friends,
    highest:0,
    clicked:[]
  };


handleIncrement = id => {

  const hasBeenClicked = this.state.clicked.indexOf(id) !== -1


  if (hasBeenClicked) {
   this.setState({friends, clicked:[], highest:Math.max(this.state.highest, this.state.clicked.length)})
  } else {
    const friendsCopy = friends.slice();

    const friendsShuffle = [];

    while (friendsCopy.length > 0 ) {
      const index = Math.floor(Math.random() * friendsCopy.length)

      const friend = friendsCopy[index];

      friendsShuffle.push(friend)

      friendsCopy.splice(index, 1)
    }
    const clicked = this.state.clicked.slice()
    clicked.push(id)
    this.setState({friends:friendsShuffle, clicked})
  }






};


 //
 //  handleIncrement = id => {
 //    let value = this.state.clicked.indexOf(id)
 //
 //    console.log(value)
 //    if (value < 0 ) {
 //      this.setState({count: this.state.count + 1});
 //       this.setState({clicked:this.state.clicked.push(id)})
 //
 //      console.log(this.state.clicked)
 //    }
 //    else {
 //       this.setState({count:0, clicked:[]})
 //  }
 //
 //  this.setState({ friends });
 //
 // };
 //


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        Friends List
        <div>
          Current Score: {this.state.clicked.length}
          </div>
          <div>
         highest Score: {this.state.highest}
        </div>
        <Wrapper>
        {this.state.friends.map(friend => {
        return  <FriendCard
            removeFriend={this.switchFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            handleIncrement={this.handleIncrement.bind(this)}

          />
        })}
        </Wrapper>
      </div>
    );
  }
}

export default App;
