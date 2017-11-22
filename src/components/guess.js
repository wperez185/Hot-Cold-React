import React from 'reactl';




export default function getGuess(event){
  // keep track of my guesses, display my guesses, check whether guess is right, clear input for next guess

  event.preventDefault();
  this.setState({guesses: this.state.guesses.concat(this.state.userGuess),
                userGuess: "",
                guessIsCorrect: this.state.userGuess == this.state.correctGuess
               });
  // my user guess is the same as correct guess

  console.log(this.state.guesses.length);
  console.log(this.state.guesses);
}
