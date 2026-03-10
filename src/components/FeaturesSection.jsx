import Divider from "./common/Divider";
import { FEATURES } from "../data/homeData";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container-fluid px-lg-5">
        <p className="section-label text-center">
          Vì Sao Khách Hàng Tin Chọn
        </p>

        <h2 className="section-title text-center mb-3">
          Lý Do Chọn Xuân Bình An
        </h2>

        <Divider icon="🧧" />

        <div className="row">
          {FEATURES.map((f, i) => (
            <div key={i} className="col-12 col-md-6 col-xl-3 mb-4">
              
              <div
                className="feature-card"
                style={{
                  background: f.bg,
                  border: `1px solid ${f.color}30`
                }}
              >

                <img
                  src={f.icon}
                  alt={f.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "16px",
                    marginBottom: "16px"
                  }}
                />

                <div className="feature-title">
                  {f.title}
                </div>

                <p className="feature-desc">
                  {f.desc}
                </p>

                <div
                  className="feature-more"
                  style={{ color: f.color }}
                >
                  Khám phá →
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}