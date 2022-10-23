import React from 'react';

export default function Home() {
  return (
    <>
      <div className="container-fluid px-4 md:px-16 lg:px-32 pt-20 pb-12 md:pt-28 lg:pt-32">
        <div className="card p-2 md:p-10 bg-math-smartCard rounded-md mb-4 backdrop-filter backdrop-blur-5xl">
          <h2 className="text-5xl mb-4 text-math-header font-bold">
            {' '}
            Welcome to
            {' '}
            <span className="text-green-600">kalkilan&#39;m</span>
          </h2>
          <p>
            MatElit (kalkilan&#39;m) is a website for all fans of mathematics.
            It is a Single Page App (SPA) that allows users to:
            Make simple calculations, Read a random math-related quote.
            Built with React and Redux. The app allows users to perform basic
            arithmetic operations, including addition, subtraction, division, and multiplication,
            and chaining and nesting of operations (as well as the +/- button which changes
            a negative number positive and vice-versa).
            Navigation in the app is made possible by using React Router.
            I have also added some styles to my website. I have used Tailwind CSS Framework.
          </p>
        </div>
      </div>
    </>
  );
}
