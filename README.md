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

[🚀 Xem Demo](#) · [📚 Kho câu hỏi](#-kho-câu-hỏi--183-câu) · [🐛 Báo lỗi](https://github.com/trungKoiKa/vinuni-ai-prep/issues) · [✨ Đề xuất tính năng](https://github.com/trungKoiKa/vinuni-ai-prep/issues)

</div>

---

## 📖 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng](#-tính-năng)
- [Kho câu hỏi — 183 câu](#-kho-câu-hỏi--183-câu)
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

## 📝 Kho câu hỏi — 183 câu

| Module | Chủ đề | Số câu | Mức độ |
|:------:|:-------|:------:|:------:|
| **A** | Toán & Tư duy định lượng | 12 | Dễ → Khó |
| **B** | Lập trình & Xử lý dữ liệu (Python, NumPy, Pandas) | 56 | Dễ → Khó |
| **C** | Kiến thức AI & Sản phẩm AI (ML, LLM, RAG, LoRA...) | 64 | Dễ → Khó |
| **D** | Logic, Đạo đức & Hành vi AI | 51 | Dễ → Khó |
| **Tổng** | | **183** | |

### Các chủ đề nổi bật trong kho câu hỏi

<details>
<summary><strong>Module A — Toán & Tư duy định lượng</strong></summary>

- Đại số tuyến tính: Dot product, nhân ma trận, Eigenvalues, SVD
- Xác suất & Thống kê: Định lý Bayes, Phân bố Nhị thức, CLT
- Giải tích: Đạo hàm, cực trị, gradient
- Cosine Similarity, Khoảng cách trong không gian vector

</details>

<details>
<summary><strong>Module B — Lập trình & Xử lý dữ liệu</strong></summary>

- **Python Core**: List/Tuple/Dict, Lambda, Generator, Zip, Enumerate, Slicing
- **NumPy**: Broadcasting, Reshape, Argmax, Linspace, Dot product, vstack
- **Pandas**: Filtering, Sorting, GroupBy, Merge/Concat, fillna/dropna, pivot_table, loc/iloc
- **Thuật toán**: QuickSort đệ quy, Binary Search, Big O Notation
- **Best Practices**: Memory optimization, Exception handling, Reproducibility (random seed)

</details>

<details>
<summary><strong>Module C — Kiến thức AI & Sản phẩm AI</strong></summary>

- **ML Fundamentals**: Supervised/Unsupervised/RL, KNN, Naive Bayes, Overfitting/Underfitting
- **Evaluation**: Precision, Recall, F1, Confusion Matrix, Accuracy Trap, MAE vs MSE
- **Deep Learning**: Activation functions (ReLU, Sigmoid, Softmax), Dropout, Epochs, Batch Size
- **Transformer & LLM**: Self-Attention, Q/K/V, Temperature, Top-K, Top-P, Context Window
- **RAG Architecture**: Vector DB, Embedding, Hallucination, Retrieval metrics
- **Advanced**: LoRA/PEFT, Quantization, RLHF, BLEU/ROUGE, Tokenization, YOLO, CNN

</details>

<details>
<summary><strong>Module D — Logic, Đạo đức & Hành vi AI</strong></summary>

- **Logic Mệnh đề**: Kéo theo, Phản đảo, De Morgan, Bảng chân trị, Modus Tollens
- **IQ Patterns**: Dãy số, Ma trận hình học, Puzzle tối ưu
- **AI Ethics**: Bias/Fairness, Privacy/PII, GDPR, Algorithmic Bias, Deepfake
- **AI Safety**: Adversarial Attack, Prompt Injection, Data Poisoning, Red Teaming
- **Governance**: Accountability, Responsible AI, XAI, Human-in-the-Loop, Guardrails
- **Tình huống thực tế**: Y tế, Tài chính, Xe tự lái, Tuyển dụng, Copyright

</details>

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

## 📁 Cấu trúc dự án

```
vinuni-ai-prep/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── charts/          # ModuleScoreChart, ScoreTrendChart (SVG thuần)
│   │   ├── exam/            # ExamTimer, SubmitConfirmModal
│   │   ├── layout/          # AppShell, TopBar, Sidebar, MobileNav
│   │   ├── question/        # QuestionCard, AnswerOption, ExplanationBox, QuestionNavigator
│   │   └── ui/              # Button, Card, Badge, Modal, Toast, ProgressBar, Skeleton
│   ├── context/
│   │   ├── ProgressContext.tsx  # Tiến độ học tập toàn app
│   │   └── ThemeContext.tsx     # Dark/Light mode
│   ├── data/
│   │   ├── modules.ts           # Metadata 4 module
│   │   ├── studyContent.ts      # Tài liệu học tập theo module
│   │   └── questions/
│   │       ├── moduleA.ts       # 12 câu hỏi Toán
│   │       ├── moduleB.ts       # 56 câu hỏi Lập trình
│   │       ├── moduleC.ts       # 64 câu hỏi AI
│   │       ├── moduleD.ts       # 51 câu hỏi Logic & Ethics
│   │       └── index.ts         # Export tổng hợp allQuestions[]
│   ├── hooks/
│   │   ├── useTimer.ts      # Timestamp-based countdown (chống tab throttle)
│   │   └── useToast.ts      # Notification system
│   ├── lib/
│   │   ├── scoring.ts       # Tính điểm, phân tích kết quả
│   │   ├── shuffle.ts       # Fisher-Yates shuffle (bảo toàn correctAnswer index)
│   │   └── storage.ts       # LocalStorage wrapper với JSON safety
│   ├── pages/
│   │   ├── Dashboard.tsx        # Trang tổng quan
│   │   ├── ModuleList.tsx       # Danh sách module
│   │   ├── ModuleStudyContent.tsx # Tài liệu học theo module
│   │   ├── Practice.tsx         # Luyện tập câu hỏi
│   │   ├── MockTest.tsx         # Thi mô phỏng 90 phút
│   │   ├── Result.tsx           # Kết quả thi
│   │   ├── ReviewMistakes.tsx   # Ôn lại câu sai
│   │   └── Settings.tsx         # Cài đặt
│   ├── types/
│   │   ├── question.ts      # Interface: Question, ModuleId, ModuleMetadata
│   │   └── progress.ts      # Interface: UserProgress, MockTestResult, UserSettings
│   ├── router.tsx           # React Router config
│   ├── main.tsx             # Entry point
│   └── index.css            # CSS Variables (light/dark tokens)
├── index.html               # Anti-flash dark mode script + Google Fonts
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

---

## 🚀 Cài đặt & Chạy local

### Yêu cầu hệ thống
- **Node.js** >= 18.x
- **npm** >= 9.x (hoặc pnpm/yarn)

### Các bước cài đặt

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

### Các lệnh hữu ích

```bash
npm run dev        # Chạy dev server với HMR
npm run build      # Build production bundle
npm run preview    # Preview bản build production
npm run lint       # Chạy OxLint kiểm tra code
```

---

## 📝 Hướng dẫn thêm câu hỏi mới

Kho câu hỏi được lưu dưới dạng **TypeScript thuần** tại `src/data/questions/`. Không cần sửa bất kỳ file UI nào khi thêm câu hỏi.

### Schema của một câu hỏi

```typescript
interface Question {
  id: string;              // Duy nhất, ví dụ: "modA_13"
  module: "A" | "B" | "C" | "D";
  moduleName: string;      // Tên đầy đủ module
  topic: string;           // Chủ đề cụ thể
  difficulty: "Dễ" | "Trung bình" | "Khó";
  question: string;        // Đề bài (hỗ trợ code block ```python)
  options: string[];       // Đúng 4 đáp án [A, B, C, D]
  correctAnswer: number;   // Index đáp án đúng: 0=A, 1=B, 2=C, 3=D
  explanation: string;     // Lời giải chi tiết
  tags: string[];          // Nhãn phân loại
}
```

### Ví dụ thêm câu hỏi vào Module A

Mở file [`src/data/questions/moduleA.ts`](src/data/questions/moduleA.ts) và thêm object vào cuối mảng:

```typescript
{
  id: "modA_13",
  module: "A",
  moduleName: "Toán & Tư duy định lượng",
  topic: "Tích phân",
  difficulty: "Dễ",
  question: "Tích phân xác định ∫₀¹ 3x² dx có giá trị bằng bao nhiêu?",
  options: ["1.0", "3.0", "0.5", "2.0"],
  correctAnswer: 0,
  explanation: "Nguyên hàm của 3x² là x³. Thế: 1³ - 0³ = 1.0.",
  tags: ["Tích phân", "Giải tích"]
}
```

### Câu hỏi có code Python

```typescript
{
  id: "modB_57",
  module: "B",
  moduleName: "Lập trình & Xử lý dữ liệu",
  topic: "Python Core",
  difficulty: "Dễ",
  question: "Đoạn code sau in ra gì?\n\n```python\nprint([x for x in range(5) if x % 2 == 0])\n```",
  options: ["[0, 2, 4]", "[1, 3]", "[0, 1, 2, 3, 4]", "[]"],
  correctAnswer: 0,
  explanation: "Lọc các số chẵn trong range(5): [0, 2, 4].",
  tags: ["python", "list_comprehension"]
}
```

> **Lưu ý:** Sau khi thêm câu hỏi, cập nhật `totalQuestions` trong [`src/data/modules.ts`](src/data/modules.ts) để số liệu hiển thị trên Dashboard chính xác.

---

## 🏗 Kiến trúc & Design Decisions

### ⏱ Timer chống lỗi tab ẩn
`useTimer.ts` sử dụng **timestamp tuyệt đối** thay vì `setInterval` thuần:

```typescript
// Sai cách: setInterval bị throttle khi tab ở background
setInterval(() => setTime(t => t - 1), 1000);

// Đúng cách: Tính thời gian còn lại dựa trên timestamp
const endTime = Date.now() + durationMs;
const remaining = Math.max(0, endTime - Date.now());
```

### 🔀 Shuffle bảo toàn đáp án
`shuffle.ts` implement Fisher-Yates shuffle và **map lại correctAnswer index** sau khi xáo trộn thứ tự 4 đáp án:

```typescript
// Lưu đáp án đúng trước khi shuffle
const correctText = question.options[question.correctAnswer];
const shuffledOptions = fisherYates([...question.options]);
// Tìm lại vị trí mới của đáp án đúng
const newCorrectIndex = shuffledOptions.indexOf(correctText);
```

### 🎨 Dark Mode không flash
`index.html` chứa inline script đọc LocalStorage **trước khi React render**, áp class `dark` lên `<html>` ngay lập tức — tránh hiện tượng flash trắng khi reload trang ở dark mode.

### 📦 Lưu trữ LocalStorage
Tất cả dữ liệu tiến độ (kết quả thi, câu sai, cài đặt) được lưu dưới key có prefix `vinuni_`, với JSON safety wrapper tránh crash khi dữ liệu bị corrupt.

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

Made with ❤️ by **trungKoiKa**

⭐ Nếu project hữu ích, hãy để lại một Star để ủng hộ nhé!

</div>
