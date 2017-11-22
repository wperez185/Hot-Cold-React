import React, { Component } from 'react';
import Header from './components/header';
import GuessForm from './components/guessForm'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.changeNumber = this.changeNumber.bind(this);
    this.getGuess = this.getGuess.bind(this);
    this.state = {
      correctGuess: Math.floor(Math.random() * 50),
      userGuess: "",
      guesses: [],
      guessIsCorrect: false
    }
    console.log(this.state.correctGuess);
  }
  changeNumber(event) {
    this.setState({userGuess: event.target.value})
    // console.log(this.state);
  }

  getGuess(number){
    // keep track of my guesses, display my guesses, check whether guess is right, clear input for next guess
    console.log(number);
    this.setState({guesses: this.state.guesses.concat([number]),
                  userGuess: number,
                  guessIsCorrect: this.state.userGuess == this.state.correctGuess
                 });
    // my user guess is the same as correct guess
    console.log(this.state.guesses);
    console.log(this.state.guesses.length);

  }

  render() {
    return (
      <div className="App">
      <Header />
      <span className="feedback" style={{display:this.state.guesses.length > 0 ? 'block' : 'none'}}>
      {this.state.guessIsCorrect ? "You are correct" : "You are wrong. Try again"}
      </span>
        <GuessForm number={this.state.number} getGuess={(number) => this.getGuess(number)}/>
        <h2>Guess #{this.state.guesses.length}!</h2>
        <span className="guesses">{this.state.guesses.join(",")}</span>
      </div>
    );
  }
}

export default App;
