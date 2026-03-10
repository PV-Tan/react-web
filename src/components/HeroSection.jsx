import { useEffect, useRef, useState } from "react";
import Firework from "./common/Firework";

export default function HeroSection() {
  const [fireworks, setFireworks] = useState([]);
  const heroRef = useRef(null);

  useEffect(() => {
    const COLORS = ["#ff4d4d", "#ffd700", "#ff69b4", "#7fffd4", "#ff8c00"];
    const id = setInterval(() => {
      setFireworks((fw) => [
        ...fw.slice(-8),
        {
          x: Math.random() * window.innerWidth,
          y: Math.random() * (window.innerHeight * 0.6),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          key: Date.now() + Math.random(),
        },
      ]);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  const handleClick = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const COLORS = ["#ffd700", "#ff4d4d", "#ff69b4", "#ffffff", "#ff8c00"];
    setFireworks((fw) => [
      ...fw.slice(-10),
      {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        key: Date.now(),
      },
    ]);
  };

  return (
    <section className="hero-section" ref={heroRef} onClick={handleClick}>
      {[300, 450, 600].map((size, i) => (
        <div
          key={i}
          className="hero-ring"
          style={{
            width: size,
            height: size,
            borderColor: `rgba(255,215,0,${0.06 - i * 0.015})`,
            animationDuration: `${20 + i * 8}s`,
          }}
        />
      ))}

      {[{ left: "5%", top: "15%" }, { right: "6%", top: "10%" }, { left: "12%", bottom: "20%" }, { right: "10%", bottom: "25%" }].map(
        (pos, i) => (
          <div
            key={i}
            className="hero-lantern"
            style={{ ...pos, animationDuration: `${3 + i * 0.5}s` }}
          >
            🏮
          </div>
        ),
      )}

      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {fireworks.map((fw) => (
          <Firework key={fw.key} x={fw.x} y={fw.y} color={fw.color} />
        ))}
      </div>

      <div className="container text-center" style={{ zIndex: 10, animation: "fadeInUp 1s ease both" }}>
        <div className="hero-badge">🎊 Chúc Mừng Năm Mới 2026</div>
        <div className="hero-subtitle">Tết Nguyên Đán</div>
        <h1 className="hero-title">
          <span className="shimmer-text">BÍNH</span>
          <br />
          <span className="text-red-hero">NGỌ</span>
          <span className="shimmer-text"> 2026</span>
        </h1>
        <p className="hero-desc mx-auto">
          Vạn sự như ý · Phúc lộc đầy nhà · Xuân về an khang thịnh vượng
          <br />
          <span style={{ fontSize: 13, opacity: 0.6 }}>(Click vào để bắn pháo hoa 🎆)</span>
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <button className="btn btn-tet-red px-5 py-3">🧧 Mua Quà Tết</button>
          <button className="btn btn-tet-outline px-5 py-3">Xem Bộ Sưu Tập</button>
        </div>
      </div>

      <div className="hero-fade-bottom" />
      <div className="scroll-indicator">
        <span>CUỘN XUỐNG</span>
        <span style={{ fontSize: 20 }}>↓</span>
      </div>
    </section>
  );
}

