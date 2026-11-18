"use client";
import BurgerMenu from "./Burger";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="header-content">
          <h1>
            NIGHT<span>CLUB</span>
          </h1>
          <p>HAVE A GOOD TIME</p>
        </nav>
        <BurgerMenu />
      </header>

      <style jsx>{`
        .header {
          position: relative;
          background: #080808;
          border-top: 3px solid #ff2670;
          border-bottom: 3px solid #ff2670;
          padding: 40px;
          overflow: hidden;
        }

        .header::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 45px;
          height: 45px;
          background: #ff2670;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }

        .header::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 45px;
          height: 45px;
          background: #ff2670;
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }

        .header-content {
          position: relative;
          z-index: 1;
        }

        .header h1 {
          color: white;
          font-size: 36px;
          font-weight: bold;
        }

        .header h1 span {
          color: #ff2670;
        }

        .header p {
          color: white;
          letter-spacing: 6px;
        }
      `}</style>
    </>
  );
}
