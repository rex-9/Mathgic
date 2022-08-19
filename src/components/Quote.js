import { useState } from 'react';

const Quote = () => {
  const [quotes, setQuote] = useState('');

  const updateQuote = async () => {
    const res = await fetch('https://random-math-quote-api.herokuapp.com/');

    res
      .json()
      .then((res) => {
        setQuote({
          quotes: res.quote,
        });
      })
      .catch();
  };

  const quote = [JSON.stringify(quotes)].join('').split('');
  quote.pop();
  quote.shift();
  quote.splice(0, 9);

  return (
    <div id="quote">
      <p>{quote}</p>
      <button type="button" className="generateQuote bn25" onClick={updateQuote}>
        Generate quote
      </button>
    </div>
  );
};

export default Quote;
