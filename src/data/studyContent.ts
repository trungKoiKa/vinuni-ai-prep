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
    overview: "Kiến thức trọng tâm bài thi đánh giá năng lực phần Toán tập trung vào Đại số tuyến tính (Véc-tơ, Ma trận, SVD, PCA, LDA), Giải tích tối ưu hóa (Đạo hàm, Gradient Descent), Xác suất thống kê (Bayes) và Lý thuyết Tối ưu lồi (Convex Optimization, KKT, Duality).",
    topics: [
      {
        title: "1. Véc-tơ, Ma trận & Phép toán Đại số tuyến tính",
        summary: "Véc-tơ biểu diễn vị trí các điểm dữ liệu trong không gian n chiều. Phép nhân vô hướng (Dot Product) u · v = ∑(u_i × v_i) đo độ tương đồng góc giữa hai vector.",
        keyFormulas: [
          "Phép nhân vô hướng: u · v = ||u||₂ ||v||₂ cos(θ)",
          "Chuẩn Euclid L2: ||u||₂ = √(u₁² + u₂² + ... + uₙ²)",
          "Kích thước nhân ma trận: A(m × n) × B(n × p) = C(m × p)",
          "Chuyển vị tích ma trận: (AB)ᵀ = Bᵀ Aᵀ",
          "Định thức ma trận 2x2: det([[a, b], [c, d]]) = ad - bc",
          "Ma trận nghịch đảo A⁻¹: A × A⁻¹ = I (chỉ tồn tại khi det(A) ≠ 0)"
        ],
        commonPitfalls: [
          "Phép nhân ma trận KHÔNG có tính chất giao hoán: AB ≠ BA trong trường hợp tổng quát.",
          "Phép nhân ma trận chỉ thực hiện được khi số cột của A bằng số hàng của B."
        ]
      },
      {
        title: "2. SVD, PCA & LDA (Giảm chiều dữ liệu & Trích chọn đặc trưng)",
        summary: "Các kỹ thuật chiếu không gian giúp nén dữ liệu, giảm chi phí tính toán và loại bỏ nhiễu mà vẫn bảo toàn lượng thông tin cốt lõi.",
        keyFormulas: [
          "SVD (Giá trị suy biến): A = U Σ Vᵀ (U, V trực giao; Σ chứa các singular values σ₁ ≥ σ₂ ≥ ... ≥ 0)",
          "PCA Zero-mean Centering: X' = X - μ",
          "Ma trận hiệp phương sai trong PCA: Σ = (1/N) X'ᵀ X'",
          "Thành phần chính PCA: Là các vector riêng ứng với các trị riêng (eigenvalues) lớn nhất của ma trận hiệp phương sai",
          "Hàm mục tiêu LDA: J(W) = trace(Wᵀ S_B W) / trace(Wᵀ S_W W) (Tối đa hóa phương sai liên lớp S_B, tối thiểu hóa phương sai nội lớp S_W)",
          "Giới hạn số chiều LDA: Số chiều tối đa sau khi chiếu bằng C - 1 (với C là số lớp nhãn)"
        ],
        commonPitfalls: [
          "PCA là thuật toán KHÔNG giám sát (Unsupervised), không dùng nhãn nhị phân/đa lớp.",
          "LDA là thuật toán CÓ giám sát (Supervised), tận dụng thông tin nhãn để tìm phương chiếu phân tách các lớp."
        ]
      },
      {
        title: "3. Đạo hàm, Gradient & Tối ưu hóa Gradient Descent",
        summary: "Gradient ∇J(θ) thể hiện hướng tăng nhanh nhất của hàm số. Thuật toán Gradient Descent cập nhật tham số bằng cách đi ngược hướng gradient để tìm cực tiểu hàm mất mát.",
        keyFormulas: [
          "Công thức cập nhật GD: θ_new = θ_old - η ∇J(θ) (với η là tốc độ học / learning rate)",
          "Đạo hàm đa thức: (xⁿ)' = n xⁿ⁻¹; Đạo hàm hàm mũ: (eˣ)' = eˣ",
          "Quy tắc chuỗi (Chain Rule): d/dx [f(g(x))] = f'(g(x)) × g'(x)",
          "Điều kiện cực trị: f'(x₀) = 0. Nếu f''(x₀) > 0 là cực tiểu; nếu f''(x₀) < 0 là cực đại",
          "Pure SGD: Cập nhật gradient dựa trên đúng 1 mẫu ngẫu nhiên tại mỗi bước",
          "Mini-batch SGD: Cập nhật gradient dựa trên một lô mẫu nhỏ (thường 32, 64, 128 mẫu)"
        ],
        commonPitfalls: [
          "Tốc độ học η quá lớn làm thuật toán nhảy qua cực tiểu và bị phân kỳ (diverge).",
          "Tốc độ học η quá nhỏ khiến mô hình hội tụ cực kỳ chậm hoặc mắc kẹt ở điểm yên ngựa."
        ]
      },
      {
        title: "4. Lý thuyết Tối ưu lồi (Convex Optimization), Duality & Điều kiện KKT",
        summary: "Tối ưu lồi đảm bảo mọi cực tiểu địa phương đều là cực tiểu toàn cục duy nhất, là nền tảng toán học của SVM, Hồi quy Ridge/Lasso và Logistic Regression.",
        keyFormulas: [
          "Định nghĩa tập lồi C: Với mọi x, y ∈ C và θ ∈ [0, 1] thì θ x + (1-θ) y ∈ C",
          "Định nghĩa hàm lồi f(x): f''(x) ≥ 0 với mọi x trên miền xác định",
          "Hàm Lagrange: L(x, λ, ν) = f₀(x) + ∑ λ_i f_i(x) + ∑ ν_j h_j(x)",
          "Đối ngẫu yếu (Weak Duality): d* ≤ p* (Giá trị tối ưu đối ngẫu d* luôn là chặn dưới của p*)",
          "Đối ngẫu mạnh (Strong Duality): d* = p* (Khoảng cách đối ngẫu bằng 0 khi thỏa mãn tiêu chuẩn Slater)",
          "Hệ điều kiện KKT: ∇_x L = 0 (Primal stationarity), f_i(x) ≤ 0, h_j(x) = 0, λ_i ≥ 0, và λ_i f_i(x) = 0 (Complementary slackness)"
        ],
        commonPitfalls: [
          "Hàm đối ngẫu Lagrange g(λ, ν) luôn luôn là hàm LÕM (concave), bất kể bài toán gốc có lồi hay không."
        ]
      },
      {
        title: "5. Xác suất Thống kê & Định lý Bayes",
        summary: "Cơ sở của việc cập nhật xác suất hậu nghiệm dựa trên bằng chứng thu thập được, ứng dụng trực tiếp trong bộ phân loại Naive Bayes.",
        keyFormulas: [
          "Công thức Bayes: P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}",
          "Xác suất toàn phần: P(B) = P(B|A)P(A) + P(B|¬A)P(¬A)",
          "Giả thiết độc lập Naive Bayes: P(x₁, x₂, ..., xₙ | c) = ∏ P(x_i | c)",
          "Làm mềm Laplace (Laplace Smoothing): P(x_i | c) = (N_ic + 1) / (N_c + V)"
        ],
        commonPitfalls: [
          "Phân biệt rõ giữa P(A|B) (Xác suất hậu nghiệm) và P(B|A) (Khả năng/Likelihood)."
        ]
      }
    ]
  },
  B: {
    moduleId: "B",
    title: "Tóm tắt Kiến thức Module B — Lập trình & Xử lý dữ liệu",
    overview: "Hệ thống hóa kỹ năng lập trình Python nâng cao, cấu trúc dữ liệu, phân tích độ phức tạp Big O, thao tác mảng NumPy, xử lý DataFrame Pandas và tiền xử lý dữ liệu Machine Learning.",
    topics: [
      {
        title: "1. Cấu trúc dữ liệu Python & Tối ưu bộ nhớ",
        summary: "Hiểu rõ sự khác biệt giữa Mutable (List, Dict, Set) và Immutable (Tuple, Int, String). Sử dụng List Comprehension và Generator để xử lý dữ liệu hiệu quả.",
        codeExample: `# List comprehension (tạo mảng ngay trong RAM)\nsquares = [x**2 for x in range(10) if x % 2 == 0] # [0, 4, 16, 36, 64]\n\n# Generator expression (tiết kiệm RAM cho tập dữ liệu cực lớn)\ngen_squares = (x**2 for x in range(1000000))\nprint(next(gen_squares)) # 0\n\n# Pass-by-assignment với Mutable object\ndef append_val(lst):\n    lst.append(99)\nmy_list = [1, 2]\nappend_val(my_list) # my_list trở thành [1, 2, 99]`,
        commonPitfalls: [
          "Thay vì tạo List hàng triệu phần tử gây bùng nổ bộ nhớ RAM, hãy dùng Generator khi chỉ cần duyệt qua dữ liệu 1 lần.",
          "Phép gán `b = a` trên List Python chỉ tạo thêm tham chiếu chứ không sao chép dữ liệu (cần dùng `b = a.copy()`)."
        ]
      },
      {
        title: "2. Độ phức tạp thời gian & không gian (Big O Notation)",
        summary: "Đánh giá hiệu năng và khả năng mở rộng của thuật toán khi kích thước đầu vào N tăng lên.",
        keyFormulas: [
          "O(1): Truy cập phần tử mảng qua chỉ số, kiểm tra tồn tại trong set/dict (`x in my_set`)",
          "O(log N): Tìm kiếm nhị phân (Binary Search) trên mảng đã sắp xếp",
          "O(N): Duyệt qua mảng 1 lần, tìm min/max trong mảng chưa sắp xếp",
          "O(N log N): Các thuật toán sắp xếp tối ưu như QuickSort, MergeSort",
          "O(N²): 2 vòng lặp lồng nhau, thuật toán sắp xếp đơn giản như BubbleSort, SelectionSort"
        ],
        commonPitfalls: [
          "Tìm kiếm phần tử `x in my_list` mất O(N), nhưng `x in my_set` hoặc `x in my_dict` chỉ mất O(1)."
        ]
      },
      {
        title: "3. NumPy, Thao tác mảng & Quy tắc Broadcasting",
        summary: "NumPy thực hiện phép toán ma trận bằng mã C đã biên dịch vector hóa (Vectorization), nhanh hơn gấp hàng chục lần vòng lặp for trong Python thuần.",
        codeExample: `import numpy as np\n\n# Phép toán Vectorization\na = np.array([1, 2, 3])\nb = np.array([4, 5, 6])\nprint(a * b) # [4, 10, 18] - nhân từng phần tử\nprint(np.dot(a, b)) # 32 - tích vô hướng\n\n# Quy tắc Broadcasting\nx = np.array([[1], [2], [3]]) # Shape (3, 1)\ny = np.array([10, 20, 30, 40])  # Shape (4,)\nz = x + y # Tự động mở rộng thành shape (3, 4)`,
        keyFormulas: [
          "Quy tắc Broadcasting: Hai chiều của 2 mảng tương thích nếu chúng bằng nhau hoặc một trong hai chiều có kích thước bằng 1."
        ]
      },
      {
        title: "4. Pandas Data Preprocessing & Trích chọn đặc trưng",
        summary: "Kỹ thuật làm sạch dữ liệu khuyết, biến đổi cột, nhóm dữ liệu và mã hóa đặc trưng trước khi đưa vào mô hình học máy.",
        codeExample: `import pandas as pd\nimport numpy as np\n\n# Xử lý ô khuyết (NaN)\ndf['age'] = df['age'].fillna(df['age'].median())\n\n# Biến đổi dữ liệu bằng apply & map\ndf['score_scaled'] = df['score'].apply(lambda x: x / 100.0)\n\n# Mã hóa một-hot (One-Hot Encoding)\ndf_encoded = pd.get_dummies(df, columns=['category'], drop_first=True)\n\n# Ghi file CSV loại bỏ cột index mặc định\ndf.to_csv('cleaned_output.csv', index=False)`,
        keyFormulas: [
          "Mã hóa One-Hot: Biến đổi cột phân loại K lớp thành K vector nhị phân (chỉ chứa 1 số 1 và còn lại bằng 0)",
          "Chuẩn hóa L2 vector: x' = \frac{x}{||x||₂} (Đưa chuẩn độ dài vector đặc trưng về bằng 1)"
        ]
      }
    ]
  },
  C: {
    moduleId: "C",
    title: "Tóm tắt Kiến thức Module C — Kiến thức AI & Sản phẩm AI",
    overview: "Bức tranh toàn cảnh về Machine Learning, các mô hình phân loại & hồi quy điển hình, Hệ thống gợi ý (Recommender Systems), Máy vector hỗ trợ (SVM), Mạng neuron đa tầng (MLP), Transformer và sản phẩm AI thế hệ mới (LLM, RAG).",
    topics: [
      {
        title: "1. Tổng quan các bài toán Machine Learning & Chỉ số đánh giá",
        summary: "Phân loại các phương pháp học (Supervised, Unsupervised, Semi-supervised, Reinforcement) và đo lường hiệu năng bằng Ma trận nhầm lẫn (Confusion Matrix).",
        keyFormulas: [
          "Accuracy = (TP + TN) / (TP + TN + FP + FN)",
          "Precision = \frac{TP}{TP + FP} (Độ chính xác trong số các mẫu được dự đoán là Positive)",
          "Recall = \frac{TP}{TP + FN} (Độ nhạy / Tỷ lệ phát hiện đúng các mẫu Positive thực tế)",
          "F1-Score = \frac{2 \times (Precision \times Recall)}{Precision + Recall} (Trung bình hài hòa)",
          "MSE = (1/N) ∑ (y_i - y_pred_i)²; MAE = (1/N) ∑ |y_i - y_pred_i|"
        ],
        commonPitfalls: [
          "Chỉ số Accuracy bị đánh lừa nghiêm trọng khi tập dữ liệu bị mất cân bằng lớp (Imbalanced Data).",
          "Trong y tế chẩn đoán bệnh nguy hiểm, cần tối ưu hóa chỉ số RECALL để tránh bỏ sót bệnh nhân."
        ]
      },
      {
        title: "2. Thuật toán KNN, K-Means & Naive Bayes",
        summary: "Ba thuật toán nền tảng tiêu biểu cho Học có giám sát, Học phân cụm không giám sát và Học dựa trên xác suất.",
        keyFormulas: [
          "KNN (K-Nearest Neighbors): Instance-based learning (lazy learning), tính khoảng cách Euclid d = √(∑(x_i - y_i)²), bầu chọn đa số (Majority voting)",
          "K-Means Clustering: Tối thiểu hóa tổng bình phương khoảng cách tới tâm cụm (WCSS). Vòng lặp E-step (Gán điểm) và M-step (Cập nhật tâm cụm bằng mean)",
          "Laplace Smoothing: Tránh xác suất bằng 0 khi gặp từ mới chưa từng xuất hiện trong tập huấn luyện"
        ],
        commonPitfalls: [
          "KNN với K = 1 rất nhạy cảm với nhiễu và dễ gây hiện tượng quá khớp (Overfitting).",
          "K-means phụ thuộc mạnh vào cách khởi tạo tâm cụm ban đầu và yêu cầu khai báo trước số cụm K (chọn K qua phương pháp Elbow)."
        ]
      },
      {
        title: "3. Linear, Logistic & Softmax Regression",
        summary: "Các mô hình tuyến tính phân loại và hồi quy cơ bản với các hàm kích hoạt tương ứng.",
        keyFormulas: [
          "Hàm Sigmoid (Logistic): σ(z) = 1 / (1 + e⁻ᶻ), đưa điểm số về khoảng xác suất (0, 1)",
          "Hàm Softmax (Đa lớp): a_i = e^(z_i) / ∑ e^(z_j), tổng các xác suất bằng 1",
          "Binary Cross-Entropy Loss: L = - [y log(p) + (1-y) log(1-p)]",
          "Categorical Cross-Entropy Loss: L = - ∑ y_i log(a_i)"
        ]
      },
      {
        title: "4. Máy vector hỗ trợ (SVM) & Hệ thống gợi ý (Recommender Systems)",
        summary: "SVM phân loại bằng siêu phẳng lề rộng nhất. Hệ thống gợi ý kết hợp Lọc nội dung (Content-based) và Lọc cộng tác (Collaborative Filtering).",
        keyFormulas: [
          "Hard-margin SVM: Tối đa hóa khoảng cách lề 2/||w||₂ ⟺ Tối thiểu hóa (1/2)||w||₂² với y_i (wᵀ x_i + b) ≥ 1",
          "Soft-margin SVM Loss (Hinge Loss): L = (1/2)||w||₂² + C ∑ max(0, 1 - y_i (wᵀ x_i + b))",
          "Kernel Trick (RBF Kernel): K(x, y) = exp(-γ ||x - y||₂²)",
          "Matrix Factorization CF: Xấp xỉ Ma trận tiện ích thưa Y ≈ X Wᵀ với số chiều ẩn K nhỏ",
          "Độ tương tự Cosine (CF): sim(u, v) = (u · v) / (||u||₂ ||v||₂)"
        ],
        commonPitfalls: [
          "Item-item CF thường ổn định và hiệu quả hơn User-user CF trong e-commerce vì danh mục sản phẩm ít biến đổi hơn hành vi người dùng.",
          "Cần chuẩn hóa ma trận tiện ích (trừ đi rating trung bình) trước khi tính Cosine Similarity để khử thiên vị thang điểm cá nhân."
        ]
      },
      {
        title: "5. Mạng Neuron Đa tầng (MLP), Transformer, LLM & RAG",
        summary: "Kiến trúc Deep Learning vượt qua giới hạn tuyến tính, cùng cơ chế Self-Attention và ứng dụng RAG trong sản phẩm AI thực tế.",
        keyFormulas: [
          "Hàm kích hoạt ReLU: f(z) = max(0, z); Leaky ReLU: f(z) = max(α z, z)",
          "Lan truyền ngược (Backpropagation): Đạo hàm chuỗi tính gradient từ tầng đầu ra ngược về tầng ẩn",
          "Self-Attention Matrix: Attention(Q, K, V) = softmax((Q Kᵀ) / √d_k) V",
          "LLM Generation Parameters: Temperature (Độ sáng tạo), Top-K & Top-P / Nucleus Sampling (Lọc phân phối từ)"
        ],
        commonPitfalls: [
          "Các tầng ẩn trong MLP bắt buộc phải có hàm kích hoạt PHI TUYẾN, nếu dùng tuyến tính toàn bộ mạng chỉ tương đương 1 tầng duy nhất.",
          "Dùng RAG cho dữ liệu nội bộ thay đổi liên tục; dùng Fine-Tuning khi muốn ép mô hình học định dạng/phong cách phản hồi cố định."
        ]
      }
    ]
  },
  D: {
    moduleId: "D",
    title: "Tóm tắt Kiến thức Module D — Logic, Đạo đức & Hành vi AI",
    overview: "Hệ thống hóa kiến thức suy luận logic mệnh đề, phân tích quy luật, cùng các nguyên tắc đạo đức an toàn AI, quyền riêng tư và Human-in-the-loop.",
    topics: [
      {
        title: "1. Logic Mệnh đề & Bảng Giá trị Chân lý",
        summary: "Quy tắc suy luận logic nền tảng giúp kiểm tra tính đúng sai của các lập luận.",
        keyFormulas: [
          "Mệnh đề kéo theo A ⟹ B: Chỉ SAI khi A ĐÚNG và B SAI (Các trường hợp còn lại luôn ĐÚNG)",
          "Mệnh đề tương đương A ⟺ B: ĐÚNG khi cả A và B có cùng giá trị chân lý",
          "Định luật De Morgan 1: ¬(A ∧ B) ≡ ¬A ∨ ¬B",
          "Định luật De Morgan 2: ¬(A ∨ B) ≡ ¬A ∧ ¬B",
          "Phủ định của mệnh đề tồn tại/toàn thể: ¬(∀x, P(x)) ≡ ∃x, ¬P(x)"
        ],
        commonPitfalls: [
          "Tránh ngụy辯 'Khẳng định hệ quả': Từ `A ⟹ B` và `B ĐÚNG`, KHÔNG THỂ suy ra `A ĐÚNG`."
        ]
      },
      {
        title: "2. Nguyên tắc Đạo đức AI, An toàn & Human-in-the-Loop",
        summary: "Các chuẩn mực pháp lý và kỹ thuật đảm bảo AI hoạt động minh bạch, công bằng và không gây hại.",
        keyFormulas: [
          "Human-in-the-Loop (HITL): Con người giữ quyền quyết định cuối cùng trong các ứng dụng AI rủi ro cao (chẩn đoán y tế, xe tự lái, duyệt vay tài chính)",
          "PII Anonymization: Loại bỏ hoàn toàn thông tin định danh cá nhân (Tên, CCCD, Email, SĐT) trước khi đưa vào Pipeline huấn luyện",
          "Algorithmic Bias (Thiên vị thuật toán): Xảy ra khi dữ liệu huấn luyện chứa sự định kiến hoặc mất cân bằng mẫu nghiêm trọng"
        ],
        commonPitfalls: [
          "Không đổ lỗi trách nhiệm pháp lý cho thuật toán AI; đơn vị phát triển và vận hành chịu trách nhiệm về thiệt hại do AI gây ra."
        ]
      },
      {
        title: "3. Tấn công Đối kháng (Adversarial Attacks) & An ninh AI",
        summary: "Nhận diện các hình thức tấn công vào mô hình học máy và giải pháp phòng thủ.",
        keyFormulas: [
          "Adversarial Noise: Thêm một nhiễu cực nhỏ vô hình với mắt người vào ảnh khiến mạng CNN phân loại sai hoàn toàn với độ tin cậy cao",
          "Prompt Injection: Tấn công chèn câu lệnh độc hại vào đầu vào LLM để phá vỡ rào chắn an toàn (jailbreak)",
          "Data Poisoning: Đầu độc tập dữ liệu huấn luyện để cài cắm lỗ hổng ẩn (backdoor) vào mô hình"
        ]
      }
    ]
  }
};
