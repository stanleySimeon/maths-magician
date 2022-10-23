/* eslint-disable max-len */
import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  return (
    <header className="header fixed w-full top-0 flex justify-between p-2 md:py-4 md:px-16 lg:px-32  text-white bg-math-header select-none z-50">
      <Link to="Home" className="logo">
        <img src={mathLogo} alt="math logo" className="w-16 md:w-20 lg:w-24" />
      </Link>
      <nav className="menu nav flex w-full justify-end items-center">
        <button type="button" className="md:hidden" onClick={toggle}>
          <span className={`menu text-green-500 ${isOpen ? 'cross' : 'hamburger'}`}>
            {
              isOpen ? (
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
              )
            }
          </span>
        </button>
        <ul className="show hidden absolute md:flex gap-10 h-auto menu-links">
          {links.map((link) => (
            <li className="text-green-400 hover:text-opacity-60 active:text-green-300" key={link.id}>
              <Link to={link.path} onClick={toggle} onBlur={hide} onFocus={show}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
