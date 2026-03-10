import Divider from "./common/Divider";
import { TESTIMONIALS } from "../data/homeData";

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <p className="section-label text-center">💬 Khách Hàng Nói Gì</p>
        <h2 className="section-title text-center mb-3">Cảm Nhận Xuân</h2>
        <Divider icon="🌸" />

        <div className="row justify-content-center">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="col-12 col-md-4 mb-4">
              <div className="testimonial-card">
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="d-flex align-items-center" style={{ gap: 12 }}>
                  <div className="testimonial-avatar">👤</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

