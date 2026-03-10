export default function Firework({ x, y, color }) {
  const particles = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * 2 * Math.PI;
    const d = 60 + Math.random() * 40;
    return { dx: Math.cos(a) * d, dy: Math.sin(a) * d };
  });

  return (
    <div style={{ position: "absolute", left: x, top: y, pointerEvents: "none" }}>
      {particles.map((p, i) => (
        <div
          key={i}
          className="spark"
          style={{
            background: color,
            boxShadow: `0 0 8px ${color}`,
            "--dx": `${p.dx}px`,
            "--dy": `${p.dy}px`,
          }}
        />
      ))}
    </div>
  );
}

