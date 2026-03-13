import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";  
import { NAV_ITEMS } from "../data/homeData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top navbar-tet ${scrolled ? "scrolled" : ""}`}>
      <a className="navbar-brand d-flex align-items-center gap-2" href="#">
        <img
          src={logo}
          alt="Xuân Bình An"
          className="navbar-logo"
          style={{ height: 32, width: "auto", borderRadius: 8, marginRight: 8 }}
        />
        <span className="navbar-brand-text">Xuân Bình An</span>
      </a>

      <button
        className="navbar-toggler border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navMenu"
      >
        <span style={{ color: "#ffd700", fontSize: 22 }}>☰</span>
      </button>

      <div className="collapse navbar-collapse justify-content-center" id="navMenu">
        <ul className="navbar-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item} className="nav-item mx-2">
              <a className="nav-link nav-link-tet" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="d-none d-lg-flex align-items-center" style={{ gap: 12 }}>
        <button className="btn btn-tet-red px-4 py-2" style={{ fontSize: 13 }}>
          🧧 Mua Ngay
        </button>
        <button
          type="button"
          className="btn btn-tet-outline d-flex align-items-center"
          style={{ fontSize: 13, gap: 6 }}
        >
          <span style={{ fontSize: 18 }}>🛒</span>
          <span>Giỏ hàng</span>
        </button>
      </div>
    </nav>
  );
}