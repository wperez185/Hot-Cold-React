import React from 'react';

export default class GuessForm extends React.Component {
  constructor(props){
    super(props);
    this.onGuess = this.onGuess.bind(this);
  }
  onGuess(event) {
       event.preventDefault();

       // if (this.props.getGuess) {
           const value = this.number.value;
           this.props.getGuess(value);
          this.number.value = "";
       // }
  }
  render() {
  return (
    <div>
    <form onSubmit={e => this.onGuess(e)}>
    <input ref={number => this.number = number} value={this.props.number} placeholder="Enter your Guess" type="text" />
    <br />
    <button type="submit">Guess</button>
    </form>
    </div>
  )
}
};
