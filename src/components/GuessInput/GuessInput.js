import React from 'react';
import GuessOutput from '../GuessOutput/GuessOutput';

function GuessInput({ answer }) {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const guessInUppercase = guess.toUpperCase();
    console.info({ guess: guessInUppercase });

    const nextGuess = [...guesses, guess];
    setGuesses(nextGuess)
  }

  return <>
    <GuessOutput guesses={guesses} answer={answer} />

    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input minLength={5} maxLength={5} id="guess-input" type="text" value={guess} onChange={(event) => {
        setGuess(event.target.value);
      }} />
    </form>
  </>;
}

export default GuessInput;
