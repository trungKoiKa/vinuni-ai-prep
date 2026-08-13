# 🎓 VinUni AI Prep — Ôn thi Vòng Đánh Giá Năng Lực AI Thực Chiến

<div align="center">

![VinUni AI Prep](https://img.shields.io/badge/VinUni-AI%20Thực%20Chiến-4F5FF0?style=for-the-badge&logo=graduation-cap&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Web app ôn thi trắc nghiệm tương tác dành cho kỳ thi đầu vào Chương trình AI Thực chiến — Vingroup / VinUni.**  
Frontend-only · Không backend · Không đăng nhập · Lưu trữ hoàn toàn trên LocalStorage

[🚀 Xem Demo](https://github.com/trungKoiKa/vinuni-ai-prep) · [📚 Kho câu hỏi](#-kho-câu-hỏi--221-câu) · [🐛 Báo lỗi](https://github.com/trungKoiKa/vinuni-ai-prep/issues) · [✨ Đề xuất tính năng](https://github.com/trungKoiKa/vinuni-ai-prep/issues)

</div>

---

## 📖 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng](#-tính-năng)
- [Kho câu hỏi — 221 câu](#-kho-câu-hỏi--221-câu)
- [Tech Stack](#-tech-stack)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Cài đặt & Chạy local](#-cài-đặt--chạy-local)
- [Hướng dẫn thêm câu hỏi mới](#-hướng-dẫn-thêm-câu-hỏi-mới)
- [Kiến trúc & Design Decisions](#-kiến-trúc--design-decisions)
- [Disclaimer](#️-disclaimer)

---

## 🎯 Giới thiệu

**VinUni AI Prep** là một ứng dụng web học tập thuần frontend, được thiết kế để giúp học viên ôn tập hiệu quả cho kỳ thi đánh giá năng lực đầu vào của **Chương trình AI Thực chiến — Vingroup / VinUni**.

Ứng dụng mô phỏng toàn bộ trải nghiệm thi thật: từ luyện tập từng module chuyên đề, làm đề thi mô phỏng 90 phút có đếm ngược, cho đến xem lại và phân tích các câu trả lời sai. Mọi dữ liệu tiến độ được lưu trong **LocalStorage** của trình duyệt — không cần tài khoản, không cần kết nối internet sau khi tải.

---

## ✨ Tính năng

### 🏠 Dashboard tổng quan
- Thống kê tiến độ học tập theo từng module
- Biểu đồ xu hướng điểm số qua các lần thi (SVG thuần)
- Nhanh chóng vào luyện tập hoặc bắt đầu đề thi mô phỏng

### 📚 Luyện tập theo Module
- Ôn tập riêng lẻ 4 module chuyên biệt
- Hiển thị giải thích chi tiết ngay sau mỗi câu trả lời
- Hỗ trợ câu hỏi có **code block Python** với syntax highlighting
- Đánh dấu câu hỏi yêu thích / bookmark

### 🏆 Thi mô phỏng 90 phút
- 40 câu ngẫu nhiên từ toàn bộ ngân hàng câu hỏi (shuffle đáp án)
- Đồng hồ đếm ngược chống lỗi khi chuyển tab (timestamp-based timer)
- Cảnh báo tự động khi còn 10 phút và 5 phút
- Tự động nộp bài khi hết giờ
- Cảnh báo rời trang (`beforeunload`) tránh mất bài thi

### 📊 Kết quả & Phân tích
- Vòng tròn điểm số trực quan (hero score circle)
- Phân tích điểm theo từng module
- Xem lại chi tiết từng câu đúng/sai kèm giải thích

### 🔁 Ôn lại câu sai
- Tổng hợp tất cả câu trả lời sai từ các lần thi
- Lọc theo module, thử trả lời lại
- Đánh dấu câu "Đã nhớ" để loại khỏi danh sách ôn tập

### 📖 Tài liệu học tập
- Tóm tắt kiến thức lý thuyết theo từng module
- Công thức toán, mẫu code Python, mẹo ghi nhớ

### ⚙️ Cài đặt cá nhân
- **Dark / Light mode** (không flash khi reload nhờ anti-flash script)
- Reset toàn bộ dữ liệu tiến độ
- Cài đặt timer và hiển thị

---

## 📝 Kho câu hỏi — 221 câu

| Module | Chủ đề | Số câu | Mức độ |
|:------:|:-------|:------:|:------:|
| **A** | Toán & Tư duy định lượng (Ma trận, Định thức, Gradient, Đạo hàm, O-notation...) | 50 | Dễ → Khó |
| **B** | Lập trình & Xử lý dữ liệu (Python, NumPy, Pandas) | 56 | Dễ → Khó |
| **C** | Kiến thức AI & Sản phẩm AI (ML, LLM, RAG, LoRA...) | 64 | Dễ → Khó |
| **D** | Logic, Đạo đức & Hành vi AI | 51 | Dễ → Khó |
| **Tổng** | | **221** | |

---

## 🛠 Tech Stack

| Thành phần | Công nghệ | Lý do chọn |
|:-----------|:----------|:-----------|
| **UI Framework** | React 19 + TypeScript (strict) | Type safety, component reuse |
| **Build Tool** | Vite 8 | HMR nhanh, bundle tối ưu |
| **Styling** | Tailwind CSS v3 + CSS Custom Variables | Dark mode linh hoạt, design tokens |
| **Routing** | React Router v7 | SPA navigation |
| **Icons** | Lucide React | Lightweight, consistent |
| **State** | React Context + Custom Hooks | Không cần Redux cho app quy mô này |
| **Storage** | LocalStorage (JSON) | Zero backend, offline-first |
| **Charts** | Pure SVG | Không dependency ngoài |
| **Linting** | OxLint | Nhanh gấp 50x ESLint |

---

## 🚀 Cài đặt & Chạy local

```bash
# 1. Clone repository
git clone https://github.com/trungKoiKa/vinuni-ai-prep.git
cd vinuni-ai-prep

# 2. Cài dependencies
npm install

# 3. Chạy development server
npm run dev
```

Mở trình duyệt tại **http://localhost:5173**

---

## ⚠️ Disclaimer

> **Nội dung dùng để luyện tập, không phải đề thi chính thức.**
>
> Kho câu hỏi trong ứng dụng này được tổng hợp và biên soạn nhằm mục đích ôn tập, không đại diện cho đề thi thật của Chương trình AI Thực chiến Vingroup / VinUni.

---

## 📄 License

Dự án này được phân phối theo giấy phép **MIT**. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

<div align="center">

Made with ❤️ by **NO0ne**

</div>
