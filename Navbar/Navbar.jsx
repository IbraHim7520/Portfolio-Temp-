import React from 'react';
import Container from '../Components/Container';
import FlipText from '../Components/FlipText';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (

    <div className="navbar sticky top-0 z-50 px-3  md:px-5 lg:px-8 xl:px-14 2xl:px-20 bg-gray-950 lg:bg-gray-800 text-white  shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow-2xl shadow-gray-600">
            <Link to='home' smooth={true} duration={500} spy={true}>
              <FlipText>Home</FlipText>
            </Link>
            <Link to='about' smooth={true} duration={500} spy={true}>
              <FlipText>About</FlipText>
            </Link>
            <Link to='skill' smooth={true} duration={500} spy={true}>
              <FlipText>Skills</FlipText>
            </Link>
            <Link to='project' smooth={true} duration={500} spy={true}>
              <FlipText>Projects</FlipText>
            </Link>
            <Link to='contact' smooth={true} duration={500} spy={true}>
              <FlipText>Contact</FlipText>
            </Link>
          </ul>
        </div>
        <a className="cursor-pointer text-xl font-semibold">IBRAHIM</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu cursor-pointer menu-horizontal gap-3 px-1">
          <Link to='home' smooth={true} duration={500} spy={true}>
            <FlipText>Home</FlipText>
          </Link>
          <Link to='about' smooth={true} duration={500} spy={true}>
            <FlipText>About</FlipText>
          </Link>
          <Link to='skill' smooth={true} duration={500} spy={true}>
            <FlipText>Skills</FlipText>
          </Link>
          <Link to='project' smooth={true} duration={500} spy={true}>
            <FlipText>Projects</FlipText>
          </Link>
          <Link to='contact' smooth={true} duration={500} spy={true}>
            <FlipText>Contact</FlipText>
          </Link>
        </ul>
      </div>

    </div>

  );
};

export default Navbar;