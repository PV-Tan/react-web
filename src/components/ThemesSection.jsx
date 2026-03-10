import Divider from "./common/Divider";
import imgHoaTuoi from "../assets/hoatuoingayxuan.jpg";      
import imgQuaTang from "../assets/quatangtinhte.jpg";        
import imgDacSan from "../assets/dacsanvungmien.jpeg";      
import imgDoanhNghiep from "../assets/gioquadoanhnghiep.jpg"; 

const THEMES = [
  {
    icon: imgHoaTuoi,
    title: "Hoa tươi ngày Xuân",
    desc: "Hoa đào, hoa mai và nhiều loại hoa cắm bình cho không gian ngày thường vẫn rực rỡ.",
    tag: "Hoa tươi",
  },
  {
    icon: imgQuaTang,
    title: "Quà tặng tinh tế",
    desc: "Hộp quà chỉn chu, phù hợp tặng người thân, đối tác sau Tết và các dịp đặc biệt.",
    tag: "Quà tặng",
  },
  {
    icon: imgDacSan,
    title: "Đặc sản vùng miền",
    desc: "Trà, mứt, bánh và đặc sản chọn lọc từ nhiều vùng trên cả nước.",
    tag: "Đặc sản",
  },
  {
    icon: imgDoanhNghiep,
    title: "Gia Đình Đoàn Viên",
    desc: "Những giỏ quà Tết ấm áp dành cho gia đình, mang hương vị sum vầy và hạnh phúc ngày Xuân.",
    tag: "Gia đình",
  },
];

export default function CountdownSection() {
  return (
    <section className="themes-section">
      <div className="container-fluid text-center px-lg-5">
        <p className="section-label">Bộ Sưu Tập Theo Chủ Đề</p>
        <h2 className="section-title mb-3">Khám Phá Mùa Xuân Mới</h2>
        <Divider icon="🧧" />

        <div className="row mt-4">
          {THEMES.map((t) => (
            <div key={t.title} className="col-12 col-md-6 col-lg-3 mb-4 d-flex">
              <div
                className="themes-box"
                style={{
                  padding: "20px 20px",
                  minWidth: "auto",
                  cursor: "pointer",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                <div style={{ marginBottom: 14 }}>
                  <img
                   src={t.icon}
                   alt={t.title}
                   style={{
                   width: "100%",
                   height: 180,
                   objectFit: "cover",
                   borderRadius: 16,
                   boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                   }}
                />
                </div>
                <div style={{ fontWeight: 600, marginBottom: 6 }}>{t.title}</div>
                
                <p
                 className="mb-2"
                 style={{
                 fontSize: 14,
                 opacity: 0.85,
                 minHeight: 72
                 }}
                 >
                 {t.desc}
                </p>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 12,
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: "rgba(204,0,0,0.08)",
                    color: "#cc0000",
                  }}
                >
                  {t.tag} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}