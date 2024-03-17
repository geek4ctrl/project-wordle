import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const guessInUppercase = guess.toUpperCase();
    console.info({ guess: guessInUppercase });


  }

  return <>
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input minLength={5} maxLength={5} id="guess-input" type="text" value={guess} onChange={(event) => {
        setGuess(event.target.value);
      }} />
    </form>
  </>;
}

export default GuessInput;
