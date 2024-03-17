import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    console.info({ guess })
  }

  return <>
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" value={guess} onChange={(event) => {
        setGuess(event.target.value);
      }} />
    </form>
  </>;
}

export default GuessInput;
