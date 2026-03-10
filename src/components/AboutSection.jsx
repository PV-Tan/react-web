export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src="src/assets/anh-tet.jpg"
              className="img-fluid"
              style={{
                borderRadius: 28,
                maxWidth: "520px",
                width: "100%",
              }}
            />
          </div>

          <div className="col-12 col-lg-6 pl-lg-5">
            <p className="about-label">🏮 Về Chúng Tôi</p>
            <h2 className="about-title">
              Mang Hương Xuân
              <br />
              <span className="shimmer-text">Vào Mỗi Gia Đình</span>
            </h2>
            <p className="about-text">
              Chúng tôi tin rằng mỗi mùa Tết là dịp để gia đình sum vầy, để yêu thương được trao đi
              và nhận lại. Sản phẩm được chọn lọc kỹ lưỡng, mang đậm bản sắc văn hóa Việt.
            </p>
            <p className="about-text">
              Từ hoa đào, hoa mai đến bánh chưng truyền thống — tất cả đều được chuẩn bị với trọn
              vẹn tấm lòng.
            </p>

            <div className="row mt-4">
              {[["500+", "Sản phẩm"], ["10K+", "Khách hàng"], ["5★", "Đánh giá"]].map(
                ([v, l]) => (
                  <div key={l} className="col-auto">
                    <div className="stat-num">{v}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}