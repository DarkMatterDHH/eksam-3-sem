export default function BurgerMenu() {
  return (
    <>
      <button
        className="burger-btn"
        id="burgerBtn"
        aria-label="Åbn menu"
        aria-expanded={false}
        aria-controls="mobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className="mobile-menu" id="mobileMenu">
        <button className="close-btn" id="closeBtn" aria-label="Luk menu">
          &times;
        </button>

        <div className="menu-links">
          <a href="#home">HOME</a>
          <a href="#events">EVENTS</a>
          <a href="#book">BOOK TABLE</a>
          <a href="#contact">CONTACT US</a>
        </div>
      </nav>
    </>
  );
}
