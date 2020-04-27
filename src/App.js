import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Header from "./components/Header"
import character from "./character.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    character,
    score: 0,
    totalScore: character.length,
    topScore: 0,
    guessMessage: "Start Clicking"

  };

  clickImage = id => {
    // make copy of charcater array and get cliked imageand chek for cliked value

    console.log("in click")
    const character = this.state.character;
    let score = this.state.score
    let topScore = this.state.topScore
    let guessMessage = this.state.guessMessage

    // Filter for the clicked match
    const clickedMatch = character.filter(match => match.id === id);

    // If the matched image's clicked value is already true, 
    // do the game over actions
    if (clickedMatch[0].clicked) {

      console.log("Correct Guesses: " + this.setState.score);
      console.log("Best Score: " + this.state.topScore);

      score = 0;
      guessMessage = "Bummer! You already clicked on this one."

      for (let i = 0; i < character.length; i++) {
        character[i].clicked = false;
      }

      this.setState({ score });
      this.setState({ guessMessage });
      this.setState({ character });

      // Otherwise, if clicked = false, and the user hasn't finished
    } else if (score < 10) {

      // Set its value to true
      clickedMatch[0].clicked = true;

      // increment the appropriate counter
      score++;

      guessMessage = "Great! You haven't click on that one yet! Keep going!";

      if (score > topScore) {
        topScore = score;
        this.setState({ topScore });
      }

      // Shuffle the array to be rendered in a random order
      character.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.matches equal to the new matches array
      this.setState({ character });
      this.setState({ score });
      this.setState({ guessMessage });
    } else {

      // Set its value to true
      clickedMatch[0].clicked = true;

      // restart the guess counter
      score = 0;

      // Egg on the user to play again
      guessMessage = "WOW!!! You got ALL of them!!! Now, let's see if you can do it again!";
      topScore= 10;
      this.setState({ topScore });

      for (let i = 0; i < character.length; i++) {
        character[i].clicked = false;
      }

      // Shuffle the array to be rendered in a random order
      character.sort(function (a, b) { return 0.5 - Math.random() });

      // Set this.state.matches equal to the new matches array
      this.setState({character });
      this.setState({ score });
      this.setState({ guessMessage });

    }


  };

  // Map over this.state.charcater and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Header score={this.state.score} topScore={this.state.topScore} message={this.state.guessMessage} />
        <Wrapper>
          <Title />
          {this.state.character.map(charcater => (
            <FriendCard
              clickImage={this.clickImage}
              id={charcater.id}
              key={charcater.id}
              name={charcater.name}
              image={charcater.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
