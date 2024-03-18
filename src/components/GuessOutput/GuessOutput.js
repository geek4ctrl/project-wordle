import React from 'react';
import { checkGuess } from '../../game-helpers'

function GuessOutput({ guesses, answer }) {

  // Check word with checkGuess
  function validateGuess(guessWord) {
    console.log('Word: ', guessWord);

    const checkedGuess = checkGuess(guessWord, answer);

    console.log(checkedGuess);

    return (
      checkedGuess.map((element, key) => {
        return (
          <span key={key} className={`cell ${element.status}`}>{element.letter}</span>
        )
      })
    );
  }

  return <div className='guess-results'>
    {guesses.map((guess, index) => {
      return (
        <div index={index} className='guess'>
          {validateGuess(guess)}
        </div>
      )
    })}
  </div>
}

export default GuessOutput;
