import type { Question } from "../../types/question";

export const moduleCQuestions: Question[] = [
  // ── Existing 12 questions ─────────────────────────────────────────────────
  {
    id: "modC_01",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Kiến trúc Mạng nơ-ron",
    difficulty: "Dễ",
    question: "Kiến trúc mạng nơ-ron nào dưới đây đột phá nhất trong xử lý ngôn ngữ tự nhiên (NLP) và là nền tảng của các mô hình ngôn ngữ lớn như ChatGPT, Claude, Gemini?",
    options: ["Transformer (Self-Attention)", "Convolutional Neural Network (CNN)", "Multilayer Perceptron (MLP)", "Recurrent Neural Network (RNN) thuần"],
    correctAnswer: 0,
    explanation: "Kiến trúc Transformer với cơ chế Self-Attention (được giới thiệu năm 2017) cho phép tính toán song song hiệu quả và nắm bắt ngữ cảnh khoảng cách xa trong văn bản.",
    tags: ["Transformer", "LLM", "NLP", "Kiến trúc AI"]
  },
  {
    id: "modC_02",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Phân loại Học máy",
    difficulty: "Dễ",
    question: "Phương pháp học máy nào dưới đây huấn luyện mô hình dựa trên các cặp dữ liệu vào và nhãn đầu ra chính xác (labeled data)?",
    options: ["Học có giám sát (Supervised Learning)", "Học không giám sát (Unsupervised Learning)", "Học tăng cường (Reinforcement Learning)", "Học tự giám sát (Self-Supervised Learning)"],
    correctAnswer: 0,
    explanation: "Học có giám sát (Supervised Learning) yêu cầu tập dữ liệu huấn luyện có chứa nhãn đúng (ground truth) cho từng mẫu đầu vào.",
    tags: ["Supervised Learning", "Machine Learning"]
  },
  {
    id: "modC_03",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Đánh giá mô hình Machine Learning",
    difficulty: "Trung bình",
    question: "Trong bài toán chẩn đoán y khoa phát hiện ung thư từ hình ảnh X-quang, chỉ số đánh giá nào quan trọng nhất cần được tối ưu để tránh bỏ sót bệnh nhân?",
    options: ["Recall (Độ nhạy)", "Precision (Độ chính xác nhãn)", "Accuracy (Độ chính xác tổng)", "F1-Score"],
    correctAnswer: 0,
    explanation: "Trong y tế, âm tính giả (False Negative - bỏ sót người mắc bệnh) là cực kỳ nguy hiểm. Tối ưu Recall = TP / (TP + FN) giúp giảm thiểu số ca bị bỏ sót.",
    tags: ["Evaluation Metrics", "Recall", "Medical AI"]
  },
  {
    id: "modC_04",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Sản phẩm AI & Thị giác máy tính",
    difficulty: "Trung bình",
    question: "Tình huống: Một doanh nghiệp xe tự lái thử nghiệm hệ thống nhận diện biển báo giao thông trong điều kiện thời tiết sương mù và mưa bão. Mô hình hoạt động rất tốt ban ngày nhưng nhận diện sai nhiều biển báo ban đêm. Nguyên nhân chính là gì?",
    options: ["Data Drift / Domain Shift: Tập dữ liệu huấn luyện thiếu mẫu ảnh chụp ban đêm và thời tiết xấu.", "Mô hình bị quá khớp (Overfitting) trên toàn bộ không gian dữ liệu.", "Mạng CNN không thể xử lý ảnh màu RGB.", "Hệ thống xe tự lái thiếu thuật toán sắp xếp mảng."],
    correctAnswer: 0,
    explanation: "Hiện tượng Data Drift / Domain Shift xảy ra khi phân bố dữ liệu thực tế (ảnh đêm/mưa) khác biệt lớn so với phân bố dữ liệu huấn luyện (ảnh ngày nắng).",
    tags: ["Data Drift", "Computer Vision", "Autonomous Driving", "Sản phẩm AI"]
  },
  {
    id: "modC_05",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Generative AI & LLM",
    difficulty: "Trung bình",
    question: "Kỹ thuật RAG (Retrieval-Augmented Generation) được ứng dụng trong các sản phẩm Chatbot doanh nghiệp nhằm giải quyết vấn đề cốt lõi nào của LLM?",
    options: ["Giảm hiện tượng ảo giác (Hallucination) và cập nhật kiến thức mới từ cơ sở dữ liệu nội bộ mà không cần huấn luyện lại toàn bộ mô hình.", "Tăng tốc độ sinh từ (token generation speed) lên 100 lần.", "Thay thế hoàn toàn kiến trúc Transformer bằng bảng băm.", "Nén dung lượng bộ nhớ GPU của mô hình xuống dưới 1MB."],
    correctAnswer: 0,
    explanation: "RAG kết hợp truy xuất văn bản liên quan từ cơ sở dữ liệu (vector DB) và đưa vào prompt của LLM, giúp câu trả lời chính xác, bám sát dữ liệu thực tế.",
    tags: ["RAG", "LLM", "Hallucination", "AI Product"]
  },
  {
    id: "modC_06",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Đạo đức AI & Thiên vị (Bias)",
    difficulty: "Khó",
    question: "Tình huống: Một công ty tài chính phát triển hệ thống AI chấm điểm tín dụng tự động để duyệt khoản vay ngân hàng. Sau khi triển khai, người ta phát hiện hệ thống liên tục từ chối hồ sơ của phụ nữ thuộc nhóm yếu thế dù lịch sử tài chính của họ tương đương nam giới. Đây là biểu hiện của vấn đề gì và giải pháp khắc phục là gì?",
    options: ["Algorithmic Bias (Thiên vị thuật toán) do dữ liệu lịch sử chứa định kiến nhân văn; giải pháp là kiểm toán dữ liệu (data audit), loại bỏ biến nhạy cảm và áp dụng Fairness Constraints.", "Overfitting mô hình; giải pháp là tăng số lượng epoch huấn luyện.", "Data Leakage; giải pháp là chia lại tập Train/Test theo tỷ lệ 50/50.", "Lỗi phần cứng máy chủ GPU; giải pháp là nâng cấp linh kiện."],
    correctAnswer: 0,
    explanation: "Dữ liệu lịch sử chứa định kiến xã hội dẫn đến thiên vị thuật toán. Việc khắc phục đòi hỏi kiểm toán dữ liệu, cân bằng tập mẫu và áp dụng các tiêu chí công bằng (fairness metrics).",
    tags: ["AI Ethics", "Algorithmic Bias", "Fairness", "Ethics Scenario"]
  },
  {
    id: "modC_07",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "RLHF & Căn chỉnh mô hình",
    difficulty: "Khó",
    question: "Phương pháp RLHF (Reinforcement Learning from Human Feedback) trong việc căn chỉnh các mô hình như InstructGPT/ChatGPT hoạt động theo thứ tự các bước chính nào?",
    options: ["Supervised Fine-Tuning (SFT) → Huấn luyện Mô hình Phần thưởng (Reward Model) từ so sánh của con người → Tối ưu hóa chính sách bằng PPO.", "Pre-training → Quantization → Pruning → Deployment.", "Chỉ thu thập dữ liệu con người rồi áp dụng Linear Regression.", "Dùng AI này tự tạo bài test cho AI khác mà không cần phản hồi của con người."],
    correctAnswer: 0,
    explanation: "Quy trình RLHF gồm 3 bước: 1) SFT trên prompt mẫu, 2) Huấn luyện Reward Model dựa trên xếp hạng phản hồi của con người, 3) Dùng PPO cập nhật trọng số LLM.",
    tags: ["RLHF", "PPO", "Alignment", "LLM"]
  },
  {
    id: "modC_08",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Hệ thống khuyến nghị (Recommender Systems)",
    difficulty: "Khó",
    question: "Vấn đề 'Cold Start Problem' trong các hệ thống gợi ý sản phẩm (như Netflix, Spotify, thương mại điện tử) đề cập đến thách thức nào?",
    options: ["Khó khăn khi đưa ra gợi ý chính xác cho người dùng mới hoặc sản phẩm mới chưa có lịch sử tương tác.", "Hệ thống bị sập máy chủ khi có hàng triệu truy cập cùng lúc.", "Độ trễ quá lớn khi tính toán ma trận phân rã SVD.", "Thuật toán bị lặp lại duy nhất một nội dung gợi ý."],
    correctAnswer: 0,
    explanation: "Cold Start xảy ra khi chưa có đủ dữ liệu tương tác (clicks, ratings) cho item/user mới, giải pháp là kết hợp Content-Based filtering hoặc thông tin khảo sát ban đầu.",
    tags: ["Recommender System", "Cold Start", "Sản phẩm AI"]
  },
  {
    id: "modC_09",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Cơ sở dữ liệu Véc-tơ (Vector Databases)",
    difficulty: "Dễ",
    question: "Các ứng dụng AI hiện đại (như RAG, tìm kiếm tương đồng hình ảnh/văn bản) thường lưu trữ và truy vấn vectơ embedding bằng loại cơ sở dữ liệu chuyên dụng nào?",
    options: ["Vector Database (như Pinecone, Milvus, Chroma, Qdrant)", "Relational Database thuần (như SQLite không cài extensión)", "File văn bản txt lưu trên ổ đĩa", "Bảng tính Microsoft Excel"],
    correctAnswer: 0,
    explanation: "Vector Database chuyên dụng được tối ưu hóa cho phép tìm kiếm láng giềng gần nhất (ANN - Approximate Nearest Neighbor) trên dữ liệu nhiều chiều.",
    tags: ["Vector DB", "Embeddings", "Sản phẩm AI"]
  },
  {
    id: "modC_10",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Tinh chỉnh tham số hiệu quả (PEFT / LoRA)",
    difficulty: "Khó",
    question: "Phương pháp LoRA (Low-Rank Adaptation) trong fine-tuning các mô hình ngôn ngữ lớn giúp giảm đáng kể chi phí tính toán bằng cách nào?",
    options: ["Đóng băng (freeze) trọng số gốc của LLM và chèn thêm ma trận hạng thấp (low-rank matrices) có thể huấn luyện vào các lớp Attention.", "Nén ảnh đầu vào xuống kích thước 1x1 pixel.", "Xóa bớt 99% từ vựng trong bảng Dictionary.", "Chuyển đổi toàn bộ code Python sang C++ thủ công."],
    correctAnswer: 0,
    explanation: "LoRA giữ cố định trọng số mô hình lớn pre-trained và bổ sung ma trận rank thấp W = W_0 + B A, giúp giảm hơn 90% số lượng tham số cần cập nhật.",
    tags: ["LoRA", "PEFT", "Fine-Tuning", "LLM"]
  },
  {
    id: "modC_11",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Thị giác máy tính (YOLO Object Detection)",
    difficulty: "Trung bình",
    question: "Thuật toán YOLO (You Only Look Once) nổi tiếng trong bài toán phát hiện vật thể (Object Detection) vì ưu điểm vượt trội nào?",
    options: ["Dự đoán tọa độ Bounding Box và nhãn lớp trong duy nhất một lần duyệt mạng (Real-time speed).", "Chỉ nhận diện được 1 vật thể duy nhất trong cả bức ảnh.", "Yêu cầu ảnh chụp phải có độ phân giải tối thiểu 8K.", "Không cần dùng mạng nơ-ron sâu."],
    correctAnswer: 0,
    explanation: "YOLO coi bài toán phát hiện vật thể là bài toán hồi quy duy nhất từ điểm ảnh tới tọa độ khung và xác suất lớp, đạt tốc độ real-time cực cao.",
    tags: ["YOLO", "Computer Vision", "Object Detection"]
  },
  {
    id: "modC_12",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Đánh giá LLM (BLEU & ROUGE Score)",
    difficulty: "Trung bình",
    question: "Trong các bài toán Dịch máy (Machine Translation) và Tóm tắt văn bản (Text Summarization), độ tương đồng n-gram giữa văn bản sinh bởi AI và văn bản tham chiếu chuẩn (reference) được đo bằng chỉ số nào?",
    options: ["BLEU Score / ROUGE Score", "Mean Squared Error (MSE)", "Cosine Distance của bảng chữ cái", "Số dòng code Python"],
    correctAnswer: 0,
    explanation: "BLEU và ROUGE là các chỉ số tự động phổ biến đo lường mức độ trùng lặp n-gram và độ bao phủ thông tin giữa đầu ra AI và văn bản mẫu.",
    tags: ["BLEU", "ROUGE", "NLP", "LLM Evaluation"]
  },

  // ── NEW questions from user (renumbered from 13) ──────────────────────────
  {
    id: "modC_13",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Bản đồ kiến thức AI",
    difficulty: "Dễ",
    question: "Mối quan hệ phân cấp đúng giữa AI, Machine Learning (ML) và Deep Learning (DL) là gì?",
    options: ["AI ⊃ Machine Learning ⊃ Deep Learning", "Deep Learning ⊃ Machine Learning ⊃ AI", "Machine Learning ⊃ AI ⊃ Deep Learning", "AI = Machine Learning = Deep Learning"],
    correctAnswer: 0,
    explanation: "AI bao hàm Machine Learning, và Machine Learning bao hàm Deep Learning.",
    tags: ["ai_basics", "taxonomy"]
  },
  {
    id: "modC_14",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Phân loại bài toán",
    difficulty: "Dễ",
    question: "Bài toán dự đoán giá nhà dựa trên diện tích và vị trí thuộc loại bài toán nào?",
    options: ["Regression (Hồi quy)", "Classification (Phân loại)", "Clustering (Phân cụm)", "Reinforcement Learning"],
    correctAnswer: 0,
    explanation: "Dự đoán một giá trị số thực liên tục (giá nhà) là bài toán Hồi quy (Regression).",
    tags: ["ml_basics", "regression"]
  },
  {
    id: "modC_15",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Phân loại bài toán",
    difficulty: "Dễ",
    question: "Bài toán phân loại email thành Spam hoặc Not Spam là bài toán gì?",
    options: ["Classification (Phân loại)", "Regression (Hồi quy)", "Clustering (Phân cụm)", "Dimensionality Reduction"],
    correctAnswer: 0,
    explanation: "Dự đoán nhãn nhị phân (Spam / Not Spam) là bài toán Phân loại (Classification).",
    tags: ["ml_basics", "classification"]
  },
  {
    id: "modC_16",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Phân loại bài toán",
    difficulty: "Dễ",
    question: "Bài toán gom nhóm khách hàng theo hành vi mua sắm mà không có nhãn trước thuộc loại nào?",
    options: ["Clustering (Phân cụm)", "Supervised Classification", "Regression", "Semi-supervised Learning"],
    correctAnswer: 0,
    explanation: "Gom nhóm dữ liệu không có nhãn sẵn là học không giám sát: Phân cụm (Clustering).",
    tags: ["ml_basics", "clustering"]
  },
  {
    id: "modC_17",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Nearest Neighbors",
    difficulty: "Trung bình",
    question: "Trong thuật toán KNN với K = 3, nếu 3 điểm gần nhất với mẫu thử X có nhãn là [A, A, B] thì X được dự đoán là nhãn nào?",
    options: ["A", "B", "Không xác định", "Cả A và B"],
    correctAnswer: 0,
    explanation: "KNN dùng nguyên tắc bầu chọn đa số (Majority Voting). Có 2 phiếu A và 1 phiếu B nên dự đoán là A.",
    tags: ["knn", "classification"]
  },
  {
    id: "modC_18",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Nearest Neighbors",
    difficulty: "Trung bình",
    question: "Điều gì xảy ra nếu chọn giá trị K quá nhỏ (ví dụ K = 1) trong thuật toán KNN?",
    options: ["Mô hình trở nên rất nhạy cảm với Nhiễu (Noise) và dễ bị Overfitting", "Mô hình trở nên quá phẳng và bị Underfitting", "Tốc độ dự đoán sẽ chậm hơn nhiều", "Mô hình không thể tính toán được khoảng cách"],
    correctAnswer: 0,
    explanation: "K=1 khiến ranh giới quyết định rất phức tạp, bám chặt theo dữ liệu huấn luyện kể cả điểm nhiễu (Overfitting).",
    tags: ["knn", "overfitting"]
  },
  {
    id: "modC_19",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Naive Bayes",
    difficulty: "Trung bình",
    question: "Thuật toán Naive Bayes dựa trên giả định quan trọng nào về các thuộc tính (Features)?",
    options: ["Các Feature độc lập có điều kiện với nhau khi biết nhãn Class", "Các Feature phải tuân theo phân phối chuẩn", "Các Feature phải có mối quan hệ tuyến tính hoàn hảo", "Các Feature không được chứa dữ liệu dạng chuỗi"],
    correctAnswer: 0,
    explanation: "Giả định 'ngây thơ' (Naive) của Naive Bayes là các tính năng độc lập có điều kiện khi biết trước lớp dữ liệu.",
    tags: ["naive_bayes", "assumptions"]
  },
  {
    id: "modC_20",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Loss Function",
    difficulty: "Dễ",
    question: "Hàm mất mát MSE (Mean Squared Error) thường được sử dụng phổ biến nhất cho bài toán nào?",
    options: ["Regression (Hồi quy)", "Classification (Phân loại)", "Clustering (Phân cụm)", "Text Generation"],
    correctAnswer: 0,
    explanation: "MSE đo bình phương khoảng cách giữa số dự đoán và nhãn thực tế nên chuyên dùng cho Regression.",
    tags: ["loss_function", "mse"]
  },
  {
    id: "modC_21",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Loss Function",
    difficulty: "Dễ",
    question: "Hàm mất mát Cross-Entropy Loss thường được sử dụng cho bài toán nào?",
    options: ["Classification (Phân loại)", "Regression (Hồi quy)", "Dự đoán giá chứng khoán", "K-Means"],
    correctAnswer: 0,
    explanation: "Cross-Entropy đo sự khác biệt giữa hai phân phối xác suất, dùng cho các bài toán Phân loại.",
    tags: ["loss_function", "cross_entropy"]
  },
  {
    id: "modC_22",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Evaluation Metrics",
    difficulty: "Trung bình",
    question: "Trong ma trận nhầm lẫn (Confusion Matrix), định nghĩa của Precision là gì?",
    options: ["TP / (TP + FP)", "TP / (TP + FN)", "(TP + TN) / Total", "FP / (FP + TN)"],
    correctAnswer: 0,
    explanation: "Precision = TP / (TP + FP) — Trong những mẫu mô hình dự đoán là Positive, có bao nhiêu mẫu đúng thực tế.",
    tags: ["metrics", "precision"]
  },
  {
    id: "modC_23",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Evaluation Metrics",
    difficulty: "Trung bình",
    question: "Công thức tính Recall là gì?",
    options: ["TP / (TP + FN)", "TP / (TP + FP)", "TN / (TN + FP)", "TP / Total"],
    correctAnswer: 0,
    explanation: "Recall = TP / (TP + FN) — Trong tất cả các mẫu Positive thực tế, mô hình bắt được bao nhiêu.",
    tags: ["metrics", "recall"]
  },
  {
    id: "modC_24",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Evaluation Metrics",
    difficulty: "Trung bình",
    question: "Trong bài toán chẩn đoán phát hiện ung thư nguy hiểm (cần tránh bỏ sót bệnh nhân mắc bệnh), chỉ số nào nên được ưu tiên tối ưu hàng đầu?",
    options: ["Recall", "Precision", "Accuracy", "Specificity"],
    correctAnswer: 0,
    explanation: "Bỏ sót người bệnh nguy hiểm nghĩa là FN lớn. Cần tối ưu Recall để giảm thiểu FN về 0.",
    tags: ["metrics", "recall", "medical_ai"]
  },
  {
    id: "modC_25",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Evaluation Metrics",
    difficulty: "Trung bình",
    question: "Trong hệ thống tự động khóa giao dịch tài chính, nếu khóa nhầm thẻ của khách hàng tốt (FP) gây hậu quả rất lớn, chỉ số nào cần tập trung tối ưu?",
    options: ["Precision", "Recall", "MSE", "MAE"],
    correctAnswer: 0,
    explanation: "Khóa nhầm thẻ tốt là FP. Để giảm thiểu tối đa FP, cần tối ưu Precision.",
    tags: ["metrics", "precision", "finance"]
  },
  {
    id: "modC_26",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Evaluation Metrics",
    difficulty: "Dễ",
    question: "F1-Score là trung bình hài hòa (Harmonic Mean) của hai chỉ số nào?",
    options: ["Precision và Recall", "Accuracy và Precision", "Recall và Specificity", "MSE và RMSE"],
    correctAnswer: 0,
    explanation: "F1 = 2 * (Precision * Recall) / (Precision + Recall).",
    tags: ["metrics", "f1_score"]
  },
  {
    id: "modC_27",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Overfitting & Underfitting",
    difficulty: "Dễ",
    question: "Một mô hình có Train Accuracy = 99% nhưng Validation Accuracy = 60%. Mô hình này đang gặp hiện tượng gì?",
    options: ["Overfitting", "Underfitting", "Good Fit", "Data Leakage"],
    correctAnswer: 0,
    explanation: "Kết quả trên tập Train cực cao nhưng Validation rất thấp là dấu hiệu điển hình của Overfitting.",
    tags: ["overfitting", "model_evaluation"]
  },
  {
    id: "modC_28",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Overfitting & Underfitting",
    difficulty: "Dễ",
    question: "Một mô hình có Train Accuracy = 55% và Validation Accuracy = 53%. Hiện tượng có khả năng nhất là:",
    options: ["Underfitting", "Overfitting", "High Variance", "Optimal Convergence"],
    correctAnswer: 0,
    explanation: "Độ chính xác cả ở tập Train và Validation đều thấp chứng tỏ mô hình chưa học được đặc trưng: Underfitting.",
    tags: ["underfitting", "model_evaluation"]
  },
  {
    id: "modC_29",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Overfitting",
    difficulty: "Trung bình",
    question: "Kỹ thuật nào sau đây KHÔNG phải là giải pháp trực tiếp để giảm Overfitting?",
    options: ["Tăng độ phức tạp của mô hình (thêm nhiều tầng/tham số)", "Sử dụng Dropout", "Thêm dữ liệu huấn luyện hoặc Data Augmentation", "Sử dụng Regularization (L1/L2)"],
    correctAnswer: 0,
    explanation: "Tăng độ phức tạp của mô hình sẽ khiến mô hình càng dễ bị Overfitting hơn.",
    tags: ["overfitting", "regularization"]
  },
  {
    id: "modC_30",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Training Hyperparameters",
    difficulty: "Dễ",
    question: "Khái niệm Epoch trong huấn luyện Deep Learning có nghĩa là gì?",
    options: ["Một lần mô hình duyệt qua toàn bộ tập dữ liệu huấn luyện (Training Set)", "Số lượng mẫu dữ liệu xử lý trong một bước cập nhật weights", "Tốc độ điều chỉnh độ dốc gradient", "Thời gian tính bằng giây để train một layer"],
    correctAnswer: 0,
    explanation: "1 Epoch tương ứng với việc toàn bộ các mẫu trong tập Train được đi qua mô hình 1 lần.",
    tags: ["deep_learning", "epoch"]
  },
  {
    id: "modC_31",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Training Hyperparameters",
    difficulty: "Dễ",
    question: "Batch Size = 32 nghĩa là gì?",
    options: ["Số lượng mẫu dữ liệu được đưa vào xử lý trong một lần cập nhật tham số", "Mô hình được huấn luyện trong 32 giây", "Tập dữ liệu được chia thành đúng 32 phần bằng nhau", "Mô hình có 32 lớp ẩn"],
    correctAnswer: 0,
    explanation: "Batch Size là số lượng sample dữ liệu được tính toán song song để cập nhật gradient một lần.",
    tags: ["deep_learning", "batch_size"]
  },
  {
    id: "modC_32",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Training Hyperparameters",
    difficulty: "Trung bình",
    question: "Nếu Learning Rate quá lớn trong quá trình huấn luyện Gradient Descent, chuyện gì sẽ xảy ra?",
    options: ["Quá trình hội tụ có thể bị dao động hoặc phân kỳ (Diverge), không tìm được tối ưu", "Mô hình hội tụ cực kỳ nhanh và chính xác", "Mô hình lập tức bị Underfitting do dừng quá sớm", "Gradient bị biến mất hoàn toàn (Vanishing Gradient)"],
    correctAnswer: 0,
    explanation: "Learning Rate quá lớn khiến bước nhảy vượt qua điểm cực tiểu, dẫn đến dao động hoặc phân kỳ.",
    tags: ["learning_rate", "gradient_descent"]
  },
  {
    id: "modC_33",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Activation Functions",
    difficulty: "Dễ",
    question: "Công thức của hàm kích hoạt ReLU (Rectified Linear Unit) là gì?",
    options: ["ReLU(x) = max(0, x)", "ReLU(x) = 1 / (1 + e^-x)", "ReLU(x) = tanh(x)", "ReLU(x) = min(0, x)"],
    correctAnswer: 0,
    explanation: "ReLU(x) = max(0, x), trả về x nếu x > 0 và trả về 0 nếu x <= 0.",
    tags: ["activation_function", "relu"]
  },
  {
    id: "modC_34",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Activation Functions",
    difficulty: "Dễ",
    question: "Giá trị đầu ra của hàm kích hoạt Sigmoid σ(x) luôn nằm trong khoảng nào?",
    options: ["(0, 1)", "[-1, 1]", "(-∞, +∞)", "[0, +∞)"],
    correctAnswer: 0,
    explanation: "Hàm Sigmoid nén mọi giá trị thực vào khoảng xác suất (0, 1).",
    tags: ["activation_function", "sigmoid"]
  },
  {
    id: "modC_35",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Activation Functions",
    difficulty: "Trung bình",
    question: "Hàm kích hoạt Softmax thường được đặt ở tầng đầu ra (Output layer) của mô hình nhằm mục đích gì?",
    options: ["Biến đổi logits thành phân phối xác suất cho bài toán phân loại nhiều lớp (Multi-class Classification)", "Tính trung bình cộng của các hidden units", "Triệt tiêu hoàn toàn các số âm về 0", "Tăng tốc độ tính toán gradient"],
    correctAnswer: 0,
    explanation: "Softmax chuyển đổi vector giá trị thô (logits) thành phân phối xác suất có tổng bằng 1.",
    tags: ["activation_function", "softmax"]
  },
  {
    id: "modC_36",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Activation Functions",
    difficulty: "Dễ",
    question: "Giá trị ReLU(-5) và ReLU(7) lần lượt là:",
    options: ["0 và 7", "-5 và 7", "0 và 0", "5 và 7"],
    correctAnswer: 0,
    explanation: "ReLU(-5) = max(0, -5) = 0. ReLU(7) = max(0, 7) = 7.",
    tags: ["activation_function", "relu"]
  },
  {
    id: "modC_37",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Transformer & Attention",
    difficulty: "Trung bình",
    question: "Cơ chế Self-Attention trong kiến trúc Transformer giúp mô hình đạt được điều gì?",
    options: ["Cho phép mỗi Token tính toán mối quan hệ và sự liên quan với tất cả các Token khác trong chuỗi", "Thay thế hoàn bộ nhu cầu huấn luyện mô hình", "Tự động loại bỏ từ dừng (Stopwords)", "Giảm độ phức tạp tính toán xuống O(1)"],
    correctAnswer: 0,
    explanation: "Self-Attention cho phép các token tương tác với nhau để hiểu ngữ cảnh trong toàn bộ chuỗi.",
    tags: ["transformer", "self_attention"]
  },
  {
    id: "modC_38",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Transformer & Attention",
    difficulty: "Trung bình",
    question: "Ba thành phần cốt lõi trong cơ chế Attention của Transformer là gì?",
    options: ["Query, Key, Value (Q, K, V)", "Quality, Knowledge, Vector", "Quick, Kernel, Variable", "Quantization, K-Means, Variance"],
    correctAnswer: 0,
    explanation: "Cơ chế Attention chuẩn dựa trên 3 vector: Query (Q), Key (K) và Value (V).",
    tags: ["transformer", "attention"]
  },
  {
    id: "modC_39",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "LLM Inference Parameters",
    difficulty: "Trung bình",
    question: "Tham số Temperature trong quá trình sinh văn bản của LLM điều khiển yếu tố nào?",
    options: ["Mức độ ngẫu nhiên và sáng tạo của câu trả lời", "Tốc độ xử lý của phần cứng GPU", "Số lượng token tối đa trong ngữ cảnh", "Độ dài của prompt đầu vào"],
    correctAnswer: 0,
    explanation: "Temperature điều chỉnh độ phẳng của phân phối xác suất token, điều khiển sự ngẫu nhiên/sáng tạo.",
    tags: ["llm", "temperature", "inference"]
  },
  {
    id: "modC_40",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "LLM Inference Parameters",
    difficulty: "Dễ",
    question: "Khi cần LLM trả lời các tác vụ đòi hỏi sự chính xác cao, nhất quán và sự thật (Fact-based / Coding), nên đặt Temperature như thế nào?",
    options: ["Temperature thấp (ví dụ 0.1)", "Temperature cao (ví dụ 0.9)", "Temperature = 2.0", "Không ảnh hưởng"],
    correctAnswer: 0,
    explanation: "Temperature thấp giúp câu trả lời ổn định, tập trung vào token có xác suất cao nhất, giảm ngẫu nhiên.",
    tags: ["llm", "temperature"]
  },
  {
    id: "modC_41",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "LLM Inference Parameters",
    difficulty: "Trung bình",
    question: "Cấu hình Top-K = 20 trong quá trình Sampling của LLM có nghĩa là gì?",
    options: ["Chỉ giữ lại K=20 token có xác suất cao nhất để lấy mẫu ở mỗi bước sinh từ", "Chỉ sinh ra tối đa 20 từ trong câu trả lời", "Lấy 20 câu trả lời tốt nhất từ mô hình", "Mô hình sẽ xem xét 20 câu hỏi gần nhất"],
    correctAnswer: 0,
    explanation: "Top-K lọc danh sách các từ tiếp theo bằng cách chỉ giữ lại K token có xác suất dự đoán cao nhất.",
    tags: ["llm", "top_k"]
  },
  {
    id: "modC_42",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "LLM Inference Parameters",
    difficulty: "Trung bình",
    question: "Phương pháp Sampling Top-P (Nucleus Sampling) hoạt động như thế nào?",
    options: ["Chọn tập hợp các token nhỏ nhất có tổng xác suất tích lũy đạt ngưỡng p", "Lấy cố định p phần trăm số token trong từ điển", "Chỉ lấy token có xác suất đúng bằng p", "Bỏ qua p phần trăm số token hàng đầu"],
    correctAnswer: 0,
    explanation: "Top-P tích lũy các token có xác suất giảm dần cho tới khi tổng xác suất vừa đạt tới ngưỡng p (ví dụ 0.9).",
    tags: ["llm", "top_p"]
  },
  {
    id: "modC_43",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "LoRA (Low-Rank Adaptation)",
    difficulty: "Trung bình",
    question: "Ưu điểm cốt lõi của phương pháp LoRA (Low-Rank Adaptation) trong Fine-tuning LLM là gì?",
    options: ["Giữ nguyên trọng số gốc, chỉ huấn luyện một lượng nhỏ tham số ma trận hạng thấp bổ sung, tiết kiệm VRAM", "Loại bỏ hoàn toàn lớp Attention của Transformer", "Tăng kích thước mô hình lên gấp 2 lần để thông minh hơn", "Cho phép chạy LLM không cần đến GPU"],
    correctAnswer: 0,
    explanation: "LoRA đóng băng ma trận trọng số gốc và thêm ma trận phân rã hạng thấp, giảm đáng kể tham số cần train và VRAM.",
    tags: ["lora", "fine_tuning", "llm"]
  },
  {
    id: "modC_44",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "RAG (Retrieval-Augmented Generation)",
    difficulty: "Trung bình",
    question: "Luồng hoạt động chuẩn của hệ thống RAG bao gồm các bước nào theo thứ tự?",
    options: ["User Query → Retrieve Relevant Documents → Add Context → LLM → Answer", "User Query → LLM → Retrieve Documents → Fine-tuning → Answer", "Retrieve Documents → User Query → Train Model → Output", "User Query → Safety Check → Fine-tune LLM → Output"],
    correctAnswer: 0,
    explanation: "RAG tìm kiếm tài liệu liên quan dựa trên query, chèn tài liệu vào context prompt rồi gửi cho LLM tạo câu trả lời.",
    tags: ["rag", "architecture"]
  },
  {
    id: "modC_45",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "RAG vs Fine-tuning",
    difficulty: "Trung bình",
    question: "Công ty có 50.000 tài liệu hướng dẫn nội bộ thay đổi liên tục hàng tuần. Giải pháp AI nào phù hợp nhất để trả lời thông tin chính xác?",
    options: ["RAG (Retrieval-Augmented Generation)", "Huấn luyện lại LLM từ đầu (Pretraining)", "Full Fine-tuning mô hình mỗi tuần", "Sử dụng thuật toán K-Means"],
    correctAnswer: 0,
    explanation: "Khi dữ liệu biến động thường xuyên, RAG là tối ưu vì chỉ cần cập nhật Vector Database mà không cần retrain weights.",
    tags: ["rag", "system_design"]
  },
  {
    id: "modC_46",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "RAG vs Fine-tuning",
    difficulty: "Trung bình",
    question: "Nếu mục tiêu là bắt mô hình trả lời theo đúng định dạng JSON nghiêm ngặt và nhái theo phong cách (Style/Tone) của thương hiệu, bạn nên ưu tiên phương pháp nào?",
    options: ["Fine-tuning", "RAG duy nhất", "Chỉ dùng Vector Database", "K-Nearest Neighbors"],
    correctAnswer: 0,
    explanation: "Fine-tuning rất hiệu quả trong việc dạy mô hình tuân thủ Format, Style và Hành vi (Behavior).",
    tags: ["fine_tuning", "rag"]
  },
  {
    id: "modC_47",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Embedding",
    difficulty: "Dễ",
    question: "Embedding trong xử lý ngôn ngữ tự nhiên và RAG được sử dụng để làm gì?",
    options: ["Biểu diễn dữ liệu (từ, văn bản) thành các vector số thực trong không gian nhiều chiều", "Nén file văn bản thành định dạng ZIP", "Mã hóa mật khẩu người dùng", "Chuyển đổi văn bản sang mã SQL"],
    correctAnswer: 0,
    explanation: "Embedding biến đổi văn bản/hình ảnh thành vector mang nghĩa ngữ nghĩa (semantic vector).",
    tags: ["embedding", "vector"]
  },
  {
    id: "modC_48",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Hallucination",
    difficulty: "Dễ",
    question: "Khái niệm Hallucination (Ảo giác) của LLM mô tả hiện tượng nào?",
    options: ["Mô hình bịa ra thông tin sai sự thật nhưng trình bày một cách rất tự tin và hợp lý", "Mô hình không thể chạy được do thiếu GPU", "Mô hình phản hồi quá nhanh dẫn đến mất kết nối", "Mô hình trả về toàn các ký tự đặc biệt không đọc được"],
    correctAnswer: 0,
    explanation: "Hallucination là khi LLM sinh thông tin không chính xác hoặc không dựa trên thực tế nhưng tự tin như thật.",
    tags: ["hallucination", "llm_risks"]
  },
  {
    id: "modC_49",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Confusion Matrix",
    difficulty: "Dễ",
    question: "Mẫu dữ liệu thực tế là Negative nhưng mô hình lại dự đoán nhầm là Positive thì gọi là gì?",
    options: ["False Positive (FP)", "True Positive (TP)", "False Negative (FN)", "True Negative (TN)"],
    correctAnswer: 0,
    explanation: "Dự đoán Positive nhưng Sai (False) => False Positive (Báo động giả).",
    tags: ["confusion_matrix", "fp"]
  },
  {
    id: "modC_50",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Confusion Matrix",
    difficulty: "Dễ",
    question: "Mẫu thực tế là Positive nhưng mô hình dự đoán nhầm là Negative gọi là gì?",
    options: ["False Negative (FN)", "False Positive (FP)", "True Negative (TN)", "True Positive (TP)"],
    correctAnswer: 0,
    explanation: "Dự đoán Negative nhưng Sai (False) => False Negative (Bỏ sót).",
    tags: ["confusion_matrix", "fn"]
  },
  {
    id: "modC_51",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Accuracy Trap",
    difficulty: "Trung bình",
    question: "Trong một tập dữ liệu có 950 mẫu Negative và 50 mẫu Positive (mất cân bằng lớp nặng). Nếu mô hình luôn luôn dự đoán Negative cho mọi mẫu, Accuracy sẽ là bao nhiêu?",
    options: ["95%", "50%", "5%", "0%"],
    correctAnswer: 0,
    explanation: "Mô hình đoán đúng 950 mẫu TN trên tổng số 1000 mẫu => Accuracy = 950/1000 = 95%.",
    tags: ["imbalanced_data", "accuracy_trap"]
  },
  {
    id: "modC_52",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Validation vs Test Set",
    difficulty: "Trung bình",
    question: "Tập Validation (Validation Set) được dùng để làm gì trong quá trình xây dựng mô hình?",
    options: ["Để đánh giá, lựa chọn mô hình và tinh chỉnh các Hyperparameter trong lúc huấn luyện", "Để cập nhật weights trực tiếp bằng Gradient Descent", "Chỉ để kiểm thử lần cuối cùng trước khi đưa ra thị trường", "Để gửi cho khách hàng xem thử"],
    correctAnswer: 0,
    explanation: "Validation Set dùng để đánh giá khách quan giữa các lần chỉnh Hyperparameter, tránh bị overfit vào Test Set.",
    tags: ["validation", "hyperparameters"]
  },
  {
    id: "modC_53",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Quantization",
    difficulty: "Khó",
    question: "Kỹ thuật Quantization (Lượng hóa) trong triển khai LLM nhằm mục đích chính là gì?",
    options: ["Nén mô hình bằng cách giảm độ chính xác số thực của weights (ví dụ từ FP16 xuống INT8/INT4) để giảm bộ nhớ và tăng tốc", "Tăng độ chính xác của mô hình lên gấp đôi", "Tạo thêm các lớp Attention mới", "Chuyển đổi văn bản sang dữ liệu âm thanh"],
    correctAnswer: 0,
    explanation: "Quantization giảm dung lượng VRAM và tăng tốc độ tính toán bằng cách hạ độ phân giải số thực của các tham số.",
    tags: ["quantization", "model_compression"]
  },
  {
    id: "modC_54",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "CNN Basics",
    difficulty: "Dễ",
    question: "Mạng Nơ-ron Cuộn (CNN - Convolutional Neural Network) thường phù hợp nhất với loại dữ liệu nào?",
    options: ["Hình ảnh / Thị giác máy tính", "Bảng biểu số liệu chứng khoán", "File ghi âm giọng nói 1D duy nhất", "Dữ liệu văn bản thuần túy"],
    correctAnswer: 0,
    explanation: "CNN trích xuất đặc trưng không gian mạnh mẽ, chuyên dùng cho xử lý hình ảnh và video.",
    tags: ["cnn", "deep_learning"]
  },
  {
    id: "modC_55",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Tokenization",
    difficulty: "Dễ",
    question: "Tokenization trong LLM là quá trình gì?",
    options: ["Chia nhỏ văn bản đầu vào thành các đơn vị nhỏ hơn (từ, cụm từ hoặc sub-words) tương ứng với các Token ID", "Gửi mã giảm giá cho người dùng", "Mã hóa lưu trữ dữ liệu trên Blockchain", "Xóa bỏ các ký tự đặc biệt"],
    correctAnswer: 0,
    explanation: "Tokenization biến chuỗi ký tự thành dãy token số nguyên để đưa vào mô hình Transformer.",
    tags: ["tokenization", "nlp"]
  },
  {
    id: "modC_56",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Overfitting - Dropout",
    difficulty: "Dễ",
    question: "Kỹ thuật Dropout trong Neural Network giảm Overfitting bằng cách nào?",
    options: ["Tắt ngẫu nhiên một tỷ lệ các neuron trong quá trình huấn luyện", "Bỏ qua các dòng dữ liệu bị thiếu", "Giảm tốc độ học xuống 0", "Xóa bớt các layer cuối"],
    correctAnswer: 0,
    explanation: "Dropout ngẫu nhiên ngắt kết nối một số nơ-ron ở mỗi bước train, tránh việc các nơ-ron quá phụ thuộc vào nhau.",
    tags: ["dropout", "regularization"]
  },
  {
    id: "modC_57",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Evaluation Metrics",
    difficulty: "Dễ",
    question: "Chỉ số MAE (Mean Absolute Error) trong Hồi quy khác MSE ở điểm chính nào?",
    options: ["MAE lấy giá trị tuyệt đối của sai số, không phạt nặng các điểm dữ liệu ngoại lệ (outliers) như MSE", "MAE luôn có giá trị âm", "MAE chỉ dùng cho phân loại", "MAE bằng bình phương của MSE"],
    correctAnswer: 0,
    explanation: "MSE bình phương sai số nên phạt rất nặng outlier, trong khi MAE lấy trị tuyệt đối nên ít nhạy cảm hơn với outlier.",
    tags: ["mae", "mse", "regression"]
  },
  {
    id: "modC_58",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Context Window",
    difficulty: "Dễ",
    question: "Thuật ngữ Context Window của một LLM dùng để chỉ điều gì?",
    options: ["Giới hạn tổng số lượng token đầu vào và đầu ra tối đa mà mô hình có thể xử lý trong một lần truy vấn", "Kích thước màn hình ứng dụng Chat", "Số lượng kết quả tìm kiếm Google", "Thời gian chờ phản hồi tối đa"],
    correctAnswer: 0,
    explanation: "Context Window xác định dung lượng tối đa (ví dụ 8k, 32k, 128k token) mà mô hình có thể duy trì trong bộ nhớ chú ý.",
    tags: ["llm", "context_window"]
  },
  {
    id: "modC_59",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Prompt Engineering vs Fine-tuning",
    difficulty: "Dễ",
    question: "Khác biệt cơ bản giữa Prompt Engineering và Fine-tuning là gì?",
    options: ["Prompt Engineering chỉ thay đổi câu lệnh đầu vào mà không đổi weights; Fine-tuning cập nhật trọng số mô hình", "Prompt Engineering đắt đỏ hơn Fine-tuning", "Fine-tuning không cần dùng GPU", "Prompt Engineering chỉ dành cho bài toán hình ảnh"],
    correctAnswer: 0,
    explanation: "Prompt Engineering tác động vào ngữ cảnh đầu vào, Fine-tuning trực tiếp thay đổi/huấn luyện tham số mô hình.",
    tags: ["prompt_engineering", "fine_tuning"]
  },
  {
    id: "modC_60",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "System Evaluation",
    difficulty: "Khó",
    question: "Khi đánh giá một hệ thống RAG toàn diện, hai chỉ số quan trọng cho giai đoạn Retrieval là gì?",
    options: ["Context Relevance (Độ liên quan ngữ cảnh) và Context Recall", "Gigaflops và VRAM usage", "Temperature và Top-P", "BLEU score và ROUGE score"],
    correctAnswer: 0,
    explanation: "Bộ chỉ số như RAGAS đánh giá bước Retrieval dựa trên Context Relevance và Context Recall.",
    tags: ["rag", "evaluation"]
  },
  {
    id: "modC_61",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Calculation Metrics",
    difficulty: "Trung bình",
    question: "Giả sử kết quả đánh giá mô hình là: TP = 80, FP = 20, FN = 20, TN = 880. Tính Recall của mô hình.",
    options: ["80%", "90%", "88%", "95%"],
    correctAnswer: 0,
    explanation: "Recall = TP / (TP + FN) = 80 / (80 + 20) = 80/100 = 0.8 (80%).",
    tags: ["metrics", "calculation"]
  },
  {
    id: "modC_62",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "RAG Weight Change",
    difficulty: "Dễ",
    question: "Phép tra cứu RAG có làm thay đổi các trọng số (Weights) của mô hình LLM hay không?",
    options: ["Không, RAG chỉ bổ sung thông tin vào Prompt/Context", "Có, RAG cập nhật weight mỗi lần query", "Có, nhưng chỉ cập nhật layer cuối", "Tùy thuộc vào Vector DB"],
    correctAnswer: 0,
    explanation: "RAG giữ nguyên trọng số LLM, chỉ cung cấp thêm ngữ cảnh động vào đầu vào Prompt.",
    tags: ["rag", "llm_weights"]
  },
  {
    id: "modC_63",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Product Architecture",
    difficulty: "Trung bình",
    question: "Khi làm Chatbot trả lời quy định công ty, nếu không có tài liệu nào chứa đáp án, hệ thống nên phản hồi như thế nào là an toàn?",
    options: ["Trả lời \"Tôi không tìm thấy thông tin trong tài liệu quy định hiện tại\"", "Tự suy đoán một quy định hợp lý", "Tìm kiếm bối cảnh ngẫu nhiên trên Internet", "Im lặng không phản hồi"],
    correctAnswer: 0,
    explanation: "Thiết lập Guardrail cho Chatbot thừa nhận không có thông tin giúp ngăn ngừa Hallucination và rủi ro vận hành.",
    tags: ["ai_product", "guardrails"]
  },
  {
    id: "modC_64",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Product Design",
    difficulty: "Trung bình",
    question: "Một sản phẩm SmartHome Assistant cần tư vấn chính xác giá bán và bảo hành thiết bị. Kiến trúc phù hợp nhất là:",
    options: ["RAG kết hợp Vector DB lưu trữ tài liệu sản phẩm", "Chỉ dùng GPT-4 không cần cung cấp ngữ cảnh", "Huấn luyện mô hình KNN", "Dùng phương pháp Linear Regression"],
    correctAnswer: 0,
    explanation: "Giá cả và bảo hành là dữ liệu doanh nghiệp cần chính xác và cập nhật, nên chọn RAG.",
    tags: ["system_design", "smarthome"]
  },

  // ── 76 New Module C Questions (modC_65 -> modC_140) ──────────────────────
  {
    id: "modC_65",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Định nghĩa Machine Learning",
    difficulty: "Dễ",
    question: "Theo định nghĩa của Tom Mitchell, một chương trình máy tính được gọi là học hỏi từ kinh nghiệm E thông qua nhiệm vụ T và phép đánh giá hiệu năng P nếu:",
    options: [
      "Hiệu năng trên nhiệm vụ T, đo bởi P, cải thiện nhờ kinh nghiệm E",
      "Nhiệm vụ T tự động thay đổi sau mỗi lần đo bởi P",
      "Kinh nghiệm E tăng lên khi P giảm đi",
      "Hiệu năng luôn đạt 100% độ chính xác"
    ],
    correctAnswer: 0,
    explanation: "Đây là định nghĩa kinh điển của Machine Learning: Máy tính tự cải thiện hiệu năng thực hiện nhiệm vụ T thông qua trải nghiệm và tích lũy dữ liệu E.",
    tags: ["machine_learning", "definition"]
  },
  {
    id: "modC_66",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Tập dữ liệu",
    difficulty: "Dễ",
    question: "Tập dữ liệu dùng để huấn luyện mô hình được gọi là:",
    options: [
      "Test set",
      "Validation set",
      "Training set",
      "Public set"
    ],
    correctAnswer: 2,
    explanation: "Training set (tập huấn luyện) là tập dữ liệu chính thức dùng để tìm ra các tham số cho mô hình.",
    tags: ["dataset", "training_set"]
  },
  {
    id: "modC_67",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Tập dữ liệu",
    difficulty: "Dễ",
    question: "Tập dữ liệu nào được sử dụng để đánh giá hiệu năng cuối cùng của mô hình sau khi đã hoàn thành quá trình huấn luyện?",
    options: [
      "Training set",
      "Validation set",
      "Test set",
      "Raw set"
    ],
    correctAnswer: 2,
    explanation: "Test set (tập kiểm tra) hoàn toàn độc lập và không được dùng trong quá trình huấn luyện, chỉ dùng để đánh giá khách quan khả năng tổng quát hóa của mô hình.",
    tags: ["dataset", "test_set"]
  },
  {
    id: "modC_68",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Bài toán ML",
    difficulty: "Dễ",
    question: "Bài toán dự đoán một giá trị liên tục (ví dụ: dự đoán giá nhà, nhiệt độ) thuộc loại bài toán nào trong học máy?",
    options: [
      "Phân loại (Classification)",
      "Hồi quy (Regression)",
      "Phân cụm (Clustering)",
      "Giảm chiều dữ liệu"
    ],
    correctAnswer: 1,
    explanation: "Bài toán dự đoán đầu ra là một số thực liên tục được gọi là bài toán hồi quy (Regression).",
    tags: ["regression", "supervised_learning"]
  },
  {
    id: "modC_69",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Bài toán ML",
    difficulty: "Dễ",
    question: "Bài toán phân chia dữ liệu thành các nhóm riêng biệt dựa trên độ tương đồng mà không biết trước nhãn của dữ liệu là bài toán gì?",
    options: [
      "Học có giám sát (Supervised Learning)",
      "Học không giám sát (Unsupervised Learning) - cụ thể là Phân cụm (Clustering)",
      "Học bán giám sát (Semi-supervised Learning)",
      "Học củng cố (Reinforcement Learning)"
    ],
    correctAnswer: 1,
    explanation: "Phân cụm là một bài toán tiêu biểu của học không giám sát, trong đó dữ liệu không có nhãn sẵn và máy tính tự gom cụm các điểm gần nhau.",
    tags: ["clustering", "unsupervised_learning"]
  },
  {
    id: "modC_70",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Bài toán ML",
    difficulty: "Dễ",
    question: "Học bán giám sát (Semi-supervised Learning) là gì?",
    options: [
      "Là phương pháp học máy không cần bất kỳ dữ liệu nào",
      "Là phương pháp kết hợp một lượng nhỏ dữ liệu gán nhãn và một lượng lớn dữ liệu chưa gán nhãn để huấn luyện mô hình",
      "Là phương pháp máy tính tự tương tác với môi trường để nhận phần thưởng",
      "Là việc chỉ huấn luyện một nửa mô hình"
    ],
    correctAnswer: 1,
    explanation: "Học bán giám sát tận dụng nguồn dữ liệu chưa gán nhãn dồi dào kết hợp với lượng dữ liệu gán nhãn ít ỏi để tăng hiệu năng học.",
    tags: ["semi_supervised_learning"]
  },
  {
    id: "modC_71",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Tư duy ML",
    difficulty: "Trung bình",
    question: "Sự khác biệt chính giữa Học máy (Machine Learning) và Lập trình truyền thống là gì?",
    options: [
      "Lập trình truyền thống đưa dữ liệu và thuật toán vào để ra kết quả; Học máy đưa dữ liệu và kết quả vào để tìm ra thuật toán/mô hình",
      "Học máy không cần máy tính để thực thi",
      "Lập trình truyền thống chạy nhanh hơn",
      "Học máy chỉ dùng để xử lý hình ảnh"
    ],
    correctAnswer: 0,
    explanation: "Học máy cho phép máy tính tự rút ra quy luật (mô hình/thuật toán) từ dữ liệu thực tế và kết quả quan sát được thay vì con người phải tự viết ra các luật cứng (rule-based).",
    tags: ["machine_learning", "paradigm"]
  },
  {
    id: "modC_72",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Loss Function",
    difficulty: "Dễ",
    question: "Hàm mất mát (loss function) trong Machine Learning có vai trò gì?",
    options: [
      "Đo lường mức độ sai lệch giữa đầu ra dự đoán của mô hình và đầu ra thực tế",
      "Tự động tăng độ chính xác của mô hình",
      "Để lưu trữ các đặc trưng của dữ liệu",
      "Xác định kích thước của tập dữ liệu huấn luyện"
    ],
    correctAnswer: 0,
    explanation: "Hàm mất mát đo lường sự 'mất mát' hay sai số của mô hình. Mục tiêu huấn luyện là tìm tham số để tối thiểu hóa hàm mất mát này.",
    tags: ["loss_function"]
  },
  {
    id: "modC_73",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Feature Vector",
    difficulty: "Dễ",
    question: "Vector đặc trưng (feature vector) trong Machine Learning là gì?",
    options: [
      "Một ảnh thô chưa qua xử lý",
      "Một vector số thực đại diện cho các thuộc tính đặc trưng của một điểm dữ liệu",
      "Một hàm số tuyến tính",
      "Một nhãn phân loại dữ liệu"
    ],
    correctAnswer: 1,
    explanation: "Mỗi điểm dữ liệu được biểu diễn dưới dạng một vector số thực có kích thước cố định, phản ánh các thông tin đặc trưng của dữ liệu đó.",
    tags: ["feature_vector"]
  },
  {
    id: "modC_74",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Feature Vector",
    difficulty: "Trung bình",
    question: "Tại sao dữ liệu thô cần được trích chọn đặc trưng và chuyển đổi thành vector đặc trưng trước khi đưa vào mô hình học máy?",
    options: [
      "Vì các mô hình học máy hoạt động dựa trên các phép toán ma trận/vector yêu cầu dữ liệu đầu vào phải có kích thước nhất định và đồng nhất",
      "Để giảm dung lượng lưu trữ xuống 0",
      "Để bảo mật thông tin khách hàng",
      "Để máy tính không bị lỗi phần cứng"
    ],
    correctAnswer: 0,
    explanation: "Dữ liệu thực tế (như ảnh, văn bản) có kích thước thô khác nhau hoặc chứa nhiều nhiễu. Việc trích chọn đặc trưng đưa chúng về định dạng vector đồng nhất giúp mô hình tính toán được.",
    tags: ["feature_extraction"]
  },
  {
    id: "modC_75",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Transfer Learning",
    difficulty: "Trung bình",
    question: "Kỹ thuật học chuyển tiếp (transfer learning) cho bài toán phân loại ảnh hoạt động theo cơ chế nào?",
    options: [
      "Huấn luyện lại toàn bộ một mạng neuron lớn từ đầu với dữ liệu mới",
      "Sử dụng một mạng neuron đã được huấn luyện trên tập dữ liệu rất lớn làm bộ trích chọn đặc trưng (feature extractor) bằng cách lấy đầu ra của một tầng ẩn",
      "Chuyển dữ liệu huấn luyện từ máy tính này sang máy tính khác",
      "Chuyển nhãn phân loại thành các vector đặc trưng thưa"
    ],
    correctAnswer: 1,
    explanation: "Học chuyển tiếp tận dụng mạng lớn đã học được các đặc trưng cơ bản (như cạnh, góc, hình dạng) để trích xuất đặc trưng cho dữ liệu mới, tiết kiệm thời gian huấn luyện và lượng dữ liệu cần thiết.",
    tags: ["transfer_learning", "deep_learning"]
  },
  {
    id: "modC_76",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Linear Regression",
    difficulty: "Dễ",
    question: "Mô hình hồi quy tuyến tính (Linear Regression) giả định mối quan hệ giữa đầu ra y và đầu vào x là một hàm:",
    options: [
      "Hàm phi tuyến phức tạp",
      "Hàm tuyến tính theo các tham số trọng số w",
      "Hàm bậc hai của x",
      "Hàm số mũ"
    ],
    correctAnswer: 1,
    explanation: "Hồi quy tuyến tính giả định đầu ra là hàm tuyến tính theo các trọng số w (y = xᵀ w).",
    tags: ["linear_regression"]
  },
  {
    id: "modC_77",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Linear Regression",
    difficulty: "Dễ",
    question: "Sai số dự đoán e_i của điểm dữ liệu thứ i trong hồi quy tuyến tính được định nghĩa là:",
    options: [
      "e_i = y_i + y_{pred_i}",
      "e_i = y_i - y_{pred_i}",
      "e_i = y_i · y_{pred_i}",
      "e_i = (y_i)² - (y_{pred_i})²"
    ],
    correctAnswer: 1,
    explanation: "Sai số e_i là hiệu số giữa giá trị thực tế y_i và giá trị dự đoán y_{pred_i}.",
    tags: ["linear_regression", "error"]
  },
  {
    id: "modC_78",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Linear Regression",
    difficulty: "Dễ",
    question: "Hàm mất mát thông dụng nhất của hồi quy tuyến tính là:",
    options: [
      "Tổng trị tuyệt đối của sai số (L1 loss)",
      "Một nửa trung bình bình phương sai số (Mean Squared Error - MSE)",
      "Hàm entropy chéo",
      "Hàm mất mát bản lề (hinge loss)"
    ],
    correctAnswer: 1,
    explanation: "Hàm mất mát thông dụng là L(w) = (1/(2N)) ∑ (y_i - x_iᵀ w)², chính là một nửa trung bình của tổng bình phương các sai số dự đoán.",
    tags: ["mse", "loss_function"]
  },
  {
    id: "modC_79",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Linear Regression",
    difficulty: "Trung bình",
    question: "Tại sao hệ số 1/(2N) được thêm vào hàm mất mát của hồi quy tuyến tính?",
    options: [
      "Để làm nghiệm của bài toán tối ưu thay đổi linh hoạt",
      "Để tính toán trung bình sai số độc lập với số lượng mẫu N, tránh tràn số khi N lớn và triệt tiêu hệ số 2 khi đạo hàm bậc hai",
      "Để loại bỏ hoàn toàn hiện tượng overfitting",
      "Để chuyển mô hình thành phân loại nhị phân"
    ],
    correctAnswer: 1,
    explanation: "Hệ số 1/N giúp trung bình hóa sai số để không bị phụ thuộc vào số lượng dữ liệu, hệ số 1/2 giúp triệt tiêu số 2 khi tính gradient của hàm bình phương.",
    tags: ["linear_regression", "loss_function"]
  },
  {
    id: "modC_80",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Bias Trick",
    difficulty: "Dễ",
    question: "Thủ thuật gộp hệ số điều chỉnh (bias trick) trong hồi quy tuyến tính thực hiện việc gì?",
    options: [
      "Coi như hệ số bias b luôn bằng 0",
      "Thêm một đặc trưng x_0 = 1 vào vector đặc trưng x và ghép b vào vector trọng số w",
      "Nhân thêm hằng số b vào tất cả các đặc trưng",
      "Loại bỏ hoàn toàn các đặc trưng có giá trị nhỏ"
    ],
    correctAnswer: 1,
    explanation: "Thủ thuật này đưa mô hình f(x) = xᵀ w + b về dạng thuần tuyến tính f(x) = x̄ᵀ w̄ giúp tinh giản công thức toán học và lập trình tiện lợi hơn.",
    tags: ["bias_trick", "linear_regression"]
  },
  {
    id: "modC_81",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Linear Regression",
    difficulty: "Trung bình",
    question: "Hồi quy tuyến tính có thể áp dụng cho các mô hình phi tuyến với đặc trưng x không? Ví dụ: y = w₁ x + w₂ x² + w₃ sin(x) + b",
    options: [
      "Không thể, vì mối quan hệ của x là phi tuyến",
      "Có thể, vì mô hình vẫn tuyến tính đối với vector tham số trọng số w",
      "Chỉ áp dụng được khi x là số âm",
      "Chỉ áp dụng được khi không có bias b"
    ],
    correctAnswer: 1,
    explanation: "Hồi quy tuyến tính chỉ yêu cầu tính tuyến tính đối với tham số w cần tối ưu, không yêu cầu tính tuyến tính đối với biến đầu vào x.",
    tags: ["linear_regression", "polynomial_regression"]
  },
  {
    id: "modC_82",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Ridge Regression",
    difficulty: "Dễ",
    question: "Hồi quy Ridge (Ridge Regression) là mô hình hồi quy tuyến tính thêm thành phần kiểm soát nào vào hàm mất mát?",
    options: [
      "L1 regularization: ||w||₁",
      "L2 regularization: ||w||₂²",
      "Hàm entropy chéo",
      "Hằng số điều chỉnh bias"
    ],
    correctAnswer: 1,
    explanation: "Hồi quy Ridge thêm số hạng kiểm soát ||w||₂² vào hàm mất mát để kiểm soát độ lớn các hệ số trong vector trọng số w, giúp giảm quá khớp.",
    tags: ["ridge_regression", "l2_regularization"]
  },
  {
    id: "modC_83",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Overfitting",
    difficulty: "Dễ",
    question: "Hiện tượng quá khớp (Overfitting) xảy ra khi mô hình:",
    options: [
      "Hoạt động kém trên cả tập huấn luyện và tập kiểm tra",
      "Hoạt động cực kỳ tốt trên tập huấn luyện nhưng hoạt động rất kém trên tập dữ liệu kiểm tra mới",
      "Có số lượng tham số quá ít",
      "Chưa được huấn luyện đủ số vòng lặp"
    ],
    correctAnswer: 1,
    explanation: "Quá khớp là hiện tượng mô hình quá phức tạp, ghi nhớ máy móc nhiễu của dữ liệu huấn luyện và mất đi khả năng tổng quát hóa trên dữ liệu thực tế mới.",
    tags: ["overfitting"]
  },
  {
    id: "modC_84",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Underfitting",
    difficulty: "Dễ",
    question: "Hiện tượng chưa khớp (Underfitting) xảy ra khi nào?",
    options: [
      "Mô hình hoạt động tốt trên tập huấn luyện nhưng kém trên tập kiểm tra",
      "Mô hình quá đơn giản, không học được quy luật của dữ liệu dẫn đến kết quả kém trên cả tập huấn luyện lẫn tập kiểm tra",
      "Mô hình có quá nhiều tầng ẩn phi tuyến",
      "Tốc độ học của mô hình quá lớn"
    ],
    correctAnswer: 1,
    explanation: "Chưa khớp xảy ra khi năng lực biểu diễn của mô hình quá yếu so với độ phức tạp của dữ liệu thực tế.",
    tags: ["underfitting"]
  },
  {
    id: "modC_85",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Regularization",
    difficulty: "Trung bình",
    question: "Để kiểm soát hiện tượng quá khớp, phương pháp kiểm soát (Regularization) hoạt động bằng cách:",
    options: [
      "Tăng thêm số lượng đặc trưng phi tuyến của mô hình",
      "Thêm một số hạng phạt (penalty term) phụ thuộc vào tham số w vào hàm mất mát để hạn chế độ lớn của các tham số",
      "Loại bỏ hoàn toàn tập kiểm tra khỏi quá trình đánh giá",
      "Giảm số lượng dữ liệu huấn luyện xuống tối đa"
    ],
    correctAnswer: 1,
    explanation: "Regularization cộng thêm số hạng phạt R(w) vào hàm mất mát để kìm hãm sự tăng trưởng quá mức của các hệ số trọng số, từ đó giảm độ phức tạp của mô hình.",
    tags: ["regularization"]
  },
  {
    id: "modC_86",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "L1 vs L2 Regularization",
    difficulty: "Trung bình",
    question: "Sự khác biệt chính giữa kiểm soát L1 (Lasso) và kiểm soát L2 (Ridge) trong hồi quy là gì?",
    options: [
      "L2 triệt tiêu hoàn toàn các đặc trưng, L1 thì không",
      "L1 (Lasso) có xu hướng tạo ra nghiệm thưa (nhiều hệ số trong w bằng 0), giúp lựa chọn đặc trưng; L2 (Ridge) chỉ làm các hệ số nhỏ đi nhưng ít khi bằng 0 thực sự",
      "L1 tính toán nhanh hơn L2 rất nhiều",
      "L2 không thể dùng cho các bài toán hồi quy đa thức"
    ],
    correctAnswer: 1,
    explanation: "Kiểm soát L1 (||w||₁) tạo ra nghiệm thưa (sparsity) hữu ích cho việc lọc đặc trưng quan trọng, còn L2 (||w||₂²) giữ lại tất cả các đặc trưng nhưng thu nhỏ giá trị của chúng.",
    tags: ["l1_regularization", "l2_regularization", "lasso", "ridge"]
  },
  {
    id: "modC_87",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Hyperparameters",
    difficulty: "Trung bình",
    question: "Hằng số điều chỉnh λ (regularization parameter) trong Regularization nên được lựa chọn như thế nào?",
    options: [
      "Luôn chọn λ bằng 0",
      "Là một số dương nhỏ, được tìm thông qua quá trình xác thực chéo (cross-validation)",
      "Càng lớn càng tốt để mô hình đơn giản tối đa",
      "Luôn chọn λ bằng số lượng mẫu N"
    ],
    correctAnswer: 1,
    explanation: "λ điều phối mức cân bằng giữa sai số huấn luyện và độ lớn của tham số. Thường được chọn là các giá trị dương nhỏ thông qua kỹ thuật cross-validation.",
    tags: ["hyperparameter", "cross_validation"]
  },
  {
    id: "modC_88",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Cross-validation",
    difficulty: "Dễ",
    question: "Kỹ thuật xác thực chéo (Cross-validation) thường được dùng để:",
    options: [
      "Huấn luyện mô hình nhanh hơn",
      "Lựa chọn các siêu tham số (hyperparameters) tối ưu cho mô hình và đánh giá khả năng tổng quát hóa một cách khách quan",
      "Loại bỏ nhiễu ra khỏi dữ liệu thô",
      "Thay thế hoàn toàn cho tập huấn luyện"
    ],
    correctAnswer: 1,
    explanation: "Cross-validation chia nhỏ tập huấn luyện thành nhiều phần để huấn luyện và kiểm thử chéo, giúp chọn ra các siêu tham số (như bậc đa thức d, tham số λ) tốt nhất.",
    tags: ["cross_validation"]
  },
  {
    id: "modC_89",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Hyperparameters",
    difficulty: "Dễ",
    question: "Trong hồi quy đa thức, bậc d của đa thức đóng vai trò là:",
    options: [
      "Tham số mô hình (model parameter)",
      "Siêu tham số (hyperparameter)",
      "Hệ số điều chỉnh (bias)",
      "Hàm mất mát"
    ],
    correctAnswer: 1,
    explanation: "Bậc d của đa thức là tham số cấu trúc mô hình cần được thiết lập trước khi huấn luyện, do đó nó là một siêu tham số.",
    tags: ["hyperparameter"]
  },
  {
    id: "modC_90",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "KNN",
    difficulty: "Dễ",
    question: "Thuật toán K lân cận (K-Nearest Neighbors - KNN) thuộc loại học máy nào?",
    options: [
      "Học không giám sát",
      "Học có giám sát",
      "Học củng cố",
      "Học bán giám sát"
    ],
    correctAnswer: 1,
    explanation: "KNN là một thuật toán học có giám sát đơn giản, sử dụng dữ liệu đã gán nhãn để dự đoán nhãn cho dữ liệu mới.",
    tags: ["knn", "supervised_learning"]
  },
  {
    id: "modC_91",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "KNN",
    difficulty: "Trung bình",
    question: "Tại sao thuật toán KNN còn được gọi là thuật toán 'lười học' (lazy learning) hay 'instance-based learning'?",
    options: [
      "Vì thuật toán này chạy rất chậm trong mọi pha",
      "Vì pha huấn luyện gần như không học gì từ dữ liệu mà chỉ ghi nhớ máy móc toàn bộ dữ liệu, mọi tính toán được đẩy sang pha kiểm tra",
      "Vì thuật toán này không cần máy tính mạnh để chạy",
      "Vì KNN chỉ bầu chọn ngẫu nhiên"
    ],
    correctAnswer: 1,
    explanation: "KNN không xây dựng một mô hình toán học tổng quát trong pha huấn luyện, nó chỉ lưu trữ dữ liệu và thực hiện tính toán khoảng cách khi có mẫu dữ liệu mới cần dự đoán.",
    tags: ["knn", "lazy_learning"]
  },
  {
    id: "modC_92",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "KNN Classification",
    difficulty: "Dễ",
    question: "Trong KNN phân loại, nhãn của điểm kiểm tra được quyết định bởi phương pháp nào?",
    options: [
      "Bầu chọn đa số (majority voting) từ K điểm lân cận gần nhất",
      "Lấy nhãn của điểm xa nhất",
      "Lấy trung bình cộng các nhãn",
      "Giải bài toán tối ưu lồi"
    ],
    correctAnswer: 0,
    explanation: "Với bài toán phân loại, nhãn của điểm mới được xác định bằng cách đếm xem trong K điểm gần nhất, nhãn nào xuất hiện nhiều nhất (bầu chọn đa số).",
    tags: ["knn", "majority_voting"]
  },
  {
    id: "modC_93",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "KNN",
    difficulty: "Trung bình",
    question: "Khi sử dụng KNN với K = 1 (1NN), mô hình có nguy cơ cao gặp phải hiện tượng gì?",
    options: [
      "Underfitting (chưa khớp)",
      "Overfitting (quá khớp)",
      "Triệt tiêu gradient",
      "Hội tụ chậm"
    ],
    correctAnswer: 1,
    explanation: "Khi K = 1, ranh giới phân loại rất chi tiết và nhạy cảm với nhiễu, dẫn đến nguy cơ quá khớp rất cao trên tập huấn luyện.",
    tags: ["knn", "overfitting"]
  },
  {
    id: "modC_94",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Distance Metrics",
    difficulty: "Dễ",
    question: "Khoảng cách mặc định thường được dùng trong thuật toán KNN để đo độ gần nhau giữa các vector đặc trưng là:",
    options: [
      "Khoảng cách Manhattan (L1 norm)",
      "Khoảng cách Euclid (L2 norm)",
      "Độ tương tự Cosine",
      "Khoảng cách Chebyshev"
    ],
    correctAnswer: 1,
    explanation: "Khoảng cách Euclid (L₂ norm) là khoảng cách tiêu chuẩn và phổ biến nhất được dùng trong KNN.",
    tags: ["knn", "euclidean_distance"]
  },
  {
    id: "modC_95",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Weighted KNN",
    difficulty: "Trung bình",
    question: "Để cải tiến KNN bằng cách đánh trọng số (`weights = 'distance'`), điểm lân cận gần hơn sẽ được:",
    options: [
      "Đánh trọng số thấp hơn",
      "Đánh trọng số cao hơn (thường tỉ lệ nghịch với khoảng cách)",
      "Bỏ qua không bầu chọn",
      "Gán trọng số bằng 0"
    ],
    correctAnswer: 1,
    explanation: "Việc đánh trọng số nghịch đảo khoảng cách giúp các điểm thực sự gần điểm kiểm tra đóng vai trò quyết định lớn hơn các điểm ở xa hơn.",
    tags: ["knn", "weighted_knn"]
  },
  {
    id: "modC_96",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "KNN Regression",
    difficulty: "Trung bình",
    question: "KNN có thể áp dụng cho bài toán hồi quy (regression) không?",
    options: [
      "Không, KNN chỉ dùng cho phân loại",
      "Có thể, bằng cách lấy trung bình cộng (có thể kèm trọng số) đầu ra của K điểm lân cận gần nhất",
      "Chỉ áp dụng được khi dữ liệu có 1 chiều",
      "Có thể, bằng cách giải phương trình dạng đóng"
    ],
    correctAnswer: 1,
    explanation: "Đầu ra dự đoán của điểm mới trong KNN hồi quy là trung bình cộng đầu ra của các lân cận gần nó nhất: y = ∑ (w_i y_i) / ∑ w_i.",
    tags: ["knn", "regression"]
  },
  {
    id: "modC_97",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "KNN Limitations",
    difficulty: "Trung bình",
    question: "Một nhược điểm lớn của thuật toán KNN khi làm việc với tập dữ liệu lớn là gì?",
    options: [
      "Thời gian huấn luyện quá lâu",
      "Bộ nhớ lưu trữ và thời gian tính toán ở pha kiểm tra cực kỳ lớn do phải tính khoảng cách tới mọi điểm dữ liệu huấn luyện",
      "KNN không thể xử lý dữ liệu nhiều lớp",
      "KNN đòi hỏi cấu hình tham số rất phức tạp"
    ],
    correctAnswer: 1,
    explanation: "Vì là thuật toán instance-based, KNN phải giữ lại toàn bộ dữ liệu huấn luyện và thực hiện tính toán lặp đi lặp lại hàng triệu phép tính khoảng cách mỗi khi dự đoán, gây tốn tài nguyên.",
    tags: ["knn", "limitations"]
  },
  {
    id: "modC_98",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "KNN Properties",
    difficulty: "Trung bình",
    question: "KNN hoạt động tốt mà không cần giả định gì về điều nào sau đây?",
    options: [
      "Kích thước của vector đặc trưng",
      "Phân phối xác xuất của các nhãn dữ liệu",
      "Số lượng cụm dữ liệu",
      "Hàm mất mát phi tuyến"
    ],
    correctAnswer: 1,
    explanation: "KNN là thuật toán phi tham số (non-parametric), không yêu cầu bất kỳ giả định nào về phân phối xác suất của dữ liệu.",
    tags: ["knn", "non_parametric"]
  },
  {
    id: "modC_99",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Means",
    difficulty: "Dễ",
    question: "Thuật toán phân cụm K-means (K-means clustering) thuộc nhóm học máy nào?",
    options: [
      "Học có giám sát",
      "Học không giám sát",
      "Học bán giám sát",
      "Học củng cố"
    ],
    correctAnswer: 1,
    explanation: "K-means là một thuật toán phân cụm điển hình của học không giám sát, hoạt động trên dữ liệu không có nhãn sẵn.",
    tags: ["k_means", "unsupervised_learning"]
  },
  {
    id: "modC_100",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Means Objective",
    difficulty: "Trung bình",
    question: "Mục tiêu của thuật toán phân cụm K-means là gì?",
    options: [
      "Tìm một siêu phẳng phân chia dữ liệu làm hai phần",
      "Phân chia dữ liệu thành K cụm sao cho tổng bình phương khoảng cách từ mỗi điểm đến tâm cụm của nó là nhỏ nhất",
      "Dự đoán một giá trị liên tục",
      "Xác định nhãn của dữ liệu dựa trên đa số"
    ],
    correctAnswer: 1,
    explanation: "K-means tìm cách tối thiểu hóa hàm mất mát là tổng bình phương khoảng cách từ các điểm dữ liệu tới các tâm cụm tương ứng.",
    tags: ["k_means", "clustering"]
  },
  {
    id: "modC_101",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Means Steps",
    difficulty: "Trung bình",
    question: "Hai bước lặp cốt lõi được thực hiện luân phiên trong thuật toán K-means là gì?",
    options: [
      "Bước gán nhãn (Y) và Bước cập nhật tâm cụm (M)",
      "Bước chuẩn hóa dữ liệu và Bước giảm chiều dữ liệu",
      "Bước tính khoảng cách và Bước tính đạo hàm riêng",
      "Bước tính cực đại và Bước lấy log"
    ],
    correctAnswer: 0,
    explanation: "K-means hoạt động bằng cách cố định M để tìm Y tối ưu (gán nhãn cho các điểm vào tâm gần nhất), rồi cố định Y để tìm M tối ưu (cập nhật tâm cụm bằng trung bình cộng các điểm trong cụm).",
    tags: ["k_means", "algorithm_steps"]
  },
  {
    id: "modC_102",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Means Update",
    difficulty: "Dễ",
    question: "Tâm cụm m_j mới ở mỗi vòng lặp K-means được cập nhật bằng công thức nào?",
    options: [
      "Lấy ngẫu nhiên một điểm trong cụm",
      "Trung bình cộng (mean) của toàn bộ các điểm dữ liệu được gán vào cụm j đó",
      "Trung vị của các điểm trong cụm",
      "Lấy điểm xa nhất trong cụm"
    ],
    correctAnswer: 1,
    explanation: "Tên gọi K-means bắt nguồn từ việc tâm cụm được tính bằng trung bình cộng (mean) của tất cả các điểm thuộc cụm đó ở bước cập nhật.",
    tags: ["k_means", "centroid_update"]
  },
  {
    id: "modC_103",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Means Convergence",
    difficulty: "Dễ",
    question: "Thuật toán K-means dừng lại (hội tụ) khi nào?",
    options: [
      "Khi số vòng lặp đạt 1000000",
      "Khi việc phân cụm dữ liệu ở vòng lặp hiện tại không có sự thay đổi (các tâm cụm không đổi vị trí)",
      "Khi hàm mất mát bằng 0",
      "Khi tất cả các cụm có số lượng điểm bằng nhau"
    ],
    correctAnswer: 1,
    explanation: "K-means dừng lại khi thuật toán đã hội tụ, tức là việc gán nhãn không còn thay đổi và vị trí các tâm cụm đã cố định.",
    tags: ["k_means", "convergence"]
  },
  {
    id: "modC_104",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Means Limitations",
    difficulty: "Trung bình",
    question: "Một trong những hạn chế lớn nhất của thuật toán K-means là:",
    options: [
      "Độ phức tạp thuật toán quá cao",
      "Kết quả cuối cùng phụ thuộc rất nhiều vào cách khởi tạo các tâm cụm ban đầu và số lượng cụm K phải được xác định trước",
      "Không thể hoạt động trên Python",
      "Chỉ phân cụm được dữ liệu văn bản"
    ],
    correctAnswer: 1,
    explanation: "K-means dễ bị rơi vào nghiệm tối ưu địa phương tùy thuộc vào vị trí khởi tạo tâm cụm ban đầu, và người dùng bắt buộc phải khai báo trước số cụm K.",
    tags: ["k_means", "limitations"]
  },
  {
    id: "modC_105",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Elbow Method",
    difficulty: "Trung bình",
    question: "Phương pháp nào thường được dùng để gợi ý lựa chọn số lượng cụm K tối ưu cho thuật toán K-means?",
    options: [
      "Phương pháp khuỷu tay (Elbow method)",
      "Phương pháp nhân tử Lagrange",
      "Kiểm tra gradient",
      "Xác thực chéo L1"
    ],
    correctAnswer: 0,
    explanation: "Phương pháp Elbow quan sát sự thay đổi của hàm mất mát theo K, điểm gập khúc (giống khuỷu tay) thường được chọn làm K tối ưu.",
    tags: ["elbow_method", "k_means"]
  },
  {
    id: "modC_106",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "K-Means Applications",
    difficulty: "Trung bình",
    question: "Ứng dụng nào sau đây KHÔNG phải là ứng dụng trực tiếp của thuật toán K-means?",
    options: [
      "Nén ảnh phi tổn hao (Lossless image compression)",
      "Phân cụm chữ số viết tay (MNIST)",
      "Tách vật thể trong ảnh (Image segmentation)",
      "Nén lượng tử hóa màu sắc trong ảnh (Color quantization)"
    ],
    correctAnswer: 0,
    explanation: "K-means được dùng để nén màu ảnh nhưng đây là nén có mất mát dữ liệu (lossy compression) vì các pixel bị thay thế hoàn toàn bằng màu của tâm cụm gần nhất.",
    tags: ["k_means", "applications"]
  },
  {
    id: "modC_107",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Naive Bayes",
    difficulty: "Dễ",
    question: "Bộ phân loại Naive Bayes (Naive Bayes Classifier - NBC) hoạt động dựa trên định lý nào?",
    options: [
      "Định lý giới hạn trung tâm",
      "Định lý Bayes và giả thiết độc lập ngây thơ giữa các đặc trưng",
      "Định lý Slater",
      "Định lý Lagrange"
    ],
    correctAnswer: 1,
    explanation: "NBC kết hợp định lý Bayes và một giả thiết cực kỳ mạnh mẽ (ngây thơ) là các thành phần của vector đặc trưng độc lập với nhau khi biết nhãn lớp.",
    tags: ["naive_bayes", "bayes_theorem"]
  },
  {
    id: "modC_108",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Naive Bayes Assumption",
    difficulty: "Dễ",
    question: "Giả thiết 'ngây thơ' (naive) trong bộ phân loại Naive Bayes là gì?",
    options: [
      "Giả thiết dữ liệu luôn sạch và không có nhiễu",
      "Giả thiết các đặc trưng x_i độc lập với nhau khi biết trước nhãn lớp c",
      "Giả thiết mô hình luôn đạt độ chính xác 100%",
      "Giả thiết dữ liệu tuân theo phân phối chuẩn một chiều"
    ],
    correctAnswer: 1,
    explanation: "Giả thiết độc lập này giúp đơn giản hóa việc tính xác suất đồng thời p(x|c) thành tích các xác suất thành phần p(x_i|c), giúp tính toán cực nhanh.",
    tags: ["naive_bayes", "independence_assumption"]
  },
  {
    id: "modC_109",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Naive Bayes Trick",
    difficulty: "Trung bình",
    question: "Hàm logarit được áp dụng vào công thức Naive Bayes nhằm mục đích gì?",
    options: [
      "Để biến phép nhân các xác suất thành phép cộng các log xác suất, tránh hiện tượng tràn số dưới (underflow)",
      "Để làm tăng xác suất hậu nghiệm",
      "Để đưa dữ liệu về phân phối chuẩn",
      "Để chuyển bài toán thành phân loại phi tuyến"
    ],
    correctAnswer: 0,
    explanation: "Tích của nhiều xác suất nhỏ tiến gần về 0 gây tràn số dưới trong máy tính. Áp dụng log giúp tính toán dạng tổng tuyến tính ổn định hơn.",
    tags: ["naive_bayes", "log_likelihood"]
  },
  {
    id: "modC_110",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Multinomial Naive Bayes",
    difficulty: "Trung bình",
    question: "Trong phân loại văn bản, mô hình Multinomial Naive Bayes thường được dùng khi:",
    options: [
      "Chúng ta chỉ quan tâm từ đó có xuất hiện trong văn bản hay không (0 hoặc 1)",
      "Chúng ta quan tâm đến tần suất xuất hiện (số lần xuất hiện) của từ trong văn bản",
      "Đặc trưng đầu vào là các số thực liên tục",
      "Văn bản đã được giảm chiều dữ liệu bằng PCA"
    ],
    correctAnswer: 1,
    explanation: "Multinomial Naive Bayes phù hợp với dữ liệu dạng đếm tần suất xuất hiện của từ (BoW).",
    tags: ["multinomial_nb", "nlp"]
  },
  {
    id: "modC_111",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Bernoulli Naive Bayes",
    difficulty: "Trung bình",
    question: "Mô hình Bernoulli Naive Bayes khác với Multinomial Naive Bayes ở điểm nào?",
    options: [
      "Chỉ quan tâm đến sự xuất hiện (1) hay không xuất hiện (0) của từ trong văn bản, thay vì tần suất",
      "Chỉ áp dụng cho phân loại ảnh",
      "Bernoulli cho kết quả luôn tốt hơn Multinomial",
      "Không cần sử dụng bộ từ điển làm đặc trưng"
    ],
    correctAnswer: 0,
    explanation: "Bernoulli NB sử dụng vector đặc trưng nhị phân biểu thị sự tồn tại của từ, không quan tâm từ đó xuất hiện bao nhiêu lần.",
    tags: ["bernoulli_nb", "nlp"]
  },
  {
    id: "modC_112",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Laplace Smoothing",
    difficulty: "Trung bình",
    question: "Kỹ thuật làm mềm Laplace (Laplace smoothing) được sử dụng trong Naive Bayes nhằm giải quyết vấn đề gì?",
    options: [
      "Vấn đề ma trận không khả nghịch",
      "Vấn đề một từ mới chưa từng xuất hiện trong tập huấn luyện của một lớp khiến xác suất thành phần bằng 0, dẫn đến tích xác suất đồng thời bằng 0",
      "Vấn đề Overfitting của mô hình",
      "Vấn đề thiếu bộ nhớ lưu trữ"
    ],
    correctAnswer: 1,
    explanation: "Nếu một từ chưa xuất hiện trong tập huấn luyện của lớp c, p(x_i|c) = 0 sẽ kéo theo p(x|c) = 0. Làm mềm Laplace cộng thêm một hằng số nhỏ vào tử và mẫu để tránh xác suất bằng 0.",
    tags: ["laplace_smoothing", "naive_bayes"]
  },
  {
    id: "modC_113",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Naive Bayes Advantages",
    difficulty: "Dễ",
    question: "Ưu điểm nổi bật nhất của bộ phân loại Naive Bayes là gì?",
    options: [
      "Thời gian huấn luyện và kiểm tra cực kỳ nhanh và hoạt động tốt ngay cả với ít dữ liệu huấn luyện (nếu giả thiết độc lập thỏa mãn)",
      "Tạo ra ranh giới phân loại phi tuyến phức tạp",
      "Không nhạy cảm với hiện tượng quá khớp",
      "Khả năng tự động trích chọn đặc trưng từ ảnh thô"
    ],
    correctAnswer: 0,
    explanation: "NBC tính toán độc lập các tham số nên tốc độ cực nhanh, rất hiệu quả cho phân loại văn bản và lọc thư rác.",
    tags: ["naive_bayes", "advantages"]
  },
  {
    id: "modC_114",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Gaussian Naive Bayes",
    difficulty: "Dễ",
    question: "Mô hình Naive Bayes nào phù hợp khi các đặc trưng đầu vào là các số thực liên tục (ví dụ: chiều cao, cân nặng)?",
    options: [
      "Multinomial Naive Bayes",
      "Bernoulli Naive Bayes",
      "Gaussian Naive Bayes",
      "Laplace Naive Bayes"
    ],
    correctAnswer: 2,
    explanation: "Gaussian Naive Bayes giả định các đặc trưng liên tục tuân theo phân phối chuẩn trong mỗi lớp để tính xác suất.",
    tags: ["gaussian_nb"]
  },
  {
    id: "modC_115",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Naive Bayes Complexity",
    difficulty: "Dễ",
    question: "Độ phức tạp huấn luyện của Naive Bayes chủ yếu nằm ở phép toán nào?",
    options: [
      "Phép nhân ma trận nghịch đảo",
      "Phép đếm tần suất xuất hiện và tính toán các xác suất điều kiện độc lập",
      "Phép tính trị riêng ma trận",
      "Các vòng lặp gradient descent phức tạp"
    ],
    correctAnswer: 1,
    explanation: "Huấn luyện Naive Bayes thực chất chỉ là việc đếm tần suất xuất hiện của các từ/đặc trưng và tính tỷ lệ xác suất tương ứng, do đó cực kỳ đơn giản và nhanh chóng.",
    tags: ["naive_bayes", "complexity"]
  },
  {
    id: "modC_116",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Naive Bayes Limitations",
    difficulty: "Trung bình",
    question: "Khi giả thiết độc lập giữa các đặc trưng bị vi phạm nghiêm trọng trong thực tế, hiệu năng của Naive Bayes sẽ như thế nào?",
    options: [
      "Luôn luôn tăng lên",
      "Có xu hướng giảm đi rõ rệt do mô hình không phản ánh đúng mối quan hệ giữa các đặc trưng",
      "Không bị ảnh hưởng gì",
      "Làm cho mô hình bị underfitting tuyệt đối"
    ],
    correctAnswer: 1,
    explanation: "Giả thiết độc lập là cốt lõi của NBC. Nếu các đặc trưng phụ thuộc mạnh vào nhau, mô hình sẽ ước lượng sai lệch xác suất hậu nghiệm.",
    tags: ["naive_bayes", "limitations"]
  },
  {
    id: "modC_117",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "PLA",
    difficulty: "Dễ",
    question: "Thuật toán học Perceptron (PLA) được thiết kế cho loại bài toán nào?",
    options: [
      "Hồi quy tuyến tính phi hệ số",
      "Phân loại nhị phân khi dữ liệu của hai lớp là tách biệt tuyến tính (linearly separable)",
      "Phân cụm dữ liệu phi tuyến",
      "Hệ thống gợi ý dựa trên người dùng"
    ],
    correctAnswer: 1,
    explanation: "PLA là một trong những thuật toán học máy đầu tiên, giải quyết bài toán phân loại nhị phân khi dữ liệu có thể chia cắt hoàn toàn bằng một đường thẳng hoặc siêu phẳng.",
    tags: ["pla", "perceptron"]
  },
  {
    id: "modC_118",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "PLA Activation",
    difficulty: "Dễ",
    question: "Hàm kích hoạt (activation function) được sử dụng trong thuật toán PLA cơ bản là:",
    options: [
      "Hàm Sigmoid",
      "Hàm Sign (hàm dấu: sgn(s))",
      "Hàm ReLU",
      "Hàm Tanh"
    ],
    correctAnswer: 1,
    explanation: "PLA sử dụng hàm sgn(s) để đưa ra đầu ra nhị phân cứng là 1 (nếu s ≥ 0) hoặc -1 (nếu s < 0).",
    tags: ["pla", "activation_function"]
  },
  {
    id: "modC_119",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "PLA Update Rule",
    difficulty: "Trung bình",
    question: "Khi một điểm dữ liệu (x_i, y_i) bị phân loại lỗi trong PLA, công thức cập nhật trọng số w là:",
    options: [
      "w = w - η y_i x_i",
      "w = w + η y_i x_i",
      "w = y_i x_i",
      "w = w + η x_i"
    ],
    correctAnswer: 1,
    explanation: "Công thức cập nhật của PLA khi phát hiện điểm lỗi là w = w + η y_i x_i để xoay siêu phẳng về phía phân loại đúng điểm đó.",
    tags: ["pla", "update_rule"]
  },
  {
    id: "modC_120",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "PLA Convergence",
    difficulty: "Trung bình",
    question: "Thuật toán PLA cơ bản có đảm bảo hội tụ (break vòng lặp) khi dữ liệu KHÔNG tách biệt tuyến tính không?",
    options: [
      "Có, luôn hội tụ sau tối đa 100 vòng lặp",
      "Không, thuật toán sẽ lặp vô hạn và không bao giờ dừng lại",
      "Có, nếu ta chọn tốc độ học η cực kỳ nhỏ",
      "Không, trừ khi ta loại bỏ hệ số bias b"
    ],
    correctAnswer: 1,
    explanation: "Định lý hội tụ PLA chỉ chứng minh được PLA sẽ dừng sau một số bước hữu hạn nếu dữ liệu tách biệt tuyến tính. Nếu dữ liệu có nhiễu chồng lấn, PLA sẽ lặp vô hạn.",
    tags: ["pla", "convergence"]
  },
  {
    id: "modC_121",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Pocket Algorithm",
    difficulty: "Trung bình",
    question: "Thuật toán Pocket (Pocket Algorithm) cải tiến PLA như thế nào khi dữ liệu không tách biệt tuyến tính?",
    options: [
      "Nó lưu giữ nghiệm tốt nhất (phân loại lỗi ít nhất) trong một 'túi' và trả về nghiệm này khi hết số vòng lặp",
      "Nó chia nhỏ dữ liệu thành các túi nhỏ",
      "Nó tự động chuyển đổi dữ liệu thành phi tuyến",
      "Nó loại bỏ các điểm phân loại sai"
    ],
    correctAnswer: 0,
    explanation: "Pocket algorithm giải quyết hạn chế của PLA bằng cách giữ lại bộ trọng số tốt nhất tìm thấy trong suốt quá trình chạy lặp.",
    tags: ["pocket_algorithm", "pla"]
  },
  {
    id: "modC_122",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Logistic Regression",
    difficulty: "Dễ",
    question: "Mô hình hồi quy Logistic (Logistic Regression) thường được dùng cho bài toán nào?",
    options: [
      "Bài toán hồi quy liên tục",
      "Bài toán phân loại (thường là phân loại nhị phân)",
      "Bài toán phân cụm không giám sát",
      "Giảm chiều dữ liệu hình ảnh"
    ],
    correctAnswer: 1,
    explanation: "Dù tên có chữ 'hồi quy', hồi quy Logistic thực tế là bộ phân loại nhị phân đưa ra đầu ra dưới dạng xác suất thuộc về một lớp.",
    tags: ["logistic_regression", "classification"]
  },
  {
    id: "modC_123",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Sigmoid Function",
    difficulty: "Dễ",
    question: "Hàm kích hoạt Sigmoid (hay logistic function) có công thức toán học là gì và miền giá trị của nó là bao nhiêu?",
    options: [
      "f(s) = e^s / (1 + e^s), miền giá trị [-1, 1]",
      "f(s) = 1 / (1 + e⁻ˢ), miền giá trị (0, 1)",
      "f(s) = max(0, s), miền giá trị [0, +∞)",
      "f(s) = s, miền giá trị ℝ"
    ],
    correctAnswer: 1,
    explanation: "Hàm sigmoid chuyển đổi mọi giá trị thực s thành một giá trị xác suất nằm trong khoảng (0, 1) thông qua công thức 1 / (1 + e⁻ˢ).",
    tags: ["sigmoid", "activation_function"]
  },
  {
    id: "modC_124",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Cross-Entropy Loss",
    difficulty: "Trung bình",
    question: "Hàm mất mát được sử dụng để huấn luyện hồi quy Logistic là:",
    options: [
      "Hàm mất mát sai số bình phương (MSE)",
      "Hàm mất mát entropy chéo (Cross-Entropy Loss / Binary Cross-Entropy)",
      "Hàm mất mát bản lề (hinge loss)",
      "Hàm vết trace"
    ],
    correctAnswer: 1,
    explanation: "Hàm mất mát của hồi quy logistic được xây dựng từ bài toán tối đa hóa log-likelihood (MLE), đổi dấu và lấy trung bình thu được hàm Cross-Entropy.",
    tags: ["cross_entropy", "loss_function"]
  },
  {
    id: "modC_125",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Logistic Regression SGD",
    difficulty: "Trung bình",
    question: "Công thức cập nhật trọng số w bằng thuật toán SGD trong hồi quy Logistic là:",
    options: [
      "w = w - η (a_i - y_i) x_i",
      "w = w + η (a_i - y_i) x_i",
      "w = w - η y_i x_i",
      "w = w - η a_i x_i"
    ],
    correctAnswer: 0,
    explanation: "Công thức cập nhật SGD cho hồi quy logistic là w = w - η (a_i - y_i) x_i, trông rất giống công thức của hồi quy tuyến tính nhưng a_i là đầu ra của hàm sigmoid.",
    tags: ["logistic_regression", "sgd"]
  },
  {
    id: "modC_126",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Weight Decay",
    difficulty: "Trung bình",
    question: "Khi tích hợp kỹ thuật suy giảm trọng số (weight decay) với tham số λ vào hồi quy Logistic, hàm mất mát thay đổi thế nào?",
    options: [
      "Cộng thêm số hạng phạt L1: λ ||w||₁",
      "Cộng thêm số hạng phạt L2: (λ/2) ||w||₂²",
      "Trừ đi một hằng số λ",
      "Chia toàn bộ hàm mất mát cho λ"
    ],
    correctAnswer: 1,
    explanation: "Weight decay cộng thêm một đại lượng tỷ lệ với bình phương chuẩn L2 để kìm hãm độ lớn của trọng số w, hạn chế overfitting.",
    tags: ["weight_decay", "l2_regularization"]
  },
  {
    id: "modC_127",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Linear Models Comparison",
    difficulty: "Trung bình",
    question: "Mối quan hệ giữa hồi quy tuyến tính, PLA và hồi quy Logistic khi biểu diễn dưới dạng mạng neuron nhân tạo là gì?",
    options: [
      "Chúng có cấu trúc kết nối khác nhau hoàn toàn",
      "Chúng đều là các mô hình tuyến tính đơn tầng, sự khác biệt chỉ nằm ở việc lựa chọn hàm kích hoạt (activation function)",
      "Chúng chỉ chạy được trên tập dữ liệu MNIST",
      "Chúng không sử dụng trọng số w"
    ],
    correctAnswer: 1,
    explanation: "Cả ba mô hình đều tính tổng trọng số s = xᵀ w + b. Hồi quy tuyến tính dùng hàm kích hoạt f(s) = s, PLA dùng f(s) = sgn(s), Hồi quy Logistic dùng f(s) = sigmoid(s).",
    tags: ["linear_models", "activation_function"]
  },
  {
    id: "modC_128",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Softmax Regression",
    difficulty: "Dễ",
    question: "Hồi quy Softmax (Softmax Regression) mở rộng hồi quy Logistic cho loại bài toán nào?",
    options: [
      "Bài toán phân loại đa lớp (Multi-class classification, C > 2 nhãn loại trừ lẫn nhau)",
      "Bài toán phân cụm phi tuyến",
      "Bài toán hồi quy nhiều biến đầu ra liên tục",
      "Bài toán giảm chiều dữ liệu MNIST"
    ],
    correctAnswer: 0,
    explanation: "Hồi quy Softmax (hay Multinomial Logistic Regression) là phiên bản tổng quát hóa của hồi quy logistic phục vụ phân loại nhiều lớp.",
    tags: ["softmax_regression", "multi_class"]
  },
  {
    id: "modC_129",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Softmax Function",
    difficulty: "Dễ",
    question: "Hàm Softmax biến đổi một vector điểm số (scores) z thành vector xác suất a thỏa mãn điều kiện nào?",
    options: [
      "Các phần tử của a lớn hơn 1",
      "Mỗi phần tử a_i nằm trong khoảng (0, 1) và tổng các phần tử của vector a bằng 1",
      "Tất cả các phần tử bằng nhau",
      "Độ dài vector bằng 1"
    ],
    correctAnswer: 1,
    explanation: "Hàm softmax chuẩn hóa vector điểm số thành phân phối xác suất hợp lệ: a_i = e^(z_i) / ∑ e^(z_j).",
    tags: ["softmax", "probability"]
  },
  {
    id: "modC_130",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Categorical Cross-Entropy",
    difficulty: "Trung bình",
    question: "Hàm mất mát dùng cho hồi quy Softmax là gì?",
    options: [
      "Hàm sai số bình phương trung bình (MSE)",
      "Hàm mất mát entropy chéo đa lớp (Categorical Cross-Entropy Loss)",
      "Hàm mất mát bản lề đa lớp",
      "Hàm Kullback-Leibler"
    ],
    correctAnswer: 1,
    explanation: "Hàm mất mát là trung bình cộng của entropy chéo giữa phân phối xác suất thực tế (dạng one-hot) và xác suất dự đoán bởi softmax.",
    tags: ["categorical_cross_entropy", "loss_function"]
  },
  {
    id: "modC_131",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Softmax Decision Boundary",
    difficulty: "Trung bình",
    question: "Đường ranh giới phân loại (decision boundary) tạo bởi hồi quy Softmax giữa các lớp có dạng hình học gì?",
    options: [
      "Các đường cong bậc hai phức tạp",
      "Các đường thẳng/siêu phẳng tuyến tính",
      "Các hình tròn đồng tâm",
      "Các đa giác lồi phi tuyến"
    ],
    correctAnswer: 1,
    explanation: "Hồi quy Softmax chỉ tạo ra các đường ranh giới tuyến tính trong không gian đặc trưng.",
    tags: ["softmax_regression", "decision_boundary"]
  },
  {
    id: "modC_132",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "MLP Motivation",
    difficulty: "Dễ",
    question: "Mạng neuron đa tầng (Multilayer Perceptron - MLP) được thiết kế để giải quyết hạn chế lớn nào của các mô hình tuyến tính đơn tầng?",
    options: [
      "Hạn chế về tốc độ tính toán",
      "Không phân loại được dữ liệu không tách biệt tuyến tính phi tuyến (ví dụ bài toán cổng XOR)",
      "Không chạy được trên thư viện numpy",
      "Không hỗ trợ Regularization"
    ],
    correctAnswer: 1,
    explanation: "Các mô hình tuyến tính đơn tầng như PLA hay Logistic Regression không thể phân loại được dữ liệu phi tuyến (như XOR). MLP với các tầng ẩn phi tuyến giải quyết được bài toán này.",
    tags: ["mlp", "non_linear"]
  },
  {
    id: "modC_133",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "MLP Architecture",
    difficulty: "Dễ",
    question: "Một mạng MLP cơ bản gồm những loại tầng (layer) nào?",
    options: [
      "Tầng đầu vào (Input layer), Tầng ẩn (Hidden layer), và Tầng đầu ra (Output layer)",
      "Tầng tích chập, Tầng gộp, và Tầng kết nối đầy đủ",
      "Tầng chuẩn hóa, Tầng giảm chiều, và Tầng phân cụm",
      "Tầng tuyến tính và Tầng đối ngẫu"
    ],
    correctAnswer: 0,
    explanation: "MLP tiêu chuẩn gồm 1 tầng đầu vào, 1 hoặc nhiều tầng ẩn trung gian và 1 tầng đầu ra.",
    tags: ["mlp", "neural_network_layers"]
  },
  {
    id: "modC_134",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Activation Functions Role",
    difficulty: "Trung bình",
    question: "Tại sao các tầng ẩn trong mạng neuron bắt buộc phải sử dụng hàm kích hoạt phi tuyến (non-linear activation function)?",
    options: [
      "Để mô hình chạy chậm lại và chính xác hơn",
      "Vì nếu dùng hàm kích hoạt tuyến tính, tổ hợp các tầng tuyến tính cũng chỉ tương đương với một tầng tuyến tính duy nhất, làm mất đi năng lực học các quan hệ phi tuyến phức tạp",
      "Để tránh hiện tượng bùng nổ gradient",
      "Để mô hình không cần dùng bias"
    ],
    correctAnswer: 1,
    explanation: "Tích của các ma trận trọng số tuyến tính liên tiếp chỉ là một ma trận tuyến tính khác. Hàm kích hoạt phi tuyến ở mỗi tầng ẩn giúp mạng neuron xấp xỉ được các hàm phi tuyến bất kỳ.",
    tags: ["mlp", "activation_function"]
  },
  {
    id: "modC_135",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "ReLU",
    difficulty: "Dễ",
    question: "Hàm kích hoạt ReLU (Rectified Linear Unit) có công thức là gì?",
    options: [
      "f(z) = 1 / (1 + e⁻ᶻ)",
      "f(z) = max(0, z)",
      "f(z) = tanh(z)",
      "f(z) = eᶻ"
    ],
    correctAnswer: 1,
    explanation: "Hàm ReLU trả về chính z nếu z > 0, và trả về 0 nếu z ≤ 0.",
    tags: ["relu", "activation_function"]
  },
  {
    id: "modC_136",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "ReLU Advantages",
    difficulty: "Trung bình",
    question: "Ưu điểm lớn nhất của hàm kích hoạt ReLU so với Sigmoid và Tanh là gì?",
    options: [
      "ReLU luôn trả về giá trị nằm trong khoảng (0, 1)",
      "ReLU tính toán cực kỳ đơn giản, nhanh chóng và giúp giảm thiểu hiện tượng biến mất gradient (vanishing gradient) khi z dương",
      "ReLU có đạo hàm bằng 1 ở mọi điểm",
      "ReLU giúp mô hình không bị quá khớp"
    ],
    correctAnswer: 1,
    explanation: "ReLU chỉ dùng phép so sánh max(0, z) nên tốc độ tính toán cực nhanh, đồng thời đạo hàm bằng 1 khi z > 0 giúp truyền gradient hiệu quả qua nhiều tầng mạng.",
    tags: ["relu", "advantages"]
  },
  {
    id: "modC_137",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Backpropagation Order",
    difficulty: "Dễ",
    question: "Trong thuật toán Backpropagation, tầng nào được tính toán gradient đầu tiên?",
    options: [
      "Tầng đầu vào (Input layer)",
      "Tầng ẩn đầu tiên (First hidden layer)",
      "Tầng đầu ra (Output layer)",
      "Tất cả các tầng tính toán đồng thời"
    ],
    correctAnswer: 2,
    explanation: "Tầng đầu ra ảnh hưởng trực tiếp tới hàm mất mát nên gradient của nó được tính trước tiên, sau đó sai số mới được lan truyền ngược dần về các tầng ẩn phía trước.",
    tags: ["backpropagation"]
  },
  {
    id: "modC_138",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Dropout",
    difficulty: "Trung bình",
    question: "Kỹ thuật Dropout hoạt động thế nào để kiểm soát hiện tượng quá khớp trong mạng neuron đa tầng?",
    options: [
      "Xóa bỏ vĩnh viễn một nửa số điểm dữ liệu huấn luyện",
      "Tại mỗi bước huấn luyện, tắt ngẫu nhiên một tỷ lệ p các neuron trong mạng, ép các neuron còn lại phải tự học các đặc trưng độc lập và mạnh mẽ",
      "Chuyển các hàm kích hoạt phi tuyến về dạng tuyến tính",
      "Tự động giảm tốc độ học về 0"
    ],
    correctAnswer: 1,
    explanation: "Dropout vô hiệu hóa ngẫu nhiên các kết nối neuron trong quá trình lan truyền thuận và ngược của mỗi batch huấn luyện, ngăn chặn việc các neuron đồng thích nghi (co-adaptation) quá mức.",
    tags: ["dropout", "regularization"]
  },
  {
    id: "modC_139",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Weight Decay",
    difficulty: "Dễ",
    question: "Kỹ thuật suy giảm trọng số (weight decay) trong mạng neuron hoạt động tương đương với hình thức kiểm soát nào?",
    options: [
      "L1 regularization",
      "L2 regularization",
      "Elastic Net",
      "Làm mềm Laplace"
    ],
    correctAnswer: 1,
    explanation: "Suy giảm trọng số chính là L2 regularization, phạt bình phương độ lớn trọng số để giữ các liên kết neuron không quá mạnh mẽ, giảm thiểu overfitting.",
    tags: ["weight_decay", "l2_regularization"]
  },
  {
    id: "modC_140",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Learning Rate Decay",
    difficulty: "Trung bình",
    question: "Tốc độ học suy giảm (learning rate decay) được áp dụng nhằm mục đích gì trong huấn luyện mạng neuron?",
    options: [
      "Làm giảm dần tốc độ học theo thời gian huấn luyện giúp mô hình hội tụ ổn định hơn ở các vòng lặp cuối thay vì dao động quanh cực tiểu",
      "Để tăng tốc độ huấn luyện ở những epoch cuối cùng",
      "Để tắt bớt các neuron phân loại sai",
      "Để loại bỏ hoàn toàn nhiễu trong dữ liệu"
    ],
    correctAnswer: 0,
    explanation: "Ở các epoch cuối, khi mô hình đã gần cực tiểu, tốc độ học lớn dễ làm tham số nhảy vượt qua điểm tối ưu. Việc giảm dần learning rate giúp mô hình tiến sát và hội tụ tại cực tiểu một cách êm ái hơn.",
    tags: ["learning_rate_decay", "optimization"]
  },

  // ── 30 New Module C Questions (modC_141 -> modC_170) ──────────────────────
  {
    id: "modC_141",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Recommender Systems Basics",
    difficulty: "Dễ",
    question: "Hai thực thể chính tương tác trong bất kỳ hệ thống gợi ý (Recommender Systems) nào là gì?",
    options: [
      "Nhà quảng cáo và Khách hàng",
      "Người dùng (Users) và Sản phẩm (Items)",
      "Lọc cộng tác và Lọc nội dung",
      "Trọng số và Hệ số điều chỉnh"
    ],
    correctAnswer: 1,
    explanation: "Người dùng (Users) và Sản phẩm (Items) là hai đối tượng trung tâm trong mọi hệ thống gợi ý.",
    tags: ["recommender_systems", "basics"]
  },
  {
    id: "modC_142",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Utility Matrix",
    difficulty: "Dễ",
    question: "Ma trận tiện ích (Utility Matrix) trong hệ thống gợi ý dùng để lưu trữ thông tin gì?",
    options: [
      "Thông tin giá cả và cấu hình của sản phẩm",
      "Mức độ quan tâm (ví dụ: điểm số đánh giá rating) của từng người dùng đối với từng sản phẩm",
      "Lịch sử đăng nhập của khách hàng",
      "Các vector đặc trưng của sản phẩm"
    ],
    correctAnswer: 1,
    explanation: "Ma trận tiện ích Y có hàng là người dùng, cột là sản phẩm, các ô chứa điểm đánh giá (rating) mà người dùng dành cho sản phẩm.",
    tags: ["utility_matrix", "recommender_systems"]
  },
  {
    id: "modC_143",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Utility Matrix Sparsity",
    difficulty: "Dễ",
    question: "Đặc trưng nổi bật của ma trận tiện ích trong thực tế là gì?",
    options: [
      "Là một ma trận vuông khả nghịch",
      "Là một ma trận cực kỳ thưa (sparse matrix) vì một người dùng thông thường chỉ đánh giá một lượng rất nhỏ sản phẩm trong toàn bộ hệ thống",
      "Tất cả các ô đều được lấp đầy dữ liệu",
      "Có toàn bộ các trị riêng bằng nhau"
    ],
    correctAnswer: 1,
    explanation: "Trong thực tế, số lượng sản phẩm lên tới hàng triệu nhưng mỗi người dùng chỉ tương tác vài chục sản phẩm, nên đa số các ô của ma trận tiện ích bị bỏ trống (thưa).",
    tags: ["utility_matrix", "sparsity"]
  },
  {
    id: "modC_144",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Content-based Recommendation",
    difficulty: "Dễ",
    question: "Hệ thống gợi ý dựa trên nội dung (Content-based Recommendation) đưa ra gợi ý cho một người dùng dựa trên cơ chế nào?",
    options: [
      "Gợi ý các sản phẩm tương tự với những sản phẩm mà người dùng đó đã từng thích hoặc đánh giá cao trong quá khứ",
      "Gợi ý các sản phẩm mà bạn bè của người dùng đó đã mua",
      "Gợi ý các sản phẩm bán chạy nhất hệ thống",
      "Gợi ý ngẫu nhiên các sản phẩm mới nhập kho"
    ],
    correctAnswer: 0,
    explanation: "Content-based gợi ý dựa trên việc phân tích đặc trưng của sản phẩm và mô hình hóa sở thích người dùng từ lịch sử tiêu dùng của chính họ.",
    tags: ["content_based", "recommender_systems"]
  },
  {
    id: "modC_145",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Content-based Modeling",
    difficulty: "Trung bình",
    question: "Thuật toán hồi quy nào thường được áp dụng để tìm vector trọng số sở thích w_n cho từng người dùng n trong hệ thống gợi ý dựa trên nội dung?",
    options: [
      "Hồi quy tuyến tính thông thường không bias",
      "Hồi quy Ridge (hồi quy tuyến tính có kiểm soát L2)",
      "Hồi quy Softmax đa lớp",
      "Hồi quy Lasso để tạo nghiệm thưa"
    ],
    correctAnswer: 1,
    explanation: "Sử dụng hồi quy Ridge (Ridge regression) để giải bài toán tìm vector sở thích w_n nhằm kiểm soát độ lớn trọng số, tránh quá khớp khi dữ liệu ít.",
    tags: ["content_based", "ridge_regression"]
  },
  {
    id: "modC_146",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Content-based Limitations",
    difficulty: "Trung bình",
    question: "Nhược điểm lớn nhất của hệ thống gợi ý dựa trên nội dung là gì?",
    options: [
      "Thời gian huấn luyện quá lâu",
      "Không thể gợi ý được sản phẩm nằm ngoài phạm vi sở thích cũ của người dùng (tính đa dạng kém) và khó trích chọn đặc trưng sản phẩm thủ công một cách chính xác",
      "Yêu cầu bộ nhớ lưu trữ ma trận tiện ích chuẩn hóa quá lớn",
      "Không thể chạy song song trên GPU"
    ],
    correctAnswer: 1,
    explanation: "Content-based bị giới hạn bởi khả năng trích chọn đặc trưng sản phẩm và không thể gợi ý những món đồ bất ngờ, khác biệt hẳn với lịch sử tiêu dùng của khách hàng.",
    tags: ["content_based", "limitations"]
  },
  {
    id: "modC_147",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Collaborative Filtering",
    difficulty: "Dễ",
    question: "Ý tưởng cốt lõi của phương pháp Lọc cộng tác (Collaborative Filtering - CF) là gì?",
    options: [
      "Xây dựng các đặc trưng sản phẩm cực kỳ chi tiết",
      "Dự đoán mức độ quan tâm của một người dùng dựa trên hành vi, sở thích của các người dùng khác có sự tương đồng trong hệ thống",
      "Lọc bỏ hoàn toàn các email rác khỏi hệ thống gợi ý",
      "Sử dụng mạng neuron tích chập để xử lý ma trận tiện ích"
    ],
    correctAnswer: 1,
    explanation: "CF tận dụng 'trí tuệ đám đông', giả định rằng những người có cùng sở thích trong quá khứ sẽ tiếp tục thích những thứ giống nhau trong tương lai.",
    tags: ["collaborative_filtering", "recommender_systems"]
  },
  {
    id: "modC_148",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Neighborhood CF",
    difficulty: "Dễ",
    question: "Lọc cộng tác lân cận (Neighborhood-based CF) gồm hai hướng tiếp cận chính là:",
    options: [
      "User-user CF (lọc theo người dùng tương đồng) và Item-item CF (lọc theo sản phẩm tương đồng)",
      "Content-based CF và Matrix Factorization CF",
      "K-means CF và Naive Bayes CF",
      "Lề cứng CF và Lề mềm CF"
    ],
    correctAnswer: 0,
    explanation: "Neighborhood-based CF gồm User-user CF (tìm nhóm người dùng giống nhau để gợi ý) và Item-item CF (tìm nhóm sản phẩm giống nhau dựa trên đánh giá của mọi người để gợi ý).",
    tags: ["user_user_cf", "item_item_cf"]
  },
  {
    id: "modC_149",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Cosine Similarity",
    difficulty: "Dễ",
    question: "Độ đo phổ biến nào được sử dụng để tính toán mức độ tương đồng (similarity) giữa hai người dùng hoặc hai sản phẩm trong lọc cộng tác lân cận?",
    options: [
      "Khoảng cách Euclid",
      "Độ tương tự Cosine (Cosine Similarity)",
      "Khoảng cách Manhattan",
      "Định thức ma trận"
    ],
    correctAnswer: 1,
    explanation: "Độ tương tự Cosine là độ đo tiêu chuẩn, tính góc giữa hai vector đánh giá để thể hiện mức độ đồng điệu về xu hướng thích/ghét.",
    tags: ["cosine_similarity", "collaborative_filtering"]
  },
  {
    id: "modC_150",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Normalization in CF",
    difficulty: "Trung bình",
    question: "Tại sao việc chuẩn hóa ma trận tiện ích bằng cách trừ đi điểm đánh giá trung bình của từng người dùng (hoặc sản phẩm) là cực kỳ quan trọng trước khi tính độ tương tự Cosine?",
    options: [
      "Để đưa tất cả các điểm đánh giá về bằng 0",
      "Để giải quyết hiện tượng thiên vị đánh giá (có người dùng dễ tính luôn cho 5 sao, người khó tính chỉ cho tối đa 3 sao), đưa điểm về dạng âm/dương phản ánh đúng yêu/ghét thực sự",
      "Để ma trận tiện ích trở thành ma trận khả nghịch",
      "Để giảm chiều ma trận về kích thước 1x1"
    ],
    correctAnswer: 1,
    explanation: "Chuẩn hóa giúp triệt tiêu sự sai lệch trong thang điểm cá nhân của mỗi người dùng, biến điểm đánh giá thành giá trị xoay quanh 0 (điểm dương là thích, âm là ghét).",
    tags: ["normalization", "collaborative_filtering"]
  },
  {
    id: "modC_151",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Item-item vs User-user CF",
    difficulty: "Trung bình",
    question: "Tại sao Lọc cộng tác sản phẩm (Item-item CF) thường được ưa chuộng hơn Lọc cộng tác người dùng (User-user CF) trong các hệ thống thương mại điện tử lớn?",
    options: [
      "Vì Item-item CF không cần sử dụng ma trận tiện ích",
      "Vì số lượng sản phẩm thường ít biến động và hành vi tương tác trên sản phẩm ổn định hơn hành vi biến đổi liên tục của người dùng, giúp việc tính toán và cập nhật ma trận tương tự hiệu quả hơn",
      "Vì Item-item CF luôn cho kết quả độ chính xác 100%",
      "Vì Item-item CF dễ lập trình hơn trên numpy"
    ],
    correctAnswer: 1,
    explanation: "Số lượng người dùng tăng trưởng rất nhanh và sở thích thay đổi liên tục, trong khi danh mục sản phẩm tương đối cố định. Việc tính toán độ tương tự giữa các sản phẩm (Item-item) có tính ổn định và lưu trữ lâu dài tốt hơn.",
    tags: ["item_item_cf", "user_user_cf"]
  },
  {
    id: "modC_152",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Matrix Factorization",
    difficulty: "Trung bình",
    question: "Phương pháp Lọc cộng tác phân tích ma trận (Matrix Factorization CF) xấp xỉ ma trận tiện ích thưa Y bằng tích của hai ma trận ẩn nào?",
    options: [
      "Ma trận người dùng W và Ma trận sản phẩm X có số chiều ẩn K nhỏ",
      "Ma trận đơn vị I và Ma trận nghịch đảo A⁻¹",
      "Ma trận trực giao U và Ma trận trực chuẩn V",
      "Ma trận hiệp phương sai liên lớp và nội lớp"
    ],
    correctAnswer: 0,
    explanation: "Matrix Factorization phân tích ma trận tiện ích Y thành tích của ma trận đặc trưng ẩn của người dùng Wᵀ và sản phẩm X (Y ≈ X Wᵀ), với số chiều ẩn K rất nhỏ.",
    tags: ["matrix_factorization", "latent_factors"]
  },
  {
    id: "modC_153",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Matrix Factorization Regularization",
    difficulty: "Trung bình",
    question: "Hàm mất mát của Matrix Factorization CF thường tích hợp thêm thành phần kiểm soát nào để tránh quá khớp?",
    options: [
      "L1 regularization cho cả W và X",
      "L2 regularization cho cả ma trận ẩn của người dùng W và sản phẩm X",
      "Làm mềm Laplace cho các điểm trống",
      "Hàm mất mát bản lề hinge loss"
    ],
    correctAnswer: 1,
    explanation: "Để tránh việc các giá trị ẩn trong W và X quá lớn gây quá khớp, mô hình cộng thêm phạt L2 (Ridge penalty) cho cả hai ma trận này vào hàm mất mát.",
    tags: ["matrix_factorization", "l2_regularization"]
  },
  {
    id: "modC_154",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Incremental Matrix Factorization",
    difficulty: "Khó",
    question: "Kỹ thuật phân tích ma trận điều chỉnh nhỏ (Incremental Matrix Factorization) giải quyết bài toán gì trong thực tế?",
    options: [
      "Giúp giảm số lượng sản phẩm trong kho xuống tối đa",
      "Cho phép cập nhật nhanh mô hình khi có thêm người dùng hoặc đánh giá mới bằng cách huấn luyện thêm vài vòng lặp thay vì phải huấn luyện lại từ đầu cực kỳ tốn thời gian",
      "Tự động xóa bỏ các đánh giá xấu",
      "Chuyển mô hình từ không giám sát sang có giám sát"
    ],
    correctAnswer: 1,
    explanation: "Trong thực tế, ma trận tiện ích biến động liên tục. Incremental MF giúp hệ thống cập nhật online cực kỳ nhanh chóng mà không cần tốn nhiều ngày để chạy lại toàn bộ dữ liệu.",
    tags: ["incremental_mf", "online_learning"]
  },
  {
    id: "modC_155",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Recommender Systems Evaluation",
    difficulty: "Dễ",
    question: "Độ đo nào thường được dùng để đánh giá hiệu năng của hệ thống gợi ý trên tập kiểm tra?",
    options: [
      "Độ chính xác Accuracy",
      "Căn bậc hai sai số trung bình bình phương (Root Mean Squared Error - RMSE)",
      "Hàm vết trace",
      "Độ tương tự Cosine trung bình"
    ],
    correctAnswer: 1,
    explanation: "RMSE đo lường độ lệch giữa điểm rating dự đoán và điểm rating thực tế trên các ô đã biết ở tập kiểm tra, giá trị RMSE càng nhỏ mô hình gợi ý càng chính xác.",
    tags: ["rmse", "evaluation"]
  },
  {
    id: "modC_156",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "PCA Type",
    difficulty: "Dễ",
    question: "Thuật toán Phân tích thành phần chính (Principal Component Analysis - PCA) là một thuật toán giảm chiều dữ liệu thuộc loại học nào?",
    options: [
      "Học có giám sát (Supervised Learning)",
      "Học không giám sát (Unsupervised Learning)",
      "Học củng cố (Reinforcement Learning)",
      "Học bán giám sát"
    ],
    correctAnswer: 1,
    explanation: "PCA chỉ phân tích cấu trúc phân bố của các điểm dữ liệu đầu vào mà không cần quan tâm đến nhãn của chúng, do đó là học không giám sát.",
    tags: ["pca", "unsupervised_learning"]
  },
  {
    id: "modC_157",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Eigenface",
    difficulty: "Trung bình",
    question: "Ứng dụng 'Eigenface' trong nhận diện khuôn mặt thực chất là việc áp dụng thuật toán nào?",
    options: [
      "K-Nearest Neighbors",
      "Principal Component Analysis (PCA)",
      "Linear Discriminant Analysis (LDA)",
      "Support Vector Machine"
    ],
    correctAnswer: 1,
    explanation: "Eigenfaces là các gương mặt riêng tìm được bằng cách áp dụng PCA lên cơ sở dữ liệu ảnh khuôn mặt để giảm chiều và trích chọn đặc trưng nhận diện.",
    tags: ["eigenface", "pca", "computer_vision"]
  },
  {
    id: "modC_158",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "LDA vs PCA",
    difficulty: "Trung bình",
    question: "Thuật toán Phân tích biệt thức tuyến tính (Linear Discriminant Analysis - LDA) khác với PCA ở điểm cốt lõi nào?",
    options: [
      "LDA không sử dụng toán ma trận",
      "LDA là thuật toán học có giám sát (supervised) tận dụng thông tin nhãn của dữ liệu để tìm hướng phân tách các lớp tốt nhất",
      "LDA luôn giảm chiều dữ liệu về 1 chiều duy nhất",
      "LDA chỉ áp dụng được cho dữ liệu ảnh xám"
    ],
    correctAnswer: 1,
    explanation: "Khác với PCA (không giám sát), LDA là học có giám sát. Nó tìm hướng chiếu sao cho dữ liệu thuộc các lớp khác nhau được phân tách rõ rệt nhất.",
    tags: ["lda", "pca", "supervised_learning"]
  },
  {
    id: "modC_159",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "LDA Limitations",
    difficulty: "Trung bình",
    question: "Khi dữ liệu thực tế của các lớp chồng lấn mạnh mẽ và không tách biệt tuyến tính (linearly separable), hiệu năng của LDA sẽ thế nào?",
    options: [
      "Vẫn hoạt động cực kỳ tốt",
      "Giảm đi rõ rệt vì mọi phương chiếu tuyến tính đều làm các lớp bị trộn lẫn vào nhau",
      "Luôn đạt độ chính xác 100%",
      "Tự động chuyển thành thuật toán SVM hạt nhân RBF"
    ],
    correctAnswer: 1,
    explanation: "LDA là một bộ phân loại tuyến tính. Nếu ranh giới phân chia giữa các lớp là phi tuyến phức tạp, phép chiếu tuyến tính của LDA sẽ làm mất đi khả năng phân tách của dữ liệu.",
    tags: ["lda", "limitations"]
  },
  {
    id: "modC_160",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Hard-margin SVM Idea",
    difficulty: "Dễ",
    question: "Ý tưởng cơ bản đứng sau thuật toán Máy vector hỗ trợ (Support Vector Machine - SVM) lề cứng là gì?",
    options: [
      "Tìm một siêu phẳng phân chia dữ liệu sao cho khoảng cách (lề - margin) từ siêu phẳng đó tới các điểm dữ liệu gần nhất của hai lớp là lớn nhất",
      "Tìm tâm cụm của hai lớp dữ liệu",
      "Tối thiểu hóa sai số bình phương trung bình trên tập kiểm tra",
      "Giảm chiều dữ liệu về không gian 2 chiều bằng hàm hạt nhân"
    ],
    correctAnswer: 0,
    explanation: "SVM lề cứng (hard-margin SVM) đi tìm siêu phẳng phân chia lề rộng nhất (maximum margin classifier) để tối đa hóa khả năng phân loại chính xác.",
    tags: ["svm", "maximum_margin"]
  },
  {
    id: "modC_161",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Support Vectors",
    difficulty: "Dễ",
    question: "Các 'vector hỗ trợ' (Support Vectors) trong thuật toán SVM là gì?",
    options: [
      "Tất cả các điểm dữ liệu huấn luyện",
      "Các điểm dữ liệu nằm sát đường biên lề (margin boundary) nhất, đóng vai trò quyết định vị trí của siêu phẳng phân chia",
      "Các vector trọng số w của mô hình",
      "Các hàm hạt nhân phi tuyến"
    ],
    correctAnswer: 1,
    explanation: "Chỉ các điểm nằm sát lề (support vectors) quyết định vị trí siêu phẳng phân chia. Các điểm khác không ảnh hưởng tới nghiệm.",
    tags: ["support_vectors", "svm"]
  },
  {
    id: "modC_162",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "SMO Algorithm",
    difficulty: "Trung bình",
    question: "Thuật toán phổ biến và hiệu quả thường được dùng để giải bài toán quy hoạch toàn phương đối ngẫu của SVM là gì?",
    options: [
      "Gradient Descent cơ bản",
      "Tối ưu hóa tối thiểu tuần tự (Sequential Minimal Optimization - SMO)",
      "Phân tích giá trị suy biến SVD",
      "Thuật toán học Perceptron"
    ],
    correctAnswer: 1,
    explanation: "SMO giải quyết bài toán đối ngẫu SVM bằng cách chia nhỏ thành các bài toán tối ưu con chỉ gồm 2 biến nhân tử Lagrange tại mỗi bước.",
    tags: ["smo", "svm_optimization"]
  },
  {
    id: "modC_163",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Soft-margin SVM",
    difficulty: "Dễ",
    question: "SVM lề mềm (Soft-margin SVM) đưa thêm đại lượng nào vào bài toán tối ưu để chấp nhận một số điểm bị phân loại sai hoặc nằm trong lề?",
    options: [
      "Hệ số regularization L1",
      "Các biến lỏng lẻo (slack variables, ký hiệu là ξ)",
      "Hàm kích hoạt sigmoid",
      "Làm mềm Laplace"
    ],
    correctAnswer: 1,
    explanation: "Biến lỏng lẻo ξ_i ≥ 0 cho phép các điểm dữ liệu lấn lách vào vùng biên lề hoặc nằm sai phía ranh giới với một mức phạt nhất định.",
    tags: ["soft_margin_svm", "slack_variables"]
  },
  {
    id: "modC_164",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "C-SVM Parameter",
    difficulty: "Trung bình",
    question: "Hằng số phạt C (C-SVM) trong SVM lề mềm kiểm soát mối quan hệ đánh đổi giữa hai đại lượng nào?",
    options: [
      "Số lượng đặc trưng và số lượng mẫu",
      "Mức độ ưu tiên tối đa hóa độ rộng của lề (margin) và mức độ phạt sai số phân loại sai (tổng các biến lỏng lẻo ξ_i)",
      "Tốc độ học và độ chính xác",
      "Hàm mục tiêu và hàm đối ngẫu"
    ],
    correctAnswer: 1,
    explanation: "C càng lớn thì phạt phân loại sai càng mạnh (biên lề thu hẹp lại), C càng nhỏ thì chấp nhận sai sót nhiều hơn để đổi lấy biên lề rộng hơn.",
    tags: ["c_svm", "hyperparameters"]
  },
  {
    id: "modC_165",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Hinge Loss",
    difficulty: "Dễ",
    question: "Hàm mất mát bản lề (Hinge Loss) dùng trong SVM lề mềm tối ưu không ràng buộc có dạng toán học là gì?",
    options: [
      "max(0, 1 - y (wᵀ x + b))",
      "1 / (1 + e⁻ʸᶻ)",
      "y log(p) + (1-y) log(1-p)",
      "(y - y_{pred})²"
    ],
    correctAnswer: 0,
    explanation: "Hinge loss bằng 0 nếu điểm nằm đúng phía ngoài lề (y z ≥ 1), và bằng 1 - y z nếu điểm lấn lề hoặc phân loại sai.",
    tags: ["hinge_loss", "svm"]
  },
  {
    id: "modC_166",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Kernel Trick",
    difficulty: "Trung bình",
    question: "Thủ thuật hạt nhân (Kernel Trick) trong SVM hạt nhân (Kernel SVM) là gì?",
    options: [
      "Chiếu dữ liệu trực tiếp lên không gian cực kỳ nhiều chiều rồi phân loại",
      "Thay thế tích vô hướng x_iᵀ x_j trong bài toán đối ngẫu bằng một hàm hạt nhân K(x_i, x_j) tương đương với tích vô hướng trong không gian chiếu mới mà không cần thực hiện phép chiếu tường minh",
      "Sử dụng mạng neuron tích chập để biến đổi ảnh",
      "Loại bỏ hoàn toàn các vector hỗ trợ"
    ],
    correctAnswer: 1,
    explanation: "Kernel trick cho phép tính toán trực tiếp độ tương đồng trong không gian chiếu bằng cách tính hàm hạt nhân ở không gian gốc mà không cần chiếu tường minh.",
    tags: ["kernel_trick", "kernel_svm"]
  },
  {
    id: "modC_167",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "RBF Kernel",
    difficulty: "Dễ",
    question: "Hàm hạt nhân RBF (Radial Basis Function / Gaussian kernel) phổ biến có công thức là:",
    options: [
      "K(x, y) = xᵀ y",
      "K(x, y) = exp(-γ ||x - y||₂²)",
      "K(x, y) = (xᵀ y + 1)ᵈ",
      "K(x, y) = tanh(β xᵀ y + θ)"
    ],
    correctAnswer: 1,
    explanation: "Hạt nhân RBF tính toán độ tương đồng dựa trên khoảng cách bình phương Euclid giữa hai điểm ngẫu nhiên K(x, y) = exp(-γ ||x - y||₂²).",
    tags: ["rbf_kernel", "gaussian_kernel"]
  },
  {
    id: "modC_168",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "RBF Gamma Parameter",
    difficulty: "Trung bình",
    question: "Điều gì xảy ra khi siêu tham số γ trong hạt nhân RBF của SVM quá lớn?",
    options: [
      "Ranh giới phân chia trở thành đường thẳng tuyến tính",
      "Mô hình rất dễ bị quá khớp (overfitting) vì vùng quyết định của mỗi điểm bị co hẹp lại xung quanh chính nó",
      "Mô hình bị chưa khớp (underfitting) tuyệt đối",
      "Thuật toán không thể hội tụ"
    ],
    correctAnswer: 1,
    explanation: "Gamma quá lớn làm hàm hạt nhân tiến về 0 rất nhanh khi điểm x xa y, khiến mô hình chỉ ghi nhớ cục bộ các điểm dữ liệu huấn luyện (overfitting).",
    tags: ["gamma_parameter", "overfitting", "rbf_kernel"]
  },
  {
    id: "modC_169",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "One-vs-Rest SVM",
    difficulty: "Dễ",
    question: "Khi chạy SVM đa lớp (Multi-class SVM), phương pháp One-vs-Rest (OvR) hoạt động theo cơ chế nào?",
    options: [
      "Huấn luyện đồng thời tất cả các lớp trong một bài toán tối ưu duy nhất",
      "Huấn luyện C bộ phân loại nhị phân, bộ thứ i phân biệt lớp i với tất cả C-1 lớp còn lại, điểm mới thuộc về lớp có điểm số cao nhất",
      "So sánh từng cặp lớp một (One-vs-One)",
      "Phân cụm dữ liệu thành C nhóm bằng K-means trước"
    ],
    correctAnswer: 1,
    explanation: "One-vs-Rest là kỹ thuật chia bài toán đa lớp thành C bài toán nhị phân độc lập của lớp đó chống lại tập hợp các lớp còn lại.",
    tags: ["one_vs_rest", "multi_class_svm"]
  },
  {
    id: "modC_170",
    module: "C",
    moduleName: "Kiến thức AI & Sản phẩm AI",
    topic: "Softmax vs Multi-class SVM",
    difficulty: "Trung bình",
    question: "Sự khác biệt chính về hàm mất mát giữa Hồi quy Softmax và SVM đa lớp là gì?",
    options: [
      "Softmax không sử dụng ma trận trọng số",
      "Softmax cố gắng tối đa hóa xác suất của lớp đúng (phân phối xác suất mượt), trong khi SVM đa lớp chỉ cần lớp đúng vượt qua các lớp sai một khoảng lề an toàn (hinge loss cứng)",
      "SVM đa lớp tính toán nhanh hơn 100 lần",
      "Softmax chỉ dùng cho dữ liệu 2 lớp"
    ],
    correctAnswer: 1,
    explanation: "Softmax regression sử dụng cross-entropy cố gắng đẩy xác suất lớp đúng sát 1, trong khi SVM đa lớp chỉ cần đạt khoảng cách lề tối thiểu giữa lớp đúng và các lớp sai.",
    tags: ["softmax_vs_svm", "loss_function"]
  }
];
