
import imgGiaoHangNhanh from "../assets/giaohangnhanh.jpg";
import imgSanPhamChonLoc from "../assets/sanphamchonloc.jpg";
import imgThietKeQuaTheoNganSach from "../assets/thietkequatheongansach.jpg";
import imgDongHanhCungDoanhNghiep from "../assets/donghanhcungdoanhnghiep.jpg";
import imgHoaDaoIcon from "../assets/hoadao.jpeg";
import imgHoaMaiIcon from "../assets/hoamaivang.jpeg";
import imgPhaoHoaIcon from "../assets/phaohoa.jpeg";
import imgHopQuaTetIcon from "../assets/hopquatet.jpeg";
import imgTraXuanIcon from "../assets/traxuan.jpeg";
import imgDenLongIcon from "../assets/denlogn.jpeg";
import logoFb from "../assets/logofb.jpg";
import logoIg from "../assets/logoig.jpg";
import logoZalo from "../assets/logozalo.jpg";
import logoYt from "../assets/logoyt.jpg";

export const NAV_ITEMS = ["Trang Chủ", "Giới Thiệu", "Sản Phẩm", "Ưu Đãi Tết", "Liên Hệ"];

export const FEATURES = [
  {
    icon: imgGiaoHangNhanh,
    title: "Giao Hàng Nhanh Toàn Quốc",
    desc: "Đóng gói cẩn thận, giao tận tay khách trong thời gian sớm nhất, kể cả mùa cao điểm.",
    color: "#ff4d4d",
    bg: "rgba(255,77,77,0.10)",
  },
  {
    icon: imgSanPhamChonLoc,
    title: "Sản Phẩm Chọn Lọc Kỹ",
    desc: "Nguồn gốc rõ ràng, hương vị chuẩn Việt, phù hợp làm quà biếu và sử dụng trong gia đình.",
    color: "#ffb347",
    bg: "rgba(255,179,71,0.10)",
  },
  {
    icon: imgThietKeQuaTheoNganSach,
    title: "Thiết Kế Quà Theo Ngân Sách",
    desc: "Tư vấn phối quà, gói quà theo tông màu và ngân sách riêng của từng khách hàng.",
    color: "#4caf50",
    bg: "rgba(76,175,80,0.10)",
  },
  {
    icon: imgDongHanhCungDoanhNghiep,
    title: "Đồng Hành Cùng Doanh Nghiệp",
    desc: "Nhận thiết kế giỏ quà số lượng lớn, xuất hoá đơn đầy đủ, giao đến tận tay đối tác.",
    color: "#c8a96e",
    bg: "rgba(200,169,110,0.10)",
  },
];

export const PRODUCTS = [
  { icon: imgHoaDaoIcon, name: "Hoa Đào", price: "150.000₫", badge: "Bán chạy", bc: "#cc0000" },
  { icon: imgHoaMaiIcon, name: "Hoa Mai Vàng", price: "200.000₫", badge: "Mới", bc: "#c8a96e" },
  { icon: imgPhaoHoaIcon, name: "Pháo Hoa Giấy", price: "50.000₫", badge: "Hot", bc: "#cc0000" },
  { icon: imgHopQuaTetIcon, name: "Hộp Quà Tết", price: "350.000₫", badge: "Đặc Biệt", bc: "#c8a96e" },
  { icon: imgTraXuanIcon, name: "Trà Xuân", price: "120.000₫", badge: "Bán chạy", bc: "#cc0000" },
  { icon: imgDenLongIcon, name: "Đèn Lồng Đỏ", price: "80.000₫", badge: "Mới", bc: "#c8a96e" },
];

export const TESTIMONIALS = [
  {
    name: "Nguyễn Anh Tuấn",
    role: "Giáo viên, TP.HCM",
    quote: "Hoa đào rất tươi và đẹp, giao hàng đúng hẹn. Tết năm nay nhà mình thật rực rỡ!",
  },
  {
    name: "Kim Quốc Công",
    role: "Kỹ sư, Hà Nội",
    quote: "Hộp quà Tết thiết kế sang trọng, người nhận rất thích. Sẽ mua lại cho năm tới.",
  },
  {
    name: "Phạm Văn Tân",
    role: "Kinh doanh, Đà Nẵng",
    quote: "Dịch vụ tuyệt vời, đóng gói cẩn thận. Mứt Tết rất ngon và truyền thống.",
  },
];

export const FOOTER_COLS = [
  { title: "Danh Mục", links: ["Hoa Xuân", "Quà Tết", "Trang Trí", "Đặc Sản"] },
  { title: "Hỗ Trợ", links: ["Chính Sách", "Giao Hàng", "Đổi Trả", "FAQ"] },
  { title: "Kết Nối", links: ["Facebook", "Instagram", "Zalo", "YouTube"] },
];

export const SOCIAL_ICONS = {
  Facebook: logoFb,
  Instagram: logoIg,
  Zalo: logoZalo,
  YouTube: logoYt,
};

export const PETAL_CFG = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 5.8) % 100}%`,
  animationDuration: `${5 + ((i * 1.3) % 6)}s`,
  animationDelay: `${(i * 0.7) % 5}s`,
  fontSize: `${14 + (i % 3) * 6}px`,
  opacity: 0.7 + (i % 3) * 0.1,
}));