import React from 'react';

import NumberInput from './numberInput';

export default function GuessSection(props) {
  return (
    <section>
      <h2 id="feedback">{props.feedback}</h2>
      <NumberInput onGuess={props.onGuess} />
    </section>
  );
}