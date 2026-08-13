import type { Question } from "../../types/question";

export const moduleAQuestions: Question[] = [
  {
    id: "modA_01",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Đại số véc-tơ & Ma trận",
    difficulty: "Dễ",
    question: "Cho hai véc-tơ u = [2, -3, 5] và v = [4, 1, -2] trong không gian 3 chiều. Tích vô hướng (dot product) u · v bằng bao nhiêu?",
    options: ["-5", "-7", "15", "3"],
    correctAnswer: 0,
    explanation: "Tích vô hướng u · v = (2 × 4) + (-3 × 1) + (5 × -2) = 8 - 3 - 10 = -5.",
    tags: ["Đại số tuyến tính", "Dot Product", "Véc-tơ"]
  },
  {
    id: "modA_02",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Xác suất thống kê",
    difficulty: "Dễ",
    question: "Một hộp chứa 5 quả cầu đỏ, 3 quả cầu xanh và 2 quả cầu vàng. Lấy ngẫu nhiên 1 quả cầu. Xác suất để chọn được quả cầu KHÔNG PHẢI màu đỏ là bao nhiêu?",
    options: ["0.50", "0.30", "0.20", "0.70"],
    correctAnswer: 0,
    explanation: "Tổng số quả cầu = 5 + 3 + 2 = 10. Số quả không đỏ = 3 (xanh) + 2 (vàng) = 5. Xác suất = 5 / 10 = 0.50.",
    tags: ["Xác suất cơ bản", "Thống kê"]
  },
  {
    id: "modA_03",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Giải tích & Tối ưu hóa",
    difficulty: "Trung bình",
    question: "Hàm số f(x) = 2x³ - 9x² + 12x + 5 đạt cực tiểu tương đối tại giá trị x nào dưới đây?",
    options: ["x = 1", "x = 2", "x = 3", "x = 1.5"],
    correctAnswer: 1,
    explanation: "Đạo hàm f'(x) = 6x² - 18x + 12 = 6(x - 1)(x - 2) = 0 ⇔ x = 1 hoặc x = 2. Đạo hàm cấp hai f''(x) = 12x - 18. Tại x = 2, f''(2) = 6 > 0 nên x = 2 là điểm cực tiểu.",
    tags: ["Đạo hàm", "Cực trị", "Gradient Descent"]
  },
  {
    id: "modA_04",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận & Phép nhân ma trận",
    difficulty: "Trung bình",
    question: "Ma trận A có kích thước (3 × 4), ma trận B có kích thước (4 × 2), ma trận C có kích thước (2 × 5). Kích thước của ma trận kết quả T = A × B × C là gì?",
    options: ["3 × 5", "4 × 5", "3 × 2", "Không thể thực hiện phép nhân"],
    correctAnswer: 0,
    explanation: "Phép nhân (A × B) tạo ra ma trận kích thước (3 × 2). Phép nhân tiếp theo (A × B) × C tạo ra ma trận kích thước (3 × 5).",
    tags: ["Đại số tuyến tính", "Ma trận"]
  },
  {
    id: "modA_05",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Xác suất Bayes",
    difficulty: "Trung bình",
    question: "Tỷ lệ mắc một bệnh hiếm trong cộng đồng là 1%. Một xét nghiệm chẩn đoán có độ nhạy (sensitivity) 95% và độ đặc hiệu (specificity) 90%. Nếu một người nhận kết quả Dương tính, xác suất thực sự mắc bệnh xấp xỉ bằng bao nhiêu?",
    options: ["8.7%", "95.0%", "50.0%", "12.5%"],
    correctAnswer: 0,
    explanation: "Áp dụng định lý Bayes: P(Bệnh|+) = [P(+|Bệnh) × P(Bệnh)] / [P(+|Bệnh) × P(Bệnh) + P(+|Không bệnh) × P(Không bệnh)] = (0.95 × 0.01) / (0.95 × 0.01 + 0.10 × 0.99) = 0.0095 / 0.1085 ≈ 8.75%.",
    tags: ["Định lý Bayes", "Xác suất có điều kiện"]
  },
  {
    id: "modA_06",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Hàm mất mát & Học máy",
    difficulty: "Khó",
    question: "Cho hàm chi phí Squared Error L(w) = (w · x - y)². Đạo hàm partial của L theo véc-tơ trọng số w (gradient ∇_w L) là biểu thức nào?",
    options: [
      "2(w · x - y)x",
      "(w · x - y)²x",
      "2(w · x - y)",
      "2x²(w · x - y)"
    ],
    correctAnswer: 0,
    explanation: "Theo quy tắc chuỗi (chain rule): ∂L/∂w = 2(w · x - y) · ∂(w · x - y)/∂w = 2(w · x - y)x.",
    tags: ["Gradient", "Machine Learning", "Optimization"]
  },
  {
    id: "modA_07",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định lý Trung tâm Giới hạn (CLT)",
    difficulty: "Khó",
    question: "Phát biểu nào sau đây thể hiện đúng ý nghĩa của Định lý Trung tâm Giới hạn (Central Limit Theorem) trong phân tích dữ liệu AI?",
    options: [
      "Phân bố của tổng (hoặc trung bình) các biến ngẫu nhiên độc lập sẽ tiến tới phân bố chuẩn (Gaussian) khi kích thước mẫu n đủ lớn, bất kể phân bố gốc.",
      "Mọi biến ngẫu nhiên trong thực tế đều tuân theo phân bố chuẩn.",
      "Kích thước mẫu n càng lớn thì độ lệch chuẩn của dữ liệu gốc càng tiến về 0.",
      "Phân bố của biến ngẫu nhiên luôn biến đổi thành phân bố đều khi lấy tích phân."
    ],
    correctAnswer: 0,
    explanation: "Định lý CLT khẳng định rằng trung bình mẫu của n biến ngẫu nhiên độc lập cùng phân bố (i.i.d) sẽ tiến xấp xỉ về phân bố chuẩn khi n → ∞.",
    tags: ["CLT", "Thống kê", "Phân bố chuẩn"]
  },
  {
    id: "modA_08",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Tối ưu hóa đa biến",
    difficulty: "Khó",
    question: "Điều kiện cần để một điểm x* là điểm cực trị cục bộ của hàm khả vi hai lần f(x) trong ℝⁿ là gì?",
    options: [
      "Gradient ∇f(x*) = 0 (vectơ 0)",
      "Ma trận Hessian H(x*) là ma trận đơn vị",
      "Đạo hàm cấp một f'(x*) > 0",
      "Tích phân của f(x) trên ℝⁿ bằng 1"
    ],
    correctAnswer: 0,
    explanation: "Điều kiện cần cấp một (First-Order Necessary Condition) cho điểm dừng/cực trị của hàm khả vi là vectơ gradient ∇f(x*) = 0.",
    tags: ["Gradient", "Hessian", "Tối ưu hóa"]
  },
  {
    id: "modA_09",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Trị riêng & Véc-tơ riêng (Eigenvalues)",
    difficulty: "Trung bình",
    question: "Cho ma trận vuông A = [[3, 1], [0, 2]]. Trị riêng (Eigenvalues λ) của ma trận A là những số nào?",
    options: ["λ = 3 và λ = 2", "λ = 1 và λ = 0", "λ = 5 và λ = 6", "λ = 1 và λ = 5"],
    correctAnswer: 0,
    explanation: "Ma trận tam giác có các trị riêng nằm ngay trên đường chéo chính. Ma trận A có dạng tam giác trên nên các trị riêng chính là λ₁ = 3 và λ₂ = 2.",
    tags: ["Eigenvalues", "Đại số tuyến tính", "PCA"]
  },
  {
    id: "modA_10",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Khoảng cách Cosine & Nhận dạng Véc-tơ",
    difficulty: "Trung bình",
    question: "Cho hai véc-tơ embedding u = [1, 0] và v = [0, 1]. Độ tương đồng Cosine (Cosine Similarity) giữa u và v bằng bao nhiêu?",
    options: ["0.0", "1.0", "-1.0", "0.5"],
    correctAnswer: 0,
    explanation: "Cosine Similarity = (u · v) / (||u|| ||v||) = (1×0 + 0×1) / (1 × 1) = 0. Hai véc-tơ vuông góc (orthogonal) có Cosine Similarity = 0.",
    tags: ["Cosine Similarity", "Embeddings", "Véc-tơ"]
  },
  {
    id: "modA_11",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Phân bố Bernoulli & Binomial",
    difficulty: "Dễ",
    question: "Tung một đồng xu cân đối 4 lần độc lập. Xác suất để nhận được CHÍNH XÁC 2 lần mặt Nửa (Head) là bao nhiêu?",
    options: ["3/8 (37.5%)", "1/4 (25.0%)", "1/2 (50.0%)", "1/8 (12.5%)"],
    correctAnswer: 0,
    explanation: "Theo công thức phân bố Nhị thức: P(X = 2) = C(4, 2) × (0.5)² × (0.5)² = 6 × 1/16 = 6/16 = 3/8 (37.5%).",
    tags: ["Phân bố Nhị thức", "Xác suất"]
  },
  {
    id: "modA_12",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Phân rã Ma trận SVD",
    difficulty: "Khó",
    question: "Trong kỹ thuật Phân rã Trị số Đơn lẻ (Singular Value Decomposition - SVD) A = U Σ Vᵀ, ma trận Σ là ma trận có đặc điểm gì?",
    options: [
      "Ma trận đường chéo chứa các giá trị đơn lẻ (singular values) giảm dần theo đường chéo.",
      "Ma trận vuông đối xứng gồm các vectơ riêng.",
      "Ma trận nghịch đảo của ma trận đầu vào A.",
      "Ma trận đơn vị I kích thước (n × n)."
    ],
    correctAnswer: 0,
    explanation: "Ma trận Σ trong SVD là ma trận đường chéo chứa các giá trị đơn lẻ σ₁ ≥ σ₂ ≥ ... ≥ 0, đại diện cho mức độ quan trọng của các thành phần chính.",
    tags: ["SVD", "Đại số tuyến tính", "Giảm chiều dữ liệu"]
  }
];
