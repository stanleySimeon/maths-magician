/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import mathLogo from '../assets/math.svg';

export default function Navigation() {
  const links = [
    { id: 1, name: 'Home', path: '/home' },
    { id: 2, name: 'Calculator', path: '/calculator' },
    { id: 3, name: 'Quote', path: '/quote' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (isOpen) {
    return (
      <nav className="bg-math-header fixed top-0 left-0 w-full h-16 z-50">
        <div className="container-fluid flex flex-col w-full">
          <img src={mathLogo} alt="math logo" className="w-32 z-10 mt-4 ml-4" />
          <div className="flex justify-center items-center w-full h-screen bg-black absolute">
            <ul className="flex flex-col text-white gap-12 text-2xl text-center">
              {links.map((link) => (
                <li key={link.id} className="mb-4">
                  <Link to={link.path} onClick={handleClick} className="hover:text-green-600">{link.name}</Link>
                </li>
              ))}
            </ul>
            <FontAwesomeIcon
              icon={
                isOpen ? faTimes : faBars
              }
              className="text-green-500 text-2xl absolute top-6 right-6 cursor-pointer"
              onClick={handleClick}
            />
          </div>
        </div>
      </nav>
    );
  }
  return (
    <nav className="bg-math-header fixed top-0 left-0 w-full h-16 z-50">
      <div className="container-fluid flex justify-between items-center px-4 md:px-16 lg:px-32">
        <Link to="/Home" className="flex items-center">
          <img src={mathLogo} alt="math logo" className="w-16 h-16 md:w-20" />
        </Link>
        <div className="flex justify-end items-center">
          <ul className="hidden md:flex text-green-500 text-xl gap-10">
            {links.map((link) => (
              <li key={link.id} className="ml-4">
                <Link to={link.path} className="hover:text-green-600">{link.name}</Link>
              </li>
            ))}
          </ul>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="md:hidden text-green-500 text-2xl ml-4 cursor-pointer" onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
}
