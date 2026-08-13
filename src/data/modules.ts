import type { ModuleMetadata } from "../types/question";

export const modulesData: ModuleMetadata[] = [
  {
    id: "A",
    code: "Module A",
    name: "Toán & Tư duy định lượng",
    description: "Đại số tuyến tính, ma trận, véc-tơ, giải tích tích phân/đạo hàm, xác suất thống kê cơ bản và định lý Bayes.",
    iconName: "Calculator",
    color: "#4F5FF0",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    totalQuestions: 12,
  },
  {
    id: "B",
    code: "Module B",
    name: "Lập trình & Xử lý dữ liệu",
    description: "Cấu trúc dữ liệu & thuật toán Python, mảng NumPy, xử lý dữ liệu với Pandas, độ phức tạp Big O và tiền xử lý.",
    iconName: "Code2",
    color: "#8B5CF6",
    badgeBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    totalQuestions: 56,
  },
  {
    id: "C",
    code: "Module C",
    name: "Kiến thức AI & Sản phẩm AI",
    description: "Các loại hình học máy (Supervised/Unsupervised/RL), mạng Transformer, LLM, RAG, thị giác máy tính và ứng dụng sản phẩm.",
    iconName: "BrainCircuit",
    color: "#16A34A",
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    totalQuestions: 64,
  },
  {
    id: "D",
    code: "Module D",
    name: "Logic, Đạo đức & Hành vi",
    description: "Tư duy suy luận logic, giải đố IQ, đạo đức AI (bảo mật, thiên vị, bản quyền, trách nhiệm pháp lý) và Human-in-the-loop.",
    iconName: "Scale",
    color: "#D97706",
    badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    totalQuestions: 51,
  },
];
