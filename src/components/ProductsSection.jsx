import Divider from "./common/Divider";
import { PRODUCTS } from "../data/homeData";

export default function ProductsSection() {
  return (
    <section className="products-section">

      <div className="container-fluid products-container">

        <p className="section-label text-center">🛍️ Sản Phẩm</p>

        <h2 className="section-title text-center mb-3">
          Bộ Sưu Tập Tết 2026
        </h2>

        <Divider icon="✨" />

        <div className="row justify-content-center flex-nowrap">

          {PRODUCTS.map((p, i) => (

            <div key={i} className="col mb-4 d-flex">

              <div className="product-card w-100">

                <span
                  className="product-badge"
                  style={{ background: p.bc }}
                >
                  {p.badge}
                </span>

                <div
                  className="product-emoji float-anim"
                  style={{
                    animationDelay: `${i * 0.3}s`,
                    marginBottom: 20
                  }}
                >
                  <img
                    src={p.icon}
                    alt={p.name}
                    style={{
                      width: "100%",
                      maxWidth: 180,
                      height: "auto",
                      borderRadius: 20
                    }}
                  />
                </div>

                <div className="product-name">
                  {p.name}
                </div>

                <div className="product-price">
                  {p.price}
                </div>

                <button
                  className="btn btn-tet-red btn-block"
                  style={{
                    fontSize: 14,
                    padding: "10px"
                  }}
                >
                  Thêm Vào Giỏ
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}