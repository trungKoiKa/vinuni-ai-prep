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
  },

  // ── 30 Additional Questions (modA_ext_01 -> modA_ext_30) ─────────────────
  {
    id: "modA_ext_01",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ký hiệu ma trận",
    difficulty: "Dễ",
    question: "Ký hiệu nào sau đây biểu diễn tập hợp các ma trận thực có m hàng và n cột?",
    options: [
      "ℝ^(m+n)",
      "ℝ^(m × n)",
      "ℝ^(m,n)",
      "ℂ^(m × n)"
    ],
    correctAnswer: 1,
    explanation: "Theo quy ước ký hiệu toán học phổ biến, ℝ^(m × n) biểu thị tập hợp các ma trận thực có m hàng và n cột.",
    tags: ["matrix", "notation"]
  },
  {
    id: "modA_ext_02",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Chuyển vị ma trận",
    difficulty: "Dễ",
    question: "Chuyển vị của tích hai ma trận (AB)ᵀ bằng biểu thức nào sau đây?",
    options: [
      "Aᵀ Bᵀ",
      "Bᵀ Aᵀ",
      "A Bᵀ",
      "B Aᵀ"
    ],
    correctAnswer: 1,
    explanation: "Phép chuyển vị của tích hai ma trận có tính chất đảo thứ tự: (AB)ᵀ = Bᵀ Aᵀ.",
    tags: ["matrix", "transpose"]
  },
  {
    id: "modA_ext_03",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận trực giao",
    difficulty: "Trung bình",
    question: "Ma trận vuông U được gọi là ma trận trực giao (orthogonal matrix) nếu thỏa mãn điều kiện nào?",
    options: [
      "Uᵀ U = I",
      "Uᵀ U = 0",
      "Uᵀ = U",
      "U U = I"
    ],
    correctAnswer: 0,
    explanation: "Một ma trận vuông U có các cột là các vector trực chuẩn thì được gọi là ma trận trực giao, thỏa mãn Uᵀ U = I.",
    tags: ["matrix", "orthogonal"]
  },
  {
    id: "modA_ext_04",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Vết của ma trận",
    difficulty: "Dễ",
    question: "Vết (trace) của ma trận vuông A, ký hiệu là trace(A), là đại lượng gì?",
    options: [
      "Tích của tất cả các phần tử trên đường chéo chính",
      "Tổng của tất cả các phần tử trên đường chéo chính",
      "Định thức của ma trận A",
      "Trị riêng lớn nhất của ma trận A"
    ],
    correctAnswer: 1,
    explanation: "Vết của một ma trận vuông là tổng của tất cả các phần tử trên đường chéo chính của nó: trace(A) = ∑ a_ii.",
    tags: ["matrix", "trace"]
  },
  {
    id: "modA_ext_05",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Vết của ma trận",
    difficulty: "Trung bình",
    question: "Tính chất nào sau đây của hàm vết (trace) là ĐÚNG?",
    options: [
      "trace(AB) = trace(A) · trace(B)",
      "trace(AB) = trace(BA)",
      "trace(Aᵀ) = -trace(A)",
      "trace(A + B) = trace(A) - trace(B)"
    ],
    correctAnswer: 1,
    explanation: "Một tính chất quan trọng của hàm vết là tính chất hoán vị vòng quanh của tích: trace(AB) = trace(BA).",
    tags: ["matrix", "trace"]
  },
  {
    id: "modA_ext_06",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Chuẩn Frobenius",
    difficulty: "Trung bình",
    question: "Chuẩn Frobenius của một ma trận thực A, ký hiệu là ||A||_F, được tính như thế nào?",
    options: [
      "Trị tuyệt đối của định thức của A",
      "Tổng bình phương của tất cả các phần tử trong A",
      "Căn bậc hai của tổng bình phương tất cả các phần tử của A",
      "Trị riêng lớn nhất của Aᵀ A"
    ],
    correctAnswer: 2,
    explanation: "Chuẩn Frobenius ||A||_F là căn bậc hai của tổng bình phương tất cả các phần tử trong ma trận: √(∑_i ∑_j a_ij²).",
    tags: ["matrix", "norm", "frobenius"]
  },
  {
    id: "modA_ext_07",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận xác định dương",
    difficulty: "Trung bình",
    question: "Ma trận đối xứng thực A được gọi là xác định dương (positive definite) nếu với mọi vector x ≠ 0, ta luôn có:",
    options: [
      "xᵀ A x ≥ 0",
      "xᵀ A x > 0",
      "xᵀ A x < 0",
      "xᵀ A x = 0"
    ],
    correctAnswer: 1,
    explanation: "Định nghĩa ma trận xác định dương là xᵀ A x > 0 với mọi x ≠ 0. Nếu xᵀ A x ≥ 0 thì gọi là nửa xác định dương.",
    tags: ["matrix", "positive_definite"]
  },
  {
    id: "modA_ext_08",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Giải hệ phương trình",
    difficulty: "Dễ",
    question: "Nghiệm x của hệ phương trình tuyến tính Ax = b khi ma trận vuông A khả nghịch là:",
    options: [
      "x = A b",
      "x = b A⁻¹",
      "x = A⁻¹ b",
      "x = (Aᵀ A)⁻¹ b"
    ],
    correctAnswer: 2,
    explanation: "Khi A khả nghịch, ta nhân hai vế của phương trình Ax = b với ma trận nghịch đảo A⁻¹ về phía bên trái để thu được x = A⁻¹ b.",
    tags: ["linear_system", "matrix_inverse"]
  },
  {
    id: "modA_ext_09",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Trị riêng & Vector riêng",
    difficulty: "Trung bình",
    question: "Trị riêng (eigenvalue) λ và vector riêng (eigenvector) x tương ứng của ma trận vuông A thỏa mãn phương trình nào?",
    options: [
      "A x = λ x  (với x ≠ 0)",
      "A x = λ x  (với x = 0)",
      "A λ = x",
      "xᵀ A = λ x"
    ],
    correctAnswer: 0,
    explanation: "Trị riêng và vector riêng thỏa mãn đẳng thức Ax = λx với điều kiện bắt buộc vector riêng x ≠ 0.",
    tags: ["eigenvalue", "eigenvector"]
  },
  {
    id: "modA_ext_10",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Trị riêng & Vết ma trận",
    difficulty: "Trung bình",
    question: "Tổng các trị riêng của một ma trận vuông bất kỳ luôn bằng đại lượng nào?",
    options: [
      "Định thức của ma trận đó",
      "Vết (trace) của ma trận đó",
      "Chuẩn Frobenius của ma trận đó",
      "Trị riêng lớn nhất"
    ],
    correctAnswer: 1,
    explanation: "Tổng các trị riêng của một ma trận vuông bất kỳ luôn bằng vết (trace) của ma trận đó.",
    tags: ["eigenvalue", "trace"]
  },
  {
    id: "modA_ext_11",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Trung bình",
    question: "Gradient của một hàm số f(x): ℝⁿ → ℝ theo vector cột x là một vector thuộc không gian nào?",
    options: [
      "ℝ^(1 × n)",
      "ℝⁿ",
      "ℝ^(n × n)",
      "ℝ"
    ],
    correctAnswer: 1,
    explanation: "Theo định nghĩa, gradient của hàm số f(x) theo vector cột x ∈ ℝⁿ là một vector cột có cùng số chiều n thuộc ℝⁿ.",
    tags: ["gradient", "multivariable"]
  },
  {
    id: "modA_ext_12",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận Hessian",
    difficulty: "Trung bình",
    question: "Ma trận Hessian (gradient bậc hai) của một hàm số f(x): ℝⁿ → ℝ là một ma trận đối xứng có kích thước bao nhiêu?",
    options: [
      "1 x n",
      "n x 1",
      "n x n",
      "n x m"
    ],
    correctAnswer: 2,
    explanation: "Ma trận Hessian chứa tất cả các đạo hàm riêng bậc hai của hàm số và có kích thước vuông n × n.",
    tags: ["hessian", "gradient"]
  },
  {
    id: "modA_ext_13",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Trung bình",
    question: "Gradient của hàm số f(x) = aᵀ x theo vector x là:",
    options: ["x", "a", "aᵀ", "2a"],
    correctAnswer: 1,
    explanation: "Đạo hàm riêng theo từng x_i của aᵀ x = ∑ a_i x_i là a_i, do đó gradient theo vector x chính là vector hằng số a.",
    tags: ["gradient", "calculus"]
  },
  {
    id: "modA_ext_14",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Khó",
    question: "Gradient của hàm số f(x) = xᵀ A x theo vector x (với A là ma trận đối xứng) là:",
    options: [
      "A x",
      "2 A x",
      "xᵀ A",
      "Aᵀ x"
    ],
    correctAnswer: 1,
    explanation: "Gradient của dạng toàn phương xᵀ A x khi ma trận A đối xứng là 2 A x.",
    tags: ["gradient", "quadratic_form"]
  },
  {
    id: "modA_ext_15",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient",
    difficulty: "Khó",
    question: "Gradient của hàm số f(x) = ||Ax - b||₂² theo vector x bằng biểu thức nào sau đây?",
    options: [
      "2 Aᵀ (Ax - b)",
      "2 A (Ax - b)",
      "Aᵀ (Ax - b)",
      "2 (Ax - b)"
    ],
    correctAnswer: 0,
    explanation: "Khai triển f(x) = xᵀ Aᵀ A x - 2 bᵀ A x + bᵀ b. Lấy gradient theo x ta được 2 Aᵀ A x - 2 Aᵀ b = 2 Aᵀ (Ax - b).",
    tags: ["gradient", "least_squares"]
  },
  {
    id: "modA_ext_16",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient theo ma trận",
    difficulty: "Khó",
    question: "Gradient của hàm số f(X) = trace(AX) theo ma trận X (với kích thước phù hợp) là:",
    options: [
      "A",
      "Aᵀ",
      "I",
      "trace(A)"
    ],
    correctAnswer: 1,
    explanation: "Đạo hàm ma trận của trace(AX) theo ma trận X thu được ma trận Aᵀ.",
    tags: ["matrix_calculus", "gradient"]
  },
  {
    id: "modA_ext_17",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Kiểm tra Gradient",
    difficulty: "Trung bình",
    question: "Trong thực nghiệm, việc kiểm tra gradient (numerical gradient) sử dụng xấp xỉ đạo hàm dựa trên công thức sai phân nào để có độ chính xác cao nhất?",
    options: [
      "Sai phân tiến: (f(x+h) - f(x)) / h",
      "Sai phân lùi: (f(x) - f(x-h)) / h",
      "Sai phân trung tâm: (f(x+h) - f(x-h)) / (2h)",
      "Sai phân bậc hai: (f(x+h) + f(x-h) - 2f(x)) / h²"
    ],
    correctAnswer: 2,
    explanation: "Sai phân trung tâm (central difference) xấp xỉ đạo hàm tốt hơn sai phân tiến/lùi vì sai số có bậc O(h²) thay vì O(h).",
    tags: ["numerical_gradient", "calculus"]
  },
  {
    id: "modA_ext_18",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Biến ngẫu nhiên",
    difficulty: "Dễ",
    question: "Biến ngẫu nhiên có tập hợp các giá trị có thể nhận là hữu hạn hoặc đếm được được gọi là:",
    options: [
      "Biến ngẫu nhiên liên tục",
      "Biến ngẫu nhiên rời rạc",
      "Biến ngẫu nhiên chuẩn",
      "Biến ngẫu nhiên độc lập"
    ],
    correctAnswer: 1,
    explanation: "Một biến ngẫu nhiên có thể nhận các giá trị rời rạc (hữu hạn hoặc đếm được) được gọi là biến ngẫu nhiên rời rạc.",
    tags: ["probability", "random_variable"]
  },
  {
    id: "modA_ext_19",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Xác suất & Thống kê",
    difficulty: "Dễ",
    question: "Đại lượng nào đo lường mức độ biến thiên đồng thời (mối quan hệ tuyến tính) của hai biến ngẫu nhiên?",
    options: [
      "Kỳ vọng (Expectation)",
      "Phương sai (Variance)",
      "Hiệp phương sai (Covariance)",
      "Độ lệch chuẩn (Standard Deviation)"
    ],
    correctAnswer: 2,
    explanation: "Hiệp phương sai (Covariance) đo lường mối quan hệ tuyến tính và mức độ biến thiên cùng nhau của hai biến ngẫu nhiên.",
    tags: ["covariance", "statistics"]
  },
  {
    id: "modA_ext_20",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ma trận hiệp phương sai",
    difficulty: "Trung bình",
    question: "Ma trận hiệp phương sai của một vector ngẫu nhiên x có tính chất đặc biệt nào sau đây?",
    options: [
      "Luôn là ma trận phản đối xứng",
      "Luôn là ma trận nửa xác định dương và đối xứng",
      "Luôn là ma trận đường chéo",
      "Luôn có định thức bằng 1"
    ],
    correctAnswer: 1,
    explanation: "Ma trận hiệp phương sai luôn là ma trận đối xứng và nửa xác định dương.",
    tags: ["covariance_matrix", "properties"]
  },
  {
    id: "modA_ext_21",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Định lý Bayes",
    difficulty: "Dễ",
    question: "Công thức Bayes để tính xác suất hậu nghiệm p(c|x) dựa trên các xác suất đã biết là:",
    options: [
      "p(c|x) = (p(x|c) · p(c)) / p(x)",
      "p(c|x) = (p(x|c) · p(x)) / p(c)",
      "p(c|x) = p(c|x) · p(x)",
      "p(c|x) = p(x) / p(c)"
    ],
    correctAnswer: 0,
    explanation: "Công thức Bayes: p(c|x) = (p(x|c) · p(c)) / p(x) là nền tảng của các bài toán học máy thống kê.",
    tags: ["bayes_theorem", "probability"]
  },
  {
    id: "modA_ext_22",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Xác suất độc lập",
    difficulty: "Dễ",
    question: "Khi hai biến ngẫu nhiên x và y độc lập với nhau, xác suất đồng thời p(x, y) bằng:",
    options: [
      "p(x) + p(y)",
      "p(x) · p(y)",
      "p(x|y) + p(y|x)",
      "p(x) / p(y)"
    ],
    correctAnswer: 1,
    explanation: "Hai biến ngẫu nhiên độc lập khi và chỉ khi xác suất đồng thời bằng tích các xác suất biên: p(x, y) = p(x) · p(y).",
    tags: ["probability", "independence"]
  },
  {
    id: "modA_ext_23",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Phân phối Gaussian",
    difficulty: "Dễ",
    question: "Hàm mật độ xác suất (pdf) của phân phối chuẩn một chiều (Gaussian distribution) phụ thuộc vào hai tham số nào?",
    options: [
      "Kỳ vọng (μ) và phương sai (σ²)",
      "Kỳ vọng (μ) và trung vị (median)",
      "Phương sai (σ²) và hệ số bất đối xứng",
      "Giá trị nhỏ nhất và lớn nhất"
    ],
    correctAnswer: 0,
    explanation: "Phân phối chuẩn hoàn toàn được xác định bởi kỳ vọng (μ) xác định tâm và phương sai (σ²) xác định độ rộng của phân phối.",
    tags: ["gaussian", "probability"]
  },
  {
    id: "modA_ext_24",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "MLE",
    difficulty: "Dễ",
    question: "Ước lượng hợp lý cực đại (Maximum Likelihood Estimation - MLE) tìm tham số mô hình bằng cách tối đa hóa đại lượng nào?",
    options: [
      "Xác suất hậu nghiệm p(θ|X)",
      "Hàm hợp lý p(X|θ)",
      "Xác suất tiên nghiệm p(θ)",
      "Hàm entropy chéo"
    ],
    correctAnswer: 1,
    explanation: "MLE đi tìm tham số θ sao cho xác suất xảy ra của dữ liệu huấn luyện X là lớn nhất, tức là tối đa hóa hàm hợp lý p(X|θ).",
    tags: ["mle", "estimation"]
  },
  {
    id: "modA_ext_25",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "MLE & Log-Likelihood",
    difficulty: "Trung bình",
    question: "Tại sao trong ước lượng tham số (MLE & MAP), người ta thường tối thiểu hóa trừ log-likelihood thay vì tối đa hóa trực tiếp hàm likelihood?",
    options: [
      "Để biến phép cộng các xác suất thành phép nhân",
      "Để biến tích các xác suất độc lập thành tổng log, tránh hiện tượng tràn số dưới (underflow) và dễ lấy đạo hàm",
      "Vì hàm log làm thay đổi vị trí điểm cực trị",
      "Để mô hình tuyến tính hóa dữ liệu phi tuyến"
    ],
    correctAnswer: 1,
    explanation: "Likelihood là tích của nhiều xác suất nhỏ (dễ gây underflow). Hàm log biến tích thành tổng và là hàm đơn điệu tăng nên giữ nguyên vị trí cực trị, thêm dấu âm để chuyển bài toán tối đa thành tối thiểu.",
    tags: ["mle", "log_likelihood"]
  },
  {
    id: "modA_ext_26",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "MAP",
    difficulty: "Trung bình",
    question: "Ước lượng hậu nghiệm cực đại (Maximum A Posteriori - MAP) khác với MLE ở điểm cốt lõi nào?",
    options: [
      "MAP không sử dụng dữ liệu huấn luyện",
      "MAP kết hợp thêm thông tin về phân phối tiên nghiệm (prior) p(θ) của tham số",
      "MAP luôn cho kết quả giống MLE",
      "MAP chỉ áp dụng được cho phân phối chuẩn"
    ],
    correctAnswer: 1,
    explanation: "Công thức MAP: θ = arg max p(X|θ)p(θ). Khác với MLE, MAP tích hợp thêm phân phối tiên nghiệm p(θ) của tham số.",
    tags: ["map", "estimation"]
  },
  {
    id: "modA_ext_27",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "MAP vs MLE",
    difficulty: "Trung bình",
    question: "Khi nào ước lượng MAP cho kết quả hoàn toàn trùng khớp với ước lượng MLE?",
    options: [
      "Khi phân phối tiên nghiệm p(θ) là phân phối chuẩn",
      "Khi phân phối tiên nghiệm p(θ) là phân phối đều (uniform distribution) trên tập xác định",
      "Khi số lượng điểm dữ liệu tiến dần về 0",
      "Khi tham số λ của tiên nghiệm rất lớn"
    ],
    correctAnswer: 1,
    explanation: "Khi p(θ) là phân phối đều (là hằng số với mọi θ), việc tối đa hóa p(X|θ)p(θ) tương đương với tối đa hóa p(X|θ) của MLE.",
    tags: ["map", "mle"]
  },
  {
    id: "modA_ext_28",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Conjugate Prior",
    difficulty: "Trung bình",
    question: "Tiên nghiệm liên hợp (conjugate prior) là gì?",
    options: [
      "Là tiên nghiệm có dạng đồ thị đối xứng qua trục tung",
      "Là tiên nghiệm mà khi kết hợp với hàm hợp lý (likelihood) sẽ cho ra phân phối hậu nghiệm (posterior) cùng họ với phân phối tiên nghiệm",
      "Là tiên nghiệm có phương sai bằng 0",
      "Là tiên nghiệm luôn bằng 1"
    ],
    correctAnswer: 1,
    explanation: "Định nghĩa tiên nghiệm liên hợp là phân phối tiên nghiệm và phân phối hậu nghiệm có cùng một dạng toán học (họ phân phối), giúp việc tính toán cực kỳ đơn giản.",
    tags: ["conjugate_prior", "bayesian"]
  },
  {
    id: "modA_ext_29",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Phân phối Beta & Bernoulli",
    difficulty: "Trung bình",
    question: "Trong bài toán tung đồng xu với phân phối Bernoulli, phân phối tiên nghiệm liên hợp thường được chọn cho tham số λ là phân phối nào?",
    options: [
      "Phân phối chuẩn (Gaussian)",
      "Phân phối đều (Uniform)",
      "Phân phối Beta",
      "Phân phối Poisson"
    ],
    correctAnswer: 2,
    explanation: "Phân phối Beta là tiên nghiệm liên hợp của phân phối Bernoulli. Khi kết hợp likelihood Bernoulli và prior Beta, posterior thu được cũng là phân phối Beta.",
    tags: ["beta_distribution", "bernoulli"]
  },
  {
    id: "modA_ext_30",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ước lượng MAP",
    difficulty: "Khó",
    question: "Nghiệm MAP của tham số λ trong phân phối Bernoulli với tiên nghiệm Beta(α, β) khi quan sát được n mặt ngửa và m mặt sấp là:",
    options: [
      "n / (n + m)",
      "(n + α) / (n + m + α + β)",
      "(n + α - 1) / (n + m + α + β - 2)",
      "(α - 1) / (α + β - 2)"
    ],
    correctAnswer: 2,
    explanation: "Theo kết quả giải bài toán tối ưu MAP cho Bernoulli-Beta, nghiệm MAP thu được là (n + α - 1) / ((n + m) + α + β - 2).",
    tags: ["map", "beta_distribution"]
  },

  // ── 15 New Module A Questions (modA_ext_31 -> modA_ext_45) ────────────────
  {
    id: "modA_ext_31",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Closed-form Solution",
    difficulty: "Khó",
    question: "Nghiệm dạng đóng (closed-form solution) của bài toán hồi quy tuyến tính tối thiểu hóa hàm mất mát (không có regularization) là:",
    options: [
      "w = (X Xᵀ)⁻¹ X y",
      "w = (X Xᵀ)† X y",
      "w = X y",
      "w = (Xᵀ X)⁻¹ y"
    ],
    correctAnswer: 1,
    explanation: "Nghiệm tổng quát là w = (X Xᵀ)† X y sử dụng giả nghịch đảo Moore-Penrose, phòng trường hợp ma trận X Xᵀ không khả nghịch.",
    tags: ["linear_regression", "closed_form"]
  },
  {
    id: "modA_ext_32",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Ridge Regression",
    difficulty: "Trung bình",
    question: "Nghiệm của hồi quy Ridge giúp tránh ma trận không khả nghịch nhờ cộng thêm thành phần nào vào ma trận X Xᵀ?",
    options: [
      "Cộng thêm ma trận đơn vị I nhân với tham số λ",
      "Nhân ma trận với hằng số N",
      "Trừ đi một ma trận ngẫu nhiên",
      "Thay thế các phần tử trên đường chéo bằng 0"
    ],
    correctAnswer: 0,
    explanation: "Nghiệm của hồi quy Ridge là w = (X Xᵀ + λ I)⁻¹ X y. Ma trận (X Xᵀ + λ I) luôn là ma trận xác định dương và khả nghịch với mọi λ > 0.",
    tags: ["ridge_regression", "matrix_inverse"]
  },
  {
    id: "modA_ext_33",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Voronoi Diagram",
    difficulty: "Trung bình",
    question: "Voronoi diagram trong toán học liên quan đến K-means như thế nào?",
    options: [
      "Nó định nghĩa cách tính đạo hàm của tâm cụm",
      "Nó mô tả việc phân chia không gian thành các vùng (đa giác/đa diện) dựa trên khoảng cách tới điểm tâm gần nhất",
      "Nó là một dạng của mạng neuron",
      "Nó dùng để chuẩn hóa vector đặc trưng"
    ],
    correctAnswer: 1,
    explanation: "Voronoi diagram phân chia không gian thành các đa giác/đa diện lãnh hải bao quanh các tâm cụm, điểm bất kỳ trong đa diện đó sẽ gần tâm cụm đó hơn các tâm khác.",
    tags: ["voronoi", "k_means", "geometry"]
  },
  {
    id: "modA_ext_34",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient Descent Objective",
    difficulty: "Dễ",
    question: "Mục tiêu chính của thuật toán Gradient Descent (GD) là gì?",
    options: [
      "Tìm cực trị của một hàm số bằng cách đi ngược hướng với vector gradient",
      "Tìm cực tiểu của một hàm mất mát bằng cách cập nhật tham số theo hướng ngược với hướng của gradient ∇J(θ)",
      "Tính toán trực tiếp nghiệm dạng đóng của mô hình",
      "Tăng tốc độ học của mạng neuron lên vô hạn"
    ],
    correctAnswer: 1,
    explanation: "GD là thuật toán tối ưu hóa lặp, tìm cực tiểu bằng cách đi ngược hướng gradient (hướng dốc nhất lên trên) của hàm mục tiêu.",
    tags: ["gradient_descent", "optimization"]
  },
  {
    id: "modA_ext_35",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Gradient Descent Formula",
    difficulty: "Dễ",
    question: "Công thức cập nhật tham số trong thuật toán Gradient Descent cơ bản là:",
    options: [
      "θ = θ + η ∇J(θ)",
      "θ = θ - η ∇J(θ)",
      "θ = η ∇J(θ)",
      "θ = θ - ∇J(θ) / η"
    ],
    correctAnswer: 1,
    explanation: "Công thức cập nhật: θ_{t+1} = θ_t - η ∇J(θ), trong đó η là tốc độ học (learning rate).",
    tags: ["gradient_descent", "formula"]
  },
  {
    id: "modA_ext_36",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Learning Rate",
    difficulty: "Dễ",
    question: "Tốc độ học (learning rate) η trong Gradient Descent kiểm soát điều gì?",
    options: [
      "Độ lớn của bước nhảy sau mỗi lần cập nhật tham số",
      "Số lượng đặc trưng đầu vào",
      "Kích thước của tập dữ liệu huấn luyện",
      "Số lượng tầng ẩn trong mạng neuron"
    ],
    correctAnswer: 0,
    explanation: "Tốc độ học η quyết định độ dài của bước cập nhật. Nếu η quá lớn có thể gây phân kỳ, quá nhỏ sẽ làm hội tụ rất chậm.",
    tags: ["learning_rate", "gradient_descent"]
  },
  {
    id: "modA_ext_37",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Local Minimum",
    difficulty: "Trung bình",
    question: "Hiện tượng gì xảy ra khi hòn bi lăn xuống thung lũng trong GD nhưng gặp phải một hố nhỏ trên sườn dốc?",
    options: [
      "Nó sẽ vượt qua dễ dàng để xuống đáy thung lũng",
      "Nó có thể bị kẹt lại ở hố nhỏ đó, tương ứng với việc rơi vào cực tiểu địa phương (local minimum)",
      "Nó sẽ nảy ngược lên đỉnh dốc",
      "Nó dừng hoạt động lập tức"
    ],
    correctAnswer: 1,
    explanation: "Các hố nhỏ trên sườn dốc tương ứng với cực tiểu địa phương. GD thông thường rất dễ bị kẹt tại các điểm này và không tìm được cực tiểu toàn cục.",
    tags: ["local_minimum", "gradient_descent"]
  },
  {
    id: "modA_ext_38",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Momentum",
    difficulty: "Trung bình",
    question: "Thuật toán Gradient Descent với Momentum giải quyết nhược điểm gì của GD thông thường?",
    options: [
      "Giúp giảm số lượng tham số cần tối ưu",
      "Tích lũy vận tốc từ các bước cập nhật trước để giúp vượt qua các cực tiểu địa phương nông và giảm dao động zigzag ở các sườn dốc hẹp",
      "Loại bỏ hoàn toàn sự phụ thuộc vào tốc độ học",
      "Tự động tính toán gradient xấp xỉ chính xác"
    ],
    correctAnswer: 1,
    explanation: "Momentum mô phỏng quán tính vật lý, giúp hòn bi tích lũy đà lăn để vượt qua dốc thoai thoải và lao nhanh hơn về phía cực tiểu toàn cục.",
    tags: ["momentum", "gradient_descent"]
  },
  {
    id: "modA_ext_39",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "NAG",
    difficulty: "Khó",
    question: "Đặc điểm cải tiến của thuật toán Nesterov Accelerated Gradient (NAG) so với Momentum thông thường là gì?",
    options: [
      "NAG không cần tính gradient của hàm số",
      "NAG tính gradient tại vị trí dự đoán tương lai (θ - γ v_old) thay vì vị trí hiện tại, giúp phanh kịp thời khi sắp vượt qua cực tiểu",
      "NAG có tốc độ học thay đổi ngẫu nhiên",
      "NAG loại bỏ hoàn toàn tham số quán tính γ"
    ],
    correctAnswer: 1,
    explanation: "NAG có cơ chế đi trước một bước để tính gradient tại điểm tiếp theo ước lượng bằng quán tính, giúp hướng đi mượt mà và hội tụ nhanh hơn.",
    tags: ["nag", "momentum", "optimization"]
  },
  {
    id: "modA_ext_40",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "SGD vs Batch GD",
    difficulty: "Trung bình",
    question: "Sự khác biệt cốt lõi giữa Batch Gradient Descent và Stochastic Gradient Descent (SGD) là gì?",
    options: [
      "Batch GD chạy nhanh hơn SGD rất nhiều",
      "Batch GD tính toán gradient dựa trên toàn bộ tập dữ liệu huấn luyện ở mỗi bước; SGD chỉ tính gradient dựa trên duy nhất một điểm dữ liệu ngẫu nhiên tại mỗi bước",
      "SGD luôn cho nghiệm chính xác tuyệt đối hơn Batch GD",
      "Batch GD không cần khai báo tốc độ học"
    ],
    correctAnswer: 1,
    explanation: "SGD giảm thiểu khối lượng tính toán ở mỗi bước bằng cách chỉ sử dụng một điểm dữ liệu duy nhất, rất hữu ích cho tập dữ liệu khổng lồ.",
    tags: ["sgd", "batch_gd"]
  },
  {
    id: "modA_ext_41",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Mini-batch GD",
    difficulty: "Dễ",
    question: "Mini-batch Gradient Descent hoạt động như thế nào?",
    options: [
      "Tính toán gradient dựa trên một nhóm nhỏ dữ liệu (batch) có kích thước k mẫu (1 < k < N)",
      "Chỉ cập nhật một nửa số lượng trọng số",
      "Chỉ sử dụng 10 mẫu dữ liệu cho toàn bộ quá trình huấn luyện",
      "Huấn luyện luân phiên giữa KNN và Gradient Descent"
    ],
    correctAnswer: 0,
    explanation: "Mini-batch GD là sự dung hòa giữa Batch GD và SGD, tính gradient trên một nhóm nhỏ mẫu dữ liệu (thường từ 32 đến 512 mẫu) để tận dụng sức mạnh tính toán song song của GPU.",
    tags: ["mini_batch_gd"]
  },
  {
    id: "modA_ext_42",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "ReLU Derivative",
    difficulty: "Dễ",
    question: "Đạo hàm của hàm kích hoạt ReLU f(z) = max(z, 0) tại điểm z > 0 là:",
    options: ["0", "1", "z", "0.5"],
    correctAnswer: 1,
    explanation: "Đạo hàm của ReLU là 1 khi z > 0, và bằng 0 khi z < 0.",
    tags: ["relu", "derivative"]
  },
  {
    id: "modA_ext_43",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Backpropagation",
    difficulty: "Trung bình",
    question: "Thuật toán lan truyền ngược (Backpropagation) thực chất là ứng dụng của quy tắc toán học nào để tính gradient của hàm mất mát theo từng trọng số trong mạng?",
    options: [
      "Quy tắc tích",
      "Quy tắc chuỗi (Chain Rule) cho đạo hàm hàm hợp",
      "Quy tắc đạo hàm riêng của ma trận nghịch đảo",
      "Định lý giới hạn trung tâm"
    ],
    correctAnswer: 1,
    explanation: "Backpropagation truyền lỗi ngược từ tầng cuối cùng về các tầng trước bằng cách áp dụng liên tiếp quy tắc chuỗi để tính đạo hàm riêng cho các trọng số ở tầng sâu.",
    tags: ["backpropagation", "chain_rule"]
  },
  {
    id: "modA_ext_44",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Hadamard Product",
    difficulty: "Trung bình",
    question: "Ký hiệu ∘ (tích Hadamard) trong công thức tính toán Backpropagation đại diện cho phép toán nào?",
    options: [
      "Phép nhân ma trận thông thường",
      "Phép nhân từng phần tử tương ứng của hai ma trận/vector có cùng kích thước (element-wise product)",
      "Phép cộng ma trận",
      "Phép nhân tích vô hướng"
    ],
    correctAnswer: 1,
    explanation: "Tích Hadamard (Hadamard product) ký hiệu ∘ đại diện cho phép nhân từng thành phần tương ứng của hai vector/ma trận.",
    tags: ["hadamard_product", "matrix_operations"]
  },
  {
    id: "modA_ext_45",
    module: "A",
    moduleName: "Toán & Tư duy định lượng",
    topic: "Matrix Shape in MLP",
    difficulty: "Dễ",
    question: "Trong lan truyền thuận của MLP, ma trận đặc trưng đầu vào X có shape (N, d₀) nhân với ma trận trọng số W₁ có shape (d₀, d₁) sẽ cho ra ma trận Z₁ có kích thước bao nhiêu?",
    options: [
      "(d₀, d₁)",
      "(N, d₁)",
      "(N, d₀)",
      "(d₁, N)"
    ],
    correctAnswer: 1,
    explanation: "Phép nhân ma trận kích thước (N, d₀) nhân với (d₀, d₁) cho ra ma trận có kích thước (N, d₁) theo quy tắc nhân ma trận.",
    tags: ["matrix_multiplication", "mlp"]
  }
];
