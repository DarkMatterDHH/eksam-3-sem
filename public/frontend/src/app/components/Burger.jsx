import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="burger-btn"
        id="burgerBtn"
        aria-label="Åbn menu"
        aria-expanded={isOpen}
        aria-controls="mobileMenu"
        onClick={() => setIsOpen(true)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="mobile-menu" id="mobileMenu" hidden={!isOpen}>
        <button
          className="close-btn"
          id="closeBtn"
          aria-label="Luk menu"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        <div className="menu-links">
          <a href="#home" onClick={() => setIsOpen(false)}>
            HOME
          </a>
          <a href="#events" onClick={() => setIsOpen(false)}>
            EVENTS
          </a>
          <a href="#book" onClick={() => setIsOpen(false)}>
            BOOK TABLE
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            CONTACT US
          </a>
        </div>
      </nav>
    </>
  );
}
