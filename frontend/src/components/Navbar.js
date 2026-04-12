import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);

    return (
        <nav className="navbar">
            <Link to="hero" smooth={true} duration={500} className="navbar-logo">
                DH
            </Link>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className={`navbar-links ${isOpen ? 'show' : ''}`}>
                <li><Link to="about" smooth duration={500} spy activeClass="active" onClick={close}>About</Link></li>
                <li><Link to="research" smooth duration={500} spy activeClass="active" onClick={close}>Research</Link></li>
                <li><Link to="projects" smooth duration={500} spy activeClass="active" onClick={close}>Projects</Link></li>
                <li><Link to="workexp" smooth duration={500} spy activeClass="active" onClick={close}>Experience</Link></li>
                <li><Link to="patronus" smooth duration={500} spy activeClass="active" onClick={close}>Patronus</Link></li>
                <li><Link to="contact" smooth duration={500} spy activeClass="active" onClick={close}>Contact</Link></li>
                <li><Link to="contact" smooth duration={500} className="navbar-cta" onClick={close}>Let's talk</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
