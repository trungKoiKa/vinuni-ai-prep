import type { Question } from "../../types/question";

export const moduleAQuestions: Question[] = [
  {
    id: "modA_01",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận",
    difficulty: "Dễ",
    question: "Cho ma trận A = [[1, 2], [3, 4]]. Kích thước của ma trận A là:",
    options: ["1x4", "2x2", "4x1", "2x3"],
    correctAnswer: 1,
    explanation: "Ma trận A gồm có 2 hàng và 2 cột, do đó có kích thước là 2x2.",
    tags: ["matrix", "linear_algebra"]
  },
  {
    id: "modA_02",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cộng và trừ ma trận",
    difficulty: "Dễ",
    question: "Điều kiện bắt buộc để hai ma trận A và B thực hiện được phép cộng hoặc phép trừ là:",
    options: [
      "Hai ma trận phải cùng kích thước",
      "Số cột ma trận A bằng số hàng ma trận B",
      "Cả hai ma trận đều là ma trận vuông",
      "Định thức của hai ma trận phải khác 0"
    ],
    correctAnswer: 0,
    explanation: "Theo định nghĩa, hai ma trận chỉ có thể cộng hoặc trừ với nhau khi và chỉ khi chúng có cùng kích thước.",
    tags: ["matrix", "addition"]
  },
  {
    id: "modA_03",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cộng và trừ ma trận",
    difficulty: "Dễ",
    question: "Cho A = [[1, 2], [3, 4]] và B = [[2, 0], [1, 3]]. Tính ma trận A + B.",
    options: [
      "[[3, 2], [4, 7]]",
      "[[2, 0], [3, 12]]",
      "[[4, 6], [10, 12]]",
      "[[-1, 2], [2, 1]]"
    ],
    correctAnswer: 0,
    explanation: "A + B = [[1+2, 2+0], [3+1, 4+3]] = [[3, 2], [4, 7]].",
    tags: ["matrix", "addition"]
  },
  {
    id: "modA_04",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cộng và trừ ma trận",
    difficulty: "Dễ",
    question: "Cho A = [[1, 2], [3, 4]] và B = [[2, 0], [1, 3]]. Tính ma trận A - B.",
    options: [
      "[[-1, 2], [2, 1]]",
      "[[1, -2], [-2, -1]]",
      "[[3, 2], [4, 7]]",
      "[[-1, 0], [2, 1]]"
    ],
    correctAnswer: 0,
    explanation: "A - B = [[1-2, 2-0], [3-1, 4-3]] = [[-1, 2], [2, 1]].",
    tags: ["matrix", "subtraction"]
  },
  {
    id: "modA_05",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Nhân ma trận",
    difficulty: "Trung bình",
    question: "Nếu ma trận A có kích thước m × n và ma trận B có kích thước n × p, ma trận tích AB sẽ có kích thước là:",
    options: ["m x n", "n x p", "m x p", "p x m"],
    correctAnswer: 2,
    explanation: "Phép nhân ma trận (m x n) với (n x p) hợp lệ vì số cột của A bằng số hàng của B, cho kết quả ma trận có kích thước m x p.",
    tags: ["matrix", "multiplication"]
  },
  {
    id: "modA_06",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Nhân ma trận",
    difficulty: "Trung bình",
    question: "Cho A = [[1, 2], [3, 4]] và B = [[2, 0], [1, 3]]. Tính ma trận tích AB.",
    options: [
      "[[4, 6], [10, 12]]",
      "[[2, 0], [3, 12]]",
      "[[3, 2], [4, 7]]",
      "[[4, 10], [6, 12]]"
    ],
    correctAnswer: 0,
    explanation: "AB = [[1*2 + 2*1, 1*0 + 2*3], [3*2 + 4*1, 3*0 + 4*3]] = [[4, 6], [10, 12]].",
    tags: ["matrix", "multiplication"]
  },
  {
    id: "modA_07",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Nhân ma trận",
    difficulty: "Dễ",
    question: "Cho ma trận tích AB = [[4, 6], [10, 12]]. Tổng các phần tử trên đường chéo chính của AB bằng:",
    options: ["10", "14", "16", "22"],
    correctAnswer: 2,
    explanation: "Đường chéo chính của AB bao gồm phần tử ở vị trí (1,1) là 4 và vị trí (2,2) là 12. Tổng = 4 + 12 = 16.",
    tags: ["matrix", "trace"]
  },
  {
    id: "modA_08",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Nhân ma trận",
    difficulty: "Trung bình",
    question: "Cho A = [[2, 0], [1, 3]] và B = [[1, 2], [3, 4]]. Tính tích BA.",
    options: [
      "[[4, 6], [10, 12]]",
      "[[2, 0], [3, 12]]",
      "[[3, 2], [4, 7]]",
      "[[4, 10], [6, 12]]"
    ],
    correctAnswer: 0,
    explanation: "BA = [[1*2 + 2*1, 1*0 + 2*3], [3*2 + 4*1, 3*0 + 4*3]] = [[4, 6], [10, 12]]. Ta thấy phép nhân ma trận không có tính chất giao hoán.",
    tags: ["matrix", "multiplication"]
  },
  {
    id: "modA_09",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định thức cấp 2",
    difficulty: "Dễ",
    question: "Công thức tính định thức của ma trận cấp 2 A = [[a, b], [c, d]] là:",
    options: ["ad + bc", "ad - bc", "ac - bd", "ab - cd"],
    correctAnswer: 1,
    explanation: "Định thức det(A) của ma trận 2x2 bằng tích hai phần tử trên đường chéo chính trừ đi tích hai phần tử trên đường chéo phụ: ad - bc.",
    tags: ["determinant"]
  },
  {
    id: "modA_10",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định thức cấp 2",
    difficulty: "Dễ",
    question: "Tính định thức det([[2, 3], [1, 4]]).",
    options: ["5", "11", "8", "-5"],
    correctAnswer: 0,
    explanation: "det = 2(4) - 3(1) = 8 - 3 = 5.",
    tags: ["determinant"]
  },
  {
    id: "modA_11",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định thức cấp 2",
    difficulty: "Dễ",
    question: "Tính định thức det([[3, 2], [1, 5]]).",
    options: ["13", "17", "15", "11"],
    correctAnswer: 0,
    explanation: "det = 3(5) - 2(1) = 15 - 2 = 13.",
    tags: ["determinant"]
  },
  {
    id: "modA_12",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định thức cấp 3",
    difficulty: "Dễ",
    question: "Quy tắc Sarrus dùng để tính định thức của ma trận vuông cấp mấy?",
    options: ["Cấp 2", "Cấp 3", "Mọi ma trận vuông", "Cấp 4 trở lên"],
    correctAnswer: 1,
    explanation: "Quy tắc Sarrus là quy tắc tính nhanh định thức áp dụng riêng cho ma trận vuông cấp 3.",
    tags: ["determinant", "sarrus"]
  },
  {
    id: "modA_13",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định thức cấp 3",
    difficulty: "Trung bình",
    question: "Cho A = [[a, b, c], [d, e, f], [g, h, i]]. Theo quy tắc Sarrus, biểu thức det(A) là:",
    options: [
      "aei + bfg + cdh - ceg - bdi - afh",
      "aei + bfg + cdh + ceg + bdi + afh",
      "abc + def + ghi - adg - beh - cfi",
      "aei - bfg + cdh - ceg + bdi - afh"
    ],
    correctAnswer: 0,
    explanation: "Công thức Sarrus: det(A) = aei + bfg + cdh - ceg - bdi - afh.",
    tags: ["determinant", "sarrus"]
  },
  {
    id: "modA_14",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định thức cấp 3",
    difficulty: "Khó",
    question: "Tính định thức của ma trận A = [[2, 1, 3], [4, 2, 1], [1, 3, 2]].",
    options: ["25", "-25", "15", "-15"],
    correctAnswer: 0,
    explanation: "Sử dụng Sarrus: det(A) = (2*2*2 + 1*1*1 + 3*4*3) - (3*2*1 + 1*4*2 + 2*1*3) = (8 + 1 + 36) - (6 + 8 + 6) = 45 - 20 = 25.",
    tags: ["determinant", "sarrus"]
  },
  {
    id: "modA_15",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận nghịch đảo",
    difficulty: "Dễ",
    question: "Điều kiện cần và đủ để một ma trận vuông A có ma trận nghịch đảo A⁻¹ là:",
    options: [
      "det(A) ≠ 0",
      "det(A) = 0",
      "A là ma trận đường chéo",
      "Các phần tử của A phải lớn hơn 0"
    ],
    correctAnswer: 0,
    explanation: "Ma trận vuông A chỉ có ma trận nghịch đảo khi và chỉ khi định thức det(A) khác 0 (ma trận không suy biến).",
    tags: ["inverse_matrix"]
  },
  {
    id: "modA_16",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận nghịch đảo cấp 2",
    difficulty: "Trung bình",
    question: "Cho A = [[a, b], [c, d]] có det(A) ≠ 0. Công thức tìm A⁻¹ là:",
    options: [
      "1/(ad - bc) * [[d, -b], [-c, a]]",
      "1/(ad - bc) * [[a, -b], [-c, d]]",
      "1/(ad + bc) * [[d, -b], [-c, a]]",
      "[[d, -b], [-c, a]]"
    ],
    correctAnswer: 0,
    explanation: "Ma trận nghịch đảo cấp 2: A^(-1) = (1 / det(A)) * [[d, -b], [-c, a]].",
    tags: ["inverse_matrix"]
  },
  {
    id: "modA_17",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận nghịch đảo cấp 2",
    difficulty: "Trung bình",
    question: "Tìm ma trận nghịch đảo của A = [[2, 1], [5, 3]].",
    options: [
      "[[3, -1], [-5, 2]]",
      "[[2, -1], [-5, 3]]",
      "[[-3, 1], [5, -2]]",
      "Không tồn tại nghịch đảo"
    ],
    correctAnswer: 0,
    explanation: "det(A) = 2*3 - 1*5 = 1. Do đó A^(-1) = (1/1) * [[3, -1], [-5, 2]] = [[3, -1], [-5, 2]].",
    tags: ["inverse_matrix"]
  },
  {
    id: "modA_18",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Vector và Dot Product",
    difficulty: "Dễ",
    question: "Kết quả của tích vô hướng (Dot Product) giữa hai vector u và v cùng chiều dài là:",
    options: ["Một số thực (Scalar)", "Một vector", "Một ma trận", "Một hệ phương trình"],
    correctAnswer: 0,
    explanation: "Tích vô hướng giữa hai vector cho kết quả là một đại lượng vô hướng (một số thực).",
    tags: ["vector", "dot_product"]
  },
  {
    id: "modA_19",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Vector và Dot Product",
    difficulty: "Dễ",
    question: "Cho u = [2, -1, 3] và v = [4, 2, -1]. Tính u · v.",
    options: ["3", "5", "8", "-3"],
    correctAnswer: 0,
    explanation: "u . v = 2(4) + (-1)(2) + 3(-1) = 8 - 2 - 3 = 3.",
    tags: ["vector", "dot_product"]
  },
  {
    id: "modA_20",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Vector và Dot Product",
    difficulty: "Dễ",
    question: "Cho u = [1, 2, 3] và v = [2, -1, 0]. Tính u · v.",
    options: ["0", "4", "2", "-1"],
    correctAnswer: 0,
    explanation: "u . v = 1(2) + 2(-1) + 3(0) = 2 - 2 + 0 = 0. (Hai vector này vuông góc với nhau).",
    tags: ["vector", "dot_product"]
  },
  {
    id: "modA_21",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Giải hệ phương trình",
    difficulty: "Dễ",
    question: "Giải hệ phương trình: { x + y = 7, x - y = 1 }",
    options: ["x = 4, y = 3", "x = 5, y = 2", "x = 3, y = 4", "x = 6, y = 1"],
    correctAnswer: 0,
    explanation: "Cộng hai phương trình ta được 2x = 8 => x = 4. Thay vào phương trình đầu ta có 4 + y = 7 => y = 3.",
    tags: ["linear_system"]
  },
  {
    id: "modA_22",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Giải hệ phương trình",
    difficulty: "Dễ",
    question: "Giải hệ phương trình: { 2x + y = 7, x - y = 2 }",
    options: ["x = 3, y = 1", "x = 2, y = 3", "x = 4, y = -1", "x = 1, y = 5"],
    correctAnswer: 0,
    explanation: "Cộng hai phương trình ta thu được 3x = 9 => x = 3. Thay vào x - y = 2 => 3 - y = 2 => y = 1.",
    tags: ["linear_system"]
  },
  {
    id: "modA_23",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Giải hệ phương trình",
    difficulty: "Trung bình",
    question: "Khi giải hệ 2 phương trình bậc nhất 2 ẩn, phương pháp tư duy ưu tiên được đề xuất là:",
    options: [
      "Cộng/trừ hai phương trình nếu hệ số thuận lợi hoặc thế nếu dễ cô lập biến",
      "Luôn dùng quy tắc Cramer bằng mọi giá",
      "Vẽ đồ thị hàm số để tìm giao điểm exact",
      "Dùng phương pháp lặp Gauss-Seidel"
    ],
    correctAnswer: 0,
    explanation: "Với hệ 2 ẩn cơ bản, ưu tiên cộng/trừ phương trình để triệt tiêu biến hoặc thế khi biến dễ cô lập.",
    tags: ["linear_system"]
  },
  {
    id: "modA_24",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Đạo hàm",
    difficulty: "Dễ",
    question: "Đạo hàm của hàm đa thức f(x) = xⁿ là:",
    options: ["n · xⁿ⁻¹", "n · xⁿ", "(n+1) · xⁿ⁺¹", "xⁿ⁻¹"],
    correctAnswer: 0,
    explanation: "Công thức đạo hàm cơ bản: (xⁿ)' = n · xⁿ⁻¹.",
    tags: ["calculus", "derivative"]
  },
  {
    id: "modA_25",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Đạo hàm",
    difficulty: "Dễ",
    question: "Đạo hàm của hàm số f(x) = eˣ là:",
    options: ["eˣ", "x · eˣ⁻¹", "1 / eˣ", "ln(x)"],
    correctAnswer: 0,
    explanation: "Hàm số mũ cơ số e có đạo hàm chính bằng nó: (eˣ)' = eˣ.",
    tags: ["calculus", "derivative"]
  },
  {
    id: "modA_26",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Đạo hàm",
    difficulty: "Dễ",
    question: "Đạo hàm của hàm logarit tự nhiên f(x) = ln(x) (với x > 0) là:",
    options: ["1 / x", "-1 / x²", "eˣ", "x"],
    correctAnswer: 0,
    explanation: "Công thức đạo hàm cơ bản: (ln x)' = 1/x.",
    tags: ["calculus", "derivative"]
  },
  {
    id: "modA_27",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Đạo hàm",
    difficulty: "Dễ",
    question: "Đạo hàm của f(x) = sin(x) và g(x) = cos(x) lần lượt là:",
    options: [
      "cos(x) và -sin(x)",
      "-cos(x) và sin(x)",
      "cos(x) và sin(x)",
      "-sin(x) và -cos(x)"
    ],
    correctAnswer: 0,
    explanation: "(sin x)' = cos x; (cos x)' = -sin x.",
    tags: ["calculus", "derivative"]
  },
  {
    id: "modA_28",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Đạo hàm bậc 2",
    difficulty: "Dễ",
    question: "Cho f(x) = x³. Đạo hàm cấp một f'(x) và đạo hàm cấp hai f''(x) lần lượt là:",
    options: [
      "3x² và 6x",
      "3x² và 6",
      "x² và 2x",
      "3x và 3"
    ],
    correctAnswer: 0,
    explanation: "f'(x) = 3x²; f''(x) = (3x²)' = 6x.",
    tags: ["calculus", "second_derivative"]
  },
  {
    id: "modA_29",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Dễ",
    question: "Vector Gradient ∇f của hàm hai biến f(x, y) chứa các thành phần nào?",
    options: [
      "[ ∂f/∂x, ∂f/∂y ]",
      "∂f/∂x + ∂f/∂y",
      "∂²f / (∂x ∂y)",
      "[ f/x, f/y ]"
    ],
    correctAnswer: 0,
    explanation: "Gradient của hàm hai biến f(x, y) là vector gồm các đạo hàm riêng theo biến x và biến y.",
    tags: ["gradient", "multivariable"]
  },
  {
    id: "modA_30",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Trung bình",
    question: "Cho f(x, y) = x² + 2y² - 4x + 4y. Tìm vector Gradient ∇f(x, y).",
    options: [
      "[2x - 4, 4y + 4]",
      "[2x - 4, 2y + 4]",
      "[x - 4, 4y]",
      "[2x, 4y]"
    ],
    correctAnswer: 0,
    explanation: "df/dx = 2x - 4; df/dy = 4y + 4. Do đó Grad f = [2x - 4, 4y + 4].",
    tags: ["gradient"]
  },
  {
    id: "modA_31",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Trung bình",
    question: "Cho f(x, y) = x² + 2y² - 4x + 4y. Tính giá trị Gradient ∇f(1, -1).",
    options: ["[-2, 0]", "[0, -2]", "[-2, -8]", "[2, 0]"],
    correctAnswer: 0,
    explanation: "Grad f = [2x - 4, 4y + 4]. Thế x = 1, y = -1 vào thu được: [2(1) - 4, 4(-1) + 4] = [-2, 0].",
    tags: ["gradient"]
  },
  {
    id: "modA_32",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Dễ",
    question: "Cho f(x, y) = x² + 3y². Biểu thức Gradient ∇f là:",
    options: ["[2x, 6y]", "[2x, 3y]", "[x, 3y]", "[2, 6]"],
    correctAnswer: 0,
    explanation: "df/dx = 2x; df/dy = 6y. Do đó Grad f = [2x, 6y].",
    tags: ["gradient"]
  },
  {
    id: "modA_33",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Dễ",
    question: "Cho f(x, y) = x² + 3y². Tính Gradient tại điểm (2, -1).",
    options: ["[4, -6]", "[4, 6]", "[2, -3]", "[-4, 6]"],
    correctAnswer: 0,
    explanation: "Grad f = [2x, 6y]. Tại (2, -1) ta có Grad f(2, -1) = [2(2), 6(-1)] = [4, -6].",
    tags: ["gradient"]
  },
  {
    id: "modA_34",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cực trị",
    difficulty: "Trung bình",
    question: "Để tìm các điểm ứng viên cực trị của hàm số một biến f(x), ta phải giải phương trình nào?",
    options: ["f'(x) = 0", "f''(x) = 0", "f(x) = 0", "f'(x) > 0"],
    correctAnswer: 0,
    explanation: "Các điểm dừng (ứng viên cực trị) của hàm số thỏa mãn điều kiện đạo hàm cấp một bằng 0: f'(x) = 0.",
    tags: ["extrema"]
  },
  {
    id: "modA_35",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cực trị",
    difficulty: "Trung bình",
    question: "Giả sử x₀ thỏa mãn f'(x₀) = 0. Khẳng định nào sau đây là ĐÚNG về điểm cực tiểu cục bộ (Local Minimum)?",
    options: [
      "Nếu f''(x₀) > 0 thì x₀ là điểm cực tiểu cục bộ",
      "Nếu f''(x₀) < 0 thì x₀ là điểm cực tiểu cục bộ",
      "Nếu f''(x₀) = 0 thì x₀ chắc chắn là điểm cực tiểu cục bộ",
      "f''(x₀) không ảnh hưởng tới cực tiểu cục bộ"
    ],
    correctAnswer: 0,
    explanation: "Quy tắc đạo hàm cấp hai: f'(x₀) = 0 và f''(x₀) > 0 kết luận x₀ là điểm cực tiểu cục bộ.",
    tags: ["extrema"]
  },
  {
    id: "modA_36",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cực trị",
    difficulty: "Trung bình",
    question: "Giả sử x₀ thỏa mãn f'(x₀) = 0. Khẳng định nào sau đây là ĐÚNG về điểm cực đại cục bộ (Local Maximum)?",
    options: [
      "Nếu f''(x₀) < 0 thì x₀ là điểm cực đại cục bộ",
      "Nếu f''(x₀) > 0 thì x₀ là điểm cực đại cục bộ",
      "Nếu f''(x₀) = 0 thì x₀ là điểm cực đại cục bộ",
      "Chỉ cần f'(x₀) = 0 là đủ kết luận cực đại"
    ],
    correctAnswer: 0,
    explanation: "Quy tắc đạo hàm cấp hai: f'(x₀) = 0 và f''(x₀) < 0 kết luận x₀ là điểm cực đại cục bộ.",
    tags: ["extrema"]
  },
  {
    id: "modA_37",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cực trị",
    difficulty: "Trung bình",
    question: "Cho hàm số L(x) = 3x² - 12x + 15. Điểm cực tiểu của hàm L(x) là:",
    options: ["x = 2", "x = -2", "x = 4", "x = 15"],
    correctAnswer: 0,
    explanation: "L'(x) = 6x - 12 = 0 => x = 2. L''(x) = 6 > 0 nên x = 2 là điểm cực tiểu.",
    tags: ["extrema"]
  },
  {
    id: "modA_38",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cực trị",
    difficulty: "Dễ",
    question: "Tìm điểm cực tiểu của hàm số f(x) = x² - 6x + 10.",
    options: ["x = 3", "x = -3", "x = 6", "x = 10"],
    correctAnswer: 0,
    explanation: "f'(x) = 2x - 6 = 0 => x = 3. f''(x) = 2 > 0 nên x = 3 là điểm cực tiểu.",
    tags: ["extrema"]
  },
  {
    id: "modA_39",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient Descent",
    difficulty: "Trung bình",
    question: "Công thức cập nhật tham số θ trong thuật toán Gradient Descent là:",
    options: [
      "θ_new = θ_old - η · ∇L",
      "θ_new = θ_old + η · ∇L",
      "θ_new = η · θ_old - ∇L",
      "θ_new = θ_old × (1 - η · ∇L)"
    ],
    correctAnswer: 0,
    explanation: "Gradient Descent cập nhật tham số theo hướng ngược Gradient để giảm hàm mất mát: θ_new = θ_old - η · Grad(L).",
    tags: ["gradient_descent", "optimization"]
  },
  {
    id: "modA_40",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient Descent",
    difficulty: "Dễ",
    question: "Trong công thức Gradient Descent, ký hiệu η biểu thị cho khái niệm nào?",
    options: ["Learning Rate (Tốc độ học)", "Loss Value (Giá trị tổn thất)", "Batch Size", "Momentum"],
    correctAnswer: 0,
    explanation: "η là Learning Rate (tốc độ học), quyết định độ lớn của bước nhảy mỗi lần cập nhật tham số.",
    tags: ["gradient_descent"]
  },
  {
    id: "modA_41",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient Descent",
    difficulty: "Dễ",
    question: "Vector Gradient ∇L của hàm số thể hiện điều gì?",
    options: [
      "Hướng tăng nhanh nhất của hàm số",
      "Hướng giảm nhanh nhất của hàm số",
      "Hướng không làm thay đổi giá trị hàm số",
      "Hướng vuông góc với tiếp tuyến cực trị"
    ],
    correctAnswer: 0,
    explanation: "Theo thuộc tính hình học, vector Gradient luôn chỉ hướng tăng nhanh nhất của hàm số.",
    tags: ["gradient", "gradient_descent"]
  },
  {
    id: "modA_42",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient Descent",
    difficulty: "Dễ",
    question: "Để giảm Loss trong thuật toán Gradient Descent, ta cần di chuyển tham số theo hướng nào?",
    options: [
      "Hướng -∇L (ngược hướng Gradient)",
      "Hướng +∇L (cùng hướng Gradient)",
      "Hướng vuông góc với ∇L",
      "Hướng song song với trục hoành"
    ],
    correctAnswer: 0,
    explanation: "Vì Gradient chỉ hướng tăng nhanh nhất, nên muốn giảm Loss ta phải bước theo hướng ngược lại (-Grad L).",
    tags: ["gradient_descent"]
  },
  {
    id: "modA_43",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Tư duy độ phức tạp",
    difficulty: "Trung bình",
    question: "Nếu một thuật toán có độ phức tạp O(n²), khi kích thước dữ liệu n tăng gấp 2 lần (n → 2n) thì thời gian chạy tăng khoảng bao nhiêu lần?",
    options: ["4 lần", "2 lần", "8 lần", "Không đổi"],
    correctAnswer: 0,
    explanation: "Với O(n²), khi n tăng lên 2n thì thời gian tăng (2n)² = 4n², tức là gấp 4 lần.",
    tags: ["complexity", "big_o"]
  },
  {
    id: "modA_44",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Tư duy độ phức tạp",
    difficulty: "Trung bình",
    question: "Thuật toán độ phức tạp O(n²) xử lý 10.000 dòng mất 2 giờ. Hỏi nếu xử lý 20.000 dòng thì mất bao nhiêu giờ?",
    options: ["8 giờ", "4 giờ", "6 giờ", "16 giờ"],
    correctAnswer: 0,
    explanation: "Dữ liệu tăng 20.000 / 10.000 = 2 lần. Do độ phức tạp O(n²) nên thời gian tăng 2² = 4 lần. 2 giờ * 4 = 8 giờ.",
    tags: ["complexity", "big_o"]
  },
  {
    id: "modA_45",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Tư duy độ phức tạp",
    difficulty: "Trung bình",
    question: "Một thuật toán O(n²) thực thi mất 3 phút với n = 1000. Nếu n = 3000, thời gian thực thi xấp xỉ bao nhiêu?",
    options: ["27 phút", "9 phút", "18 phút", "36 phút"],
    correctAnswer: 0,
    explanation: "n tăng 3000 / 1000 = 3 lần. Thời gian tăng 3² = 9 lần. 3 phút * 9 = 27 phút.",
    tags: ["complexity", "big_o"]
  },
  {
    id: "modA_46",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Tư duy độ phức tạp",
    difficulty: "Dễ",
    question: "Một thuật toán O(n) thực thi mất 4 phút với n = 1000. Nếu n = 5000, thời gian thực thi xấp xỉ bao nhiêu?",
    options: ["20 phút", "10 phút", "25 phút", "40 phút"],
    correctAnswer: 0,
    explanation: "Thuật toán tuyến tính O(n): n tăng 5000 / 1000 = 5 lần thì thời gian tăng 5 lần: 4 phút * 5 = 20 phút.",
    tags: ["complexity", "big_o"]
  },
  {
    id: "modA_47",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Cực trị",
    difficulty: "Trung bình",
    question: "Giá trị cực tiểu của hàm số L(x) = 3x² - 12x + 15 tại điểm cực tiểu là bao nhiêu?",
    options: ["3", "2", "15", "0"],
    correctAnswer: 0,
    explanation: "Điểm cực tiểu là x = 2. Thay x = 2 vào L(x) thu được L(2) = 3(2)² - 12(2) + 15 = 12 - 24 + 15 = 3.",
    tags: ["extrema"]
  },
  {
    id: "modA_48",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận",
    difficulty: "Khó",
    question: "Cho ma trận A kích thước 3 × 2 và B kích thước 2 × 4. Ma trận tích AB có tổng cộng bao nhiêu phần tử?",
    options: ["12", "6", "8", "24"],
    correctAnswer: 0,
    explanation: "Ma trận AB có kích thước 3x4. Số phần tử tổng cộng bằng 3 * 4 = 12 phần tử.",
    tags: ["matrix", "multiplication"]
  },
  {
    id: "modA_49",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận nghịch đảo cấp 2",
    difficulty: "Trung bình",
    question: "Tính định thức ma trận A = [[2, 4], [1, 2]] và đưa ra kết luận về ma trận nghịch đảo A⁻¹.",
    options: [
      "det(A) = 0, ma trận A không có nghịch đảo",
      "det(A) = 8, ma trận A có nghịch đảo",
      "det(A) = 4, ma trận A có nghịch đảo",
      "det(A) = -2, ma trận A không có nghịch đảo"
    ],
    correctAnswer: 0,
    explanation: "det(A) = 2(2) - 4(1) = 0. Vì det(A) = 0 nên ma trận A suy biến và không tồn tại ma trận nghịch đảo.",
    tags: ["determinant", "inverse_matrix"]
  },
  {
    id: "modA_50",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Vector và Dot Product",
    difficulty: "Trung bình",
    question: "Cho hai vector u = [a, b] và v = [-b, a]. Tích vô hướng u · v bằng bao nhiêu?",
    options: ["0", "a² + b²", "a² - b²", "2ab"],
    correctAnswer: 0,
    explanation: "u · v = a(-b) + b(a) = -ab + ab = 0.",
    tags: ["vector", "dot_product"]
  }
];
