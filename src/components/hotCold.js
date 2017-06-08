import React from 'react';

import GuessHistory from './guessHistory';
import GuessSection from './guessSection';
import NumberOfGuesses from './numberOfGuesses';

export default class HotCold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100)
    };
  }
  
  newGame() {
    this.setState ({
      guesses: [],
      feedback: 'Make your guess!',
      correctAnswer: Math.round(Math.random() * 100)
    });
  }
  
  guess(guess) {
    guess = parseInt(guess, 10);
    if (isNaN(guess)) {
      this.setState({
        feedback: 'Please enter a valid number'
      });
      return;
    }
    
    const difference = Math.abs(guess-this.state.correctAnswer);
    
    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    }
    else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    }
    else if (difference >= 10) {
      feedback = 'You\'re Warm';
    }
    else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    }
    else {
      feedback = 'You guessed it!';
    }
    
    this.setState({
      feedback,
      guesses: [...this.state.guesses, guess]
    });
  }
  
  render() {
    return (
    <div>
      <GuessSection feedback = {this.state.feedback}
          onGuess={(guess) => this.guess(guess)} />
      <NumberOfGuesses count ={this.state.guesses.length} />
      <GuessHistory guesses={this.state.guesses} />
    </div>
);
}
}