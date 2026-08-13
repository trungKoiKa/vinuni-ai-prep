import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modulesData } from "../data/modules";
import { allQuestions } from "../data/questions";
import { useProgress } from "../context/ProgressContext";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { ProgressBar } from "../components/ui/ProgressBar";
import {
  Calculator,
  Code2,
  BrainCircuit,
  Scale,
  BookOpen,
  PenTool,
  Search,
} from "lucide-react";

export const ModuleList: React.FC = () => {
  const { progress } = useProgress();
  const navigate = useNavigate();

  const [selectedModule, setSelectedModule] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const iconMap: Record<string, React.ReactNode> = {
    Calculator: <Calculator className="w-6 h-6" />,
    Code2: <Code2 className="w-6 h-6" />,
    BrainCircuit: <BrainCircuit className="w-6 h-6" />,
    Scale: <Scale className="w-6 h-6" />,
  };

  const filteredModules = modulesData.filter((mod) => {
    if (selectedModule !== "ALL" && mod.id !== selectedModule) return false;
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchName = mod.name.toLowerCase().includes(q);
      const matchDesc = mod.description.toLowerCase().includes(q);
      if (!matchName && !matchDesc) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border-color pb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
            Danh sách 4 Module Ôn Thi
          </h1>
          <p className="text-sm text-text-secondary mt-1">
            Chọn module để xem tóm tắt kiến thức hoặc làm câu hỏi trắc nghiệm chuyên sâu.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-bg-surface border border-border-color">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Tìm kiếm chủ đề, từ khóa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-border-color bg-bg-surface-hover text-text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedModule("ALL")}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
              selectedModule === "ALL"
                ? "bg-primary text-white border-primary"
                : "bg-bg-surface-hover text-text-secondary border-border-color"
            }`}
          >
            Tất cả (4)
          </button>
          {modulesData.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelectedModule(m.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors ${
                selectedModule === m.id
                  ? "bg-primary text-white border-primary"
                  : "bg-bg-surface-hover text-text-secondary border-border-color"
              }`}
            >
              {m.code}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredModules.map((mod) => {
          const modQuestions = allQuestions.filter((q) => q.module === mod.id);
          const answeredMod = modQuestions.filter((q) =>
            progress.answeredQuestionIds.includes(q.id)
          ).length;
          const percent = Math.round((answeredMod / modQuestions.length) * 100);

          return (
            <Card key={mod.id} hoverEffect className="flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                      style={{
                        backgroundColor: `${mod.color}15`,
                        color: mod.color,
                      }}
                    >
                      {iconMap[mod.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-text-secondary tracking-wider uppercase">
                        {mod.code}
                      </span>
                      <h2 className="text-lg font-bold text-text-primary leading-snug">
                        {mod.name}
                      </h2>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-medium border border-border-color bg-bg-surface-hover">
                    {modQuestions.length} câu hỏi
                  </span>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {mod.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <Badge difficulty="Dễ" />
                  <Badge difficulty="Trung bình" />
                  <Badge difficulty="Khó" />
                </div>
              </div>

              <div className="space-y-2 border-t border-border-color pt-4">
                <div className="flex items-center justify-between text-xs text-text-secondary font-medium">
                  <span>Tiến độ luyện tập</span>
                  <span>
                    {answeredMod}/{modQuestions.length} câu ({percent}%)
                  </span>
                </div>
                <ProgressBar percent={percent} height="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate(`/modules/${mod.id}/study`)}
                  icon={<BookOpen className="w-4 h-4" />}
                >
                  Tóm tắt kiến thức
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => navigate(`/practice/${mod.id}`)}
                  icon={<PenTool className="w-4 h-4" />}
                >
                  Luyện câu hỏi
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
