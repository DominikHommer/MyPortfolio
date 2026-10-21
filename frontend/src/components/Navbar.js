import React, { useState, useEffect } from "react";
import "./Navbar.css";
const sections = [
  ["research", "Research"],
  ["patronus", "Building"],
  ["models", "Models"],
  ["about", "About"],
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const escape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", escape);
    if (!window.IntersectionObserver)
      return () => window.removeEventListener("keydown", escape);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    ["hero", ...sections.map(([id]) => id), "contact"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", escape);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a
            href="#hero"
            className="navbar-logo"
            aria-label="Dominik Hommer, home"
            onClick={() => setIsOpen(false)}
          >
            dh<span>↗</span>
          </a>
          <span className="nav-note">Research & a little curiosity</span>
          <button
            type="button"
            className="hamburger"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="navigation-links"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Close" : "Menu"}
            <span>{isOpen ? "−" : "+"}</span>
          </button>
          <ul
            id="navigation-links"
            className={`navbar-links ${isOpen ? "show" : ""}`}
          >
            {sections.map(([id, label]) => (
              <li key={id}>
                <a
                  className={active === id ? "active" : ""}
                  aria-current={active === id ? "location" : undefined}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="navbar-cta"
                onClick={() => setIsOpen(false)}
              >
                Say hello <span aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
