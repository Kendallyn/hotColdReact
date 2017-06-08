import React from 'react';


export default function NumberOfGuesses(props) {
    return (
    <p>
      Guess #<span id="count">{props.count}</span>
      </p>
    );
}