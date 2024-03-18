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
    setGuesses(nextGuess);
  }

  return <>
    <GuessOutput guesses={guesses} answer={answer} />

    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input disabled={guess === answer || guesses.length > 4} minLength={5} maxLength={5} id="guess-input" type="text" value={guess} onChange={(event) => {
        setGuess(event.target.value);
      }} />
    </form>

    {
      guess === answer && <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
    }

    {
      guesses.length > 4 && <div class="sad banner">
        <p>Sorry, the correct answer is <strong>LEARN</strong>.</p>
      </div>
    }

  </>;
}

export default GuessInput;
