export default function CtaSection() {
  return (
    <section className="cta-section">
      <div className="cta-pattern" />
      <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
        <div className="float-anim d-inline-block mb-4" style={{ fontSize: 64 }}>
          🧨
        </div>
        <h2 className="cta-title mb-3">
          Ưu Đãi Đặc Biệt
          <br />
          <span className="cta-gold">Giảm Đến 50% Dịp Tết</span>
        </h2>
        <p className="cta-desc mx-auto mb-5">
          Đặt hàng ngay hôm nay để nhận ưu đãi độc quyền. Giao hàng tận nơi trước Tết!
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <button className="btn btn-tet-gold px-5 py-3">🛒 Mua Ngay</button>
          <button
            className="btn btn-tet-outline px-5 py-3"
            style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}
          >
            Xem Khuyến Mãi
          </button>
        </div>
      </div>
    </section>
  );
}

