import { PETAL_CFG } from "../../data/homeData";

export default function FallingPetals() {
  return <>{PETAL_CFG.map((cfg, i) => <div key={i} className="petal" style={cfg}>🌸</div>)}</>;
}

