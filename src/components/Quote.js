/* eslint-disable max-len */
import React from 'react';

export default function Quote() {
  const [content, setContent] = React.useState('');
  const [author, setAuthor] = React.useState('');

  React.useEffect(() => {
    fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content);
        setAuthor(data.author);
      });
  }, []);

  const handleClick = () => {
    fetch('https://api.quotable.io/random?tags=technology,famous-quotes')
      .then((response) => response.json())
      .then((data) => {
        setContent(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div className="relative container-fluid h-screen flex flex-col px-4 md:px-16 lg:px-32 pb-12 pt-28 lg:pt-32">
      <div className="card p-2 md:p-10 bg-math-smartCard rounded-md mb-4 backdrop-filter backdrop-blur-5xl flex">
        <span className="w-full">
          <p className="text-lg mb-4 font-light text-math-header">
            {content}
          </p>
          <p className="text-md font-thin text-end text-green-600">
            {author}
          </p>
        </span>
      </div>
      <button type="button" className="card hover:bg-math-header hover:text-white shadow-md rounded-md py-2 w-52 text-xl text-semibold absolute top-3/4 left-1/2 -translate-x-1/2" onClick={handleClick}>New Quote</button>
    </div>
  );
}
