import type { ModuleId } from "../types/question";

export interface StudyTopic {
  title: string;
  summary: string;
  keyFormulas?: string[];
  codeExample?: string;
  commonPitfalls?: string[];
}

export interface ModuleStudyGuide {
  moduleId: ModuleId;
  title: string;
  overview: string;
  topics: StudyTopic[];
}

export const studyGuides: Record<ModuleId, ModuleStudyGuide> = {
  A: {
    moduleId: "A",
    title: "Tóm tắt Kiến thức Module A — Toán & Tư duy định lượng",
    overview: "Trọng tâm bài thi đánh giá năng lực phần Toán tập trung vào các công cụ đại số tuyến tính (véc-tơ, ma trận), phép tính giải tích (đạo hàm, cực trị, gradient) và xác suất thống kê ứng dụng trong AI.",
    topics: [
      {
        title: "1. Véc-tơ & Ma trận trong Không gian",
        summary: "Véc-tơ biểu diễn điểm dữ liệu (features). Phép nhân vô hướng (Dot product) u · v = ∑(u_i * v_i) thể hiện độ tương đồng giữa 2 véc-tơ.",
        keyFormulas: [
          "Dot Product: u · v = ||u|| ||v|| cos(θ)",
          "Kích thước nhân ma trận: A(m × n) × B(n × p) = C(m × p)",
          "Khoảng cách Euclidean: d(u, v) = √(∑(u_i - v_i)²)"
        ],
        commonPitfalls: [
          "Phép nhân ma trận KHÔNG có tính chất giao hoán (A × B ≠ B × A).",
          "Số cột của ma trận thứ nhất phải bằng số hàng của ma trận thứ hai."
        ]
      },
      {
        title: "2. Định lý Bayes & Xác suất có điều kiện",
        summary: "Cơ sở của mô hình Naive Bayes và cập nhật niềm tin khi có dữ liệu mới.",
        keyFormulas: [
          "P(A|B) = [P(B|A) × P(A)] / P(B)",
          "P(B) = P(B|A)P(A) + P(B|¬A)P(¬A)"
        ],
        commonPitfalls: [
          "Nhầm lẫn giữa P(A|B) (Xác suất mắc bệnh khi dương tính) và P(B|A) (Độ nhạy xét nghiệm khi có bệnh)."
        ]
      },
      {
        title: "3. Gradient & Đạo hàm tối ưu hóa",
        summary: "Gradient ∇f biểu diễn hướng tăng nhanh nhất của hàm số. Trong Gradient Descent, ta đi ngược hướng gradient để tìm cực tiểu hàm mất mát.",
        keyFormulas: [
          "Gradient update: w_new = w_old - α × ∇L(w)",
          "Đạo hàm chuỗi: d/dx [f(g(x))] = f'(g(x)) × g'(x)"
        ],
        commonPitfalls: [
          "Tốc độ học (learning rate α) quá lớn làm thuật toán phân kỳ (diverge); quá nhỏ làm hội tụ rất chậm."
        ]
      }
    ]
  },
  B: {
    moduleId: "B",
    title: "Tóm tắt Kiến thức Module B — Lập trình & Xử lý dữ liệu",
    overview: "Kiểm tra kỹ năng lập trình Python cơ bản & nâng cao, xử lý mảng với NumPy, biến đổi dữ liệu với Pandas, cùng tư duy thuật toán Big O.",
    topics: [
      {
        title: "1. Python Data Structures & List Comprehension",
        summary: "Tối ưu hóa viết mã Python ngắn gọn, sử dụng Generator để tiết kiệm bộ nhớ RAM khi làm việc với tập dữ liệu lớn.",
        codeExample: `# List comprehension lọc số lẻ và bình phương\nnumbers = [1, 2, 3, 4, 5]\nsquares = [x**2 for x in numbers if x % 2 != 0] # [1, 9, 25]\n\n# Generator expression (tiết kiệm bộ nhớ)\ngen = (x**2 for x in range(1000000))`,
        commonPitfalls: [
          "Thay vì tạo list lớn trong RAM, hãy dùng Generator khi chỉ cần duyệt qua dữ liệu 1 lần."
        ]
      },
      {
        title: "2. NumPy & Phép toán Broadcasting",
        summary: "NumPy giúp tính toán ma trận với tốc độ C/C++. Broadcasting tự động mở rộng mảng lệch chiều để thực hiện phép toán element-wise.",
        codeExample: `import numpy as np\na = np.array([[1], [2], [3]]) # (3, 1)\nb = np.array([10, 20, 30, 40])  # (4,)\nc = a + b # Kết quả shape (3, 4)`,
        keyFormulas: [
          "Shape tương thích: Hai chiều tương thích nếu chúng bằng nhau hoặc một trong hai chiều bằng 1."
        ]
      },
      {
        title: "3. Pandas Data Preprocessing",
        summary: "Các thao tác xử lý dữ liệu khuyết (missing values), chuẩn hóa (scaling) và mã hóa biến phân loại (one-hot encoding).",
        codeExample: `import pandas as pd\ndf['age'].fillna(df['age'].median(), inplace=True)\ndf = pd.get_dummies(df, columns=['gender'])`
      }
    ]
  },
  C: {
    moduleId: "C",
    title: "Tóm tắt Kiến thức Module C — Kiến thức AI & Sản phẩm AI",
    overview: "Hệ thống hóa bức tranh toàn cảnh về Machine Learning, Deep Learning, các sản phẩm AI thế hệ mới (LLM, RAG, Vision AI) và các chỉ số đánh giá.",
    topics: [
      {
        title: "1. Đánh giá mô hình (Confusion Matrix & Metrics)",
        summary: "Đánh giá hiệu năng bài toán phân loại thông qua Accuracy, Precision, Recall và F1-Score.",
        keyFormulas: [
          "Precision = TP / (TP + FP)",
          "Recall = TP / (TP + FN)",
          "F1-Score = 2 × (Precision × Recall) / (Precision + Recall)"
        ],
        commonPitfalls: [
          "Độ chính xác (Accuracy) bị đánh lừa khi tập dữ liệu mất cân bằng nghiêm trọng (Imbalanced Data)."
        ]
      },
      {
        title: "2. Transformer, LLM & RAG",
        summary: "Kiến trúc Self-Attention cho phép xử lý ngữ cảnh toàn cục. RAG (Retrieval-Augmented Generation) kết hợp tri thức tìm kiếm ngoài với khả năng sinh ngôn ngữ của LLM.",
        keyFormulas: [
          "Attention(Q, K, V) = softmax((Q K^T) / √d_k) V"
        ]
      }
    ]
  },
  D: {
    moduleId: "D",
    title: "Tóm tắt Kiến thức Module D — Logic, Đạo đức & Hành vi",
    overview: "Trọng tâm về suy luận logic (dãy số, mệnh đề, bài toán tối ưu) và các tình huống đạo đức AI thực tế (thiên vị thuật toán, quyền riêng tư, an toàn xe tự lái).",
    topics: [
      {
        title: "1. Nguyên tắc Đạo đức AI & Human-in-the-Loop",
        summary: "Hệ thống AI rủi ro cao (y tế, pháp lý, tài chính) không được phép tự động hoàn toàn mà phải có sự giám sát của con người.",
        commonPitfalls: [
          "Không đổ lỗi cho thuật toán AI về mặt pháp lý; đơn vị phát triển/vận hành chịu trách nhiệm an toàn."
        ]
      },
      {
        title: "2. Tấn công Đối kháng (Adversarial Attacks)",
        summary: "Các mối đe dọa an ninh mạng đối với mô hình AI khi bị chèn nhiễu nhỏ khiến AI đưa ra kết quả sai lệch nghiêm trọng."
      }
    ]
  }
};
