import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="about" smooth={true} duration={500} spy={true} offset={0} activeClass="active">About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} spy={true} offset={0} activeClass="active">Skills</Link></li>
                <li><Link to="workexp" smooth={true} duration={500} spy={true} offset={0} activeClass="active">Work Experience</Link></li>
                <li><Link to="education" smooth={true} duration={500} spy={true} offset={0} activeClass="active">Education</Link></li>
                <li><Link to="projects" smooth={true} duration={500} spy={true} offset={0} activeClass="active">Projects</Link></li>
                <li><Link to="tictactoe" smooth={true} duration={500} spy={true} offset={0} activeClass="active">TicTacToe</Link></li>
                <li><Link to="contact" smooth={true} duration={500} spy={true} offset={0} activeClass="active">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;






