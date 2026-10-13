import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    const sections = [['about', 'About'], ['research', 'Research'], ['models', 'Models'], ['projects', 'Projects'], ['workexp', 'Experience'], ['patronus', 'Patronus'], ['contact', 'Contact']];
    return (
        <nav className="navbar" aria-label="Main navigation">
            <a href="#hero" className="navbar-logo" onClick={close}>DH</a>
            <button type="button" className="hamburger" aria-label="Toggle navigation" aria-expanded={isOpen} aria-controls="navigation-links" onClick={() => setIsOpen(!isOpen)}>
                <div></div><div></div><div></div>
            </button>
            <ul id="navigation-links" className={`navbar-links ${isOpen ? 'show' : ''}`}>
                {sections.map(([id, label]) => <li key={id}><a href={`#${id}`} onClick={close}>{label}</a></li>)}
                <li><a href="#contact" className="navbar-cta" onClick={close}>Let's talk</a></li>
            </ul>
        </nav>
    );
};
export default Navbar;
