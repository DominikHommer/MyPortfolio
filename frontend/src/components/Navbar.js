import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false); // Schließt das Menü nach Klick
    };

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={isOpen ? "show" : ""}>
                <li><Link to="about" smooth={true} duration={500} spy={true} offset={0} activeClass="active" onClick={closeMenu}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500} spy={true} offset={0} activeClass="active" onClick={closeMenu}>Skills</Link></li>
                <li><Link to="workexp" smooth={true} duration={500} spy={true} offset={0} activeClass="active" onClick={closeMenu}>Work Experience</Link></li>
                <li><Link to="education" smooth={true} duration={500} spy={true} offset={0} activeClass="active" onClick={closeMenu}>Education</Link></li>
                <li><Link to="projects" smooth={true} duration={500} spy={true} offset={0} activeClass="active" onClick={closeMenu}>Projects</Link></li>
                <li><Link to="tictactoe" smooth={true} duration={500} spy={true} offset={0} activeClass="active" onClick={closeMenu}>TicTacToe</Link></li>
                <li><Link to="contact" smooth={true} duration={500} spy={true} offset={0} activeClass="active" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;








