import React from 'react';

function Footer() {
  return (
    <div className="flex justify-center items-center w-full bg-math-smartCard h-10 fixed bottom-0 z-0">
      <p className="text-math-header">
        Stanley SIMEON ©
        {' '}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
