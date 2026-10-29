# 🎓 VinUni AI Prep — Ôn thi Vòng Đánh Giá Năng Lực AI Thực Chiến

<div align="center">

![VinUni AI Prep](https://img.shields.io/badge/VinUni-AI%20Thực%20Chiến-B4532A?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

**Web app ôn thi trắc nghiệm tương tác dành cho kỳ thi đầu vào Chương trình AI Thực chiến — Vingroup / VinUni.**
Frontend-only · Không backend · Không đăng nhập · Lưu trữ trên LocalStorage

[📚 Kho câu hỏi](#-kho-câu-hỏi--411-câu) · [🐛 Báo lỗi](https://github.com/trungKoiKa/vinuni-ai-prep/issues) · [✨ Đề xuất tính năng](https://github.com/trungKoiKa/vinuni-ai-prep/issues)

</div>

---

## 📖 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng](#-tính-năng)
- [Kho câu hỏi — 411 câu](#-kho-câu-hỏi--411-câu)
- [Tech Stack](#-tech-stack)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Cài đặt & Chạy local](#-cài-đặt--chạy-local)
- [Hướng dẫn thêm câu hỏi mới](#-hướng-dẫn-thêm-câu-hỏi-mới)
- [Lưu trữ dữ liệu](#-lưu-trữ-dữ-liệu)
- [Disclaimer](#️-disclaimer)

---

## 🎯 Giới thiệu

**VinUni AI Prep** là ứng dụng web học tập thuần frontend, giúp học viên ôn tập cho kỳ thi đánh giá năng lực đầu vào của **Chương trình AI Thực chiến — Vingroup / VinUni**.

Ứng dụng mô phỏng trải nghiệm thi thật: luyện tập theo từng module, làm đề mô phỏng có đếm ngược, rồi xem lại và ôn các câu trả lời sai. Mọi dữ liệu tiến độ nằm trong **LocalStorage** của trình duyệt — không cần tài khoản.

---

## ✨ Tính năng

### 🏠 Dashboard tổng quan
- Thống kê: số câu đã làm, câu sai cần ôn, câu đã ghi nhớ, số bài thi thử, điểm cao nhất, thời gian ôn
- Tiến độ từng module
- Biểu đồ xu hướng điểm các lần thi thử (SVG thuần)

### 📚 Luyện tập theo Module
- Chọn 1 trong 4 module hoặc tất cả; mỗi bài gồm 50 câu (Bài 1, Bài 2, …), các bài cộng lại phủ toàn bộ ngân hàng câu hỏi
- Chế độ **"50 câu chưa làm"**: ưu tiên câu chưa từng trả lời
- Tráo thứ tự câu hỏi (bật mặc định), tráo lại bất cứ lúc nào
- Hiện đáp án đúng/sai và lời giải ngay sau khi chọn (bật/tắt được)
- Đánh dấu (bookmark) câu hỏi
- Hiển thị công thức toán bằng **KaTeX** và khối code Python

### 🏆 Thi mô phỏng 90 phút
- **100 câu**, chia theo tỉ lệ module: A 30 · B 16 · C 41 · D 13; ưu tiên câu chưa làm, tráo thứ tự đáp án
- Đồng hồ đếm ngược theo mốc thời gian thật, không lệch khi chuyển tab
- Thông báo khi còn 10 phút và 5 phút, tự động nộp bài khi hết giờ
- **Làm tiếp bài đang dở**: tải lại trang hoặc đóng tab vẫn không mất bài; quay lại sẽ được hỏi *Tiếp tục* hay *Làm đề mới*. Đồng hồ vẫn chạy khi rời đi, như thi thật

### 📊 Kết quả
- Điểm số, số câu đúng / sai / bỏ trống, thời gian làm bài
- Xem lại từng câu: đáp án đã chọn, đáp án đúng và lời giải

### 🔁 Ôn lại câu sai
- Tổng hợp câu sai từ cả luyện tập và thi thử
- Tìm kiếm, lọc theo module, làm lại câu hỏi
- Đánh dấu "Đã nhớ" để loại khỏi danh sách

### 📖 Tóm tắt kiến thức
- Tổng quan lý thuyết từng module
- Công thức cốt lõi, ví dụ code Python, lỗi sai thường gặp

### ⚙️ Cài đặt
- Giao diện sáng / tối (không nháy màn hình khi tải lại)
- Bật/tắt hiện lời giải ngay, chỉnh thời lượng đề thi thử
- Xóa toàn bộ tiến độ

---

## 📝 Kho câu hỏi — 411 câu

| Module | Chủ đề | Số câu | Mức độ |
|:------:|:-------|:------:|:------:|
| **A** | Toán & Tư duy định lượng (Ma trận, SVD, PCA, LDA, Tối ưu lồi, KKT, Duality, SVM Dual...) | 123 | Dễ → Khó |
| **B** | Lập trình & Xử lý dữ liệu (Python, NumPy, Pandas, BoW, Preprocessing, Scikit-Learn APIs) | 67 | Dễ → Khó |
| **C** | Kiến thức AI & Sản phẩm AI (ML, Recommender Systems, SVM/Kernel, KNN, K-Means, Naive Bayes, MLP, RAG, Transformer...) | 170 | Dễ → Khó |
| **D** | Logic, Đạo đức & Hành vi | 51 | Dễ → Khó |
| **Tổng** | | **411** | |

---

## 🛠 Tech Stack

| Thành phần | Công nghệ |
|:-----------|:----------|
| **UI Framework** | React 19 + TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 + CSS variables (theme sáng/tối) |
| **Components** | shadcn/ui (Radix UI), Sonner (toast) |
| **Routing** | React Router v7 |
| **Công thức toán** | KaTeX |
| **Icons** | Lucide React |
| **State** | React Context + custom hooks |
| **Storage** | LocalStorage (JSON) |
| **Charts** | SVG thuần |
| **Linting** | OxLint |
| **Deploy** | Vercel (SPA rewrite trong `vercel.json`) |

---

## 🗂 Cấu trúc dự án

```
src/
├── components/
│   ├── ui/          # Component shadcn (button, card, alert-dialog, sheet, ...) + MathText, EmptyState
│   ├── layout/      # AppShell, TopBar, Sidebar, MobileNav, PageHeader, FilterBar
│   ├── question/    # QuestionCard, AnswerOption, QuestionNavigator, QuestionPager, ExplanationBox
│   ├── exam/        # ExamTimer, SubmitConfirmModal
│   └── charts/      # ScoreTrendChart
├── pages/           # Dashboard, ModuleList, ModuleStudyContent, Practice, MockTest, Result, ReviewMistakes, Settings
├── context/         # ProgressContext (tiến độ), ThemeContext (sáng/tối)
├── data/
│   ├── questions/   # moduleA.ts … moduleD.ts — ngân hàng câu hỏi
│   ├── modules.ts   # Thông tin 4 module
│   └── studyContent.ts
├── lib/             # storage, sessionStore (bài đang dở), shuffle, scoring
├── hooks/           # useTimer
└── index.css        # Theme: biến màu sáng/tối cho Tailwind + shadcn
```

Component shadcn được cấu hình trong `components.json`; thêm component mới bằng `npx shadcn@latest add <tên>`.

---

## 🚀 Cài đặt & Chạy local

Yêu cầu Node.js 20.19+ (khuyến nghị Node 22 trở lên).

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

| Lệnh | Mô tả |
|:-----|:------|
| `npm run dev` | Chạy dev server |
| `npm run build` | Kiểm tra kiểu (tsc) và build production vào `dist/` |
| `npm run preview` | Xem thử bản build |
| `npm run lint` | Chạy OxLint |

---

## ➕ Hướng dẫn thêm câu hỏi mới

Thêm một object vào mảng của module tương ứng trong `src/data/questions/moduleX.ts`:

```ts
{
  id: "modD_52",                 // duy nhất trong toàn bộ ngân hàng
  module: "D",                   // "A" | "B" | "C" | "D"
  moduleName: "Logic, Đạo đức & Hành vi",
  topic: "Tư duy Logic suy luận",
  difficulty: "Trung bình",      // "Dễ" | "Trung bình" | "Khó"
  question: "Nội dung câu hỏi…", // hỗ trợ công thức toán và khối ```python
  options: ["A", "B", "C", "D"], // đúng 4 đáp án, không trùng nhau
  correctAnswer: 1,              // chỉ số đáp án đúng (0–3)
  explanation: "Lời giải…",
  tags: ["Logic suy luận"],
}
```

Lưu ý:
- **Không đổi `id` của câu đã có** — tiến độ, câu sai và bài đang dở của người dùng được lưu theo `id`.
- Nếu sửa nội dung đáp án của câu đã có, bài thi đang dở chứa câu đó sẽ không khôi phục được (người dùng sẽ làm đề mới).
- Sau khi thêm, chạy `npm run build` để kiểm tra kiểu dữ liệu.

---

## 💾 Lưu trữ dữ liệu

Toàn bộ dữ liệu nằm trong LocalStorage của trình duyệt:

| Khóa | Nội dung |
|:-----|:---------|
| `vinuni_ai_progress_v1` | Câu đã làm, câu sai, bookmark, câu đã nhớ, kết quả thi thử, cài đặt |
| `vinuni_ai_mock_session_v2` | Bài thi thử đang làm dở |
| `vinuni_ai_practice_sessions_v2` | Bài luyện tập đang dở của từng module |

Dữ liệu chỉ có trên trình duyệt và thiết bị đang dùng: đổi máy, dùng tab ẩn danh hoặc xóa dữ liệu trình duyệt sẽ mất tiến độ. Nút **Xóa dữ liệu** trong Cài đặt xóa cả ba khóa.

---

## ⚠️ Disclaimer

> **Nội dung dùng để luyện tập, không phải đề thi chính thức.**
>
> Kho câu hỏi trong ứng dụng này được tổng hợp và biên soạn nhằm mục đích ôn tập, không đại diện cho đề thi thật của Chương trình AI Thực chiến Vingroup / VinUni.

---

<div align="center">

Made with ❤️ by **trungKoiKa**

</div>
