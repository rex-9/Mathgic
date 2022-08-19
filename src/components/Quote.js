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
      <div id="about">
        <div>
          <a href="https://github.com/HtetNaing0814">
            <i
              className="fa-brands fa-github fa-2x"
            />
          </a>
        </div>
        <div className="whatsmail">
          <i className="fa-brands fa-whatsapp fa-2x" />
          <p>: +959443112251</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/htetnaing0814/">
            <i
              className="fa-brands fa-linkedin fa-2x"
            />
          </a>
        </div>
        <div className="whatsmail">
          <i className="fa-solid fa-envelope fa-2x" />
          <p>: htetnaing0814@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
