import React from 'react';

export default class NumberInput extends React.Component {
  onGuess(event) {
    event.preventDefault();
    
      if(this.props.onGuess) {
        const value = this.input.value;
        this.props.onGuess(value);
      }
    this.input.value = '';
  }
  
  render() {
    return (
    <form onSubmit={e => this.onGuess(e)}>
      <label htmlFor="userGuess">Enter your guess</label>
      <input type="text" name="userGuess" id="userGuess"
          className="text" maxLength="3" autoComplete="off"
          required
          ref={input => this.input = input} />
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
);
  }
};
  

//How to show each component one at a time through the process?
// ReactDOM.render(
//   <NumberInput />,
//   document.getElementById('root')
// );