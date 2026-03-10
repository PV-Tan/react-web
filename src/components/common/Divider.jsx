export default function Divider({ icon = "🌸" }) {
  return (
    <div className="tet-divider d-flex align-items-center justify-content-center">
      <div className="tet-divider-line" />
      <span style={{ color: "#ffd700", fontSize: 20, margin: "0 18px" }}>{icon}</span>
      <div className="tet-divider-line right" />
    </div>
  );
}

