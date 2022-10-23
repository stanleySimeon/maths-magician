/* eslint-disable max-len */
import React from 'react';

export default function Quote() {
  const [quote, setQuote] = React.useState('');
  const [author, setAuthor] = React.useState('');

  /* This is a React hook that is used to fetch data from an API. */
  React.useEffect(() => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  }, []);

  /**
   * We're using the fetch API to make a request to the random-math-quote-api.herokuapp.com endpoint. We're then using the .then()
   * method to wait for the response from the API. Once we get the response, we're using the .json() method to convert the response
   * to JSON. We're then using the .then() method again to wait for the JSON to be converted. Once we get the JSON, we're using the
   * setQuote() and setAuthor() functions to update the state of the quote and author variables
   */
  const handleClick = () => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote);
        setAuthor(data.author);
      });
  };

  return (
    <div className="relative container-fluid h-screen flex flex-col px-4 md:px-16 lg:px-32 pb-12 pt-28 lg:pt-32">
      <div className="card p-2 md:p-10 bg-math-smartCard rounded-md mb-4 backdrop-filter backdrop-blur-5xl flex">
        <span className="w-full">
          <p className="text-xl mb-4 text-math-header">
            {quote}
          </p>
          <p className="text-2xl text-end font-bold text-green-600">
            {author}
          </p>
        </span>
      </div>
      <button type="button" className="card hover:bg-math-header hover:text-white shadow-md rounded-md py-2 w-52 text-xl text-semibold absolute top-3/4 left-1/2 -translate-x-1/2" onClick={handleClick}>New Quote</button>
    </div>
  );
}
