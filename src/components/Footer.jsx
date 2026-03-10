import logo from "../assets/logo.jpg";  
import { FOOTER_COLS, SOCIAL_ICONS } from "../data/homeData";

export default function Footer() {
  return (
    <footer className="footer-tet">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 col-lg-4 mb-4 mb-lg-0">
            <div className="d-flex align-items-center mb-3" style={{ gap: 10 }}>
              <img
                src={logo}
                alt="Xuân Bình An"
                className="footer-logo"
                style={{ height: 32, width: "auto", borderRadius: 8, marginRight: 8 }}
              />
              <span className="footer-logo-text">Xuân Bình An</span>
            </div>
            <p className="footer-desc">
              Mang hương Xuân đến mọi gia đình Việt. Trân trọng từng khoảnh khắc sum vầy bên người
              thân yêu.
            </p>
          </div>

          {FOOTER_COLS.map((col) => (
            <div
              key={col.title}
              className={`col-6 mb-4 mb-lg-0 ${col.title === "Kết Nối" ? "col-lg-4" : "col-lg-2"}`}
            >
              <div className="footer-col-title">{col.title}</div>
              {col.links.map((link) => {
                  const iconSrc = col.title === "Kết Nối" ? SOCIAL_ICONS[link] : null;

                  return (
                    <a
                      key={link}
                      href="#"
                      className="footer-link d-flex align-items-center"
                      style={{ gap: 6 }}
                    >
                      {iconSrc && (
                        <img
                          src={iconSrc}
                          alt={link}
                          style={{ height: 16, width: "auto", borderRadius: 4 }}
                        />
                      )}
                      <span>{link}</span>
                    </a>
                  );
                })}
            </div>
          ))}
        </div>

        <div className="footer-bottom d-flex justify-content-between flex-wrap" style={{ gap: 12 }}>
          <span className="footer-copy">
            © 2026 Xuân Bình An. Chúc Mừng Năm Mới! 🎊
          </span>
          <span className="footer-copy">Thiết kế với ❤️ vì mùa Xuân</span>
        </div>
      </div>
    </footer>
  );
}