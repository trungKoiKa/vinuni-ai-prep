import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { modulesData } from "../data/modules";
import { allQuestions } from "../data/questions";
import { useProgress } from "../context/ProgressContext";
import { progressColor } from "../lib/progressColor";
import { PageHeader } from "../components/layout/PageHeader";
import { FilterBar } from "../components/layout/FilterBar";
import { DifficultyBadge } from "../components/question/DifficultyBadge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Calculator,
  Code2,
  BrainCircuit,
  Scale,
  BookOpen,
  PenTool,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="size-6" />,
  Code2: <Code2 className="size-6" />,
  BrainCircuit: <BrainCircuit className="size-6" />,
  Scale: <Scale className="size-6" />,
};

export const ModuleList: React.FC = () => {
  const { progress } = useProgress();
  const navigate = useNavigate();

  const [selectedModule, setSelectedModule] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
    <div className="space-y-8 animate-in fade-in duration-200">
      <PageHeader
        title="Danh sách 4 Module Ôn Thi"
        description="Chọn module để xem tóm tắt kiến thức hoặc làm câu hỏi trắc nghiệm chuyên sâu."
      />

      <FilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Tìm kiếm chủ đề, từ khóa..."
        options={[
          { value: "ALL", label: `Tất cả (${modulesData.length})` },
          ...modulesData.map((m) => ({ value: m.id, label: m.code })),
        ]}
        selected={selectedModule}
        onSelectedChange={setSelectedModule}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredModules.map((mod) => {
          const modQuestions = allQuestions.filter((q) => q.module === mod.id);
          const answeredMod = modQuestions.filter((q) =>
            progress.answeredQuestionIds.includes(q.id)
          ).length;
          const percent = Math.round((answeredMod / modQuestions.length) * 100);

          return (
            <Card key={mod.id} className="justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div
                    className="size-12 rounded-xl flex items-center justify-center shadow-xs"
                    style={{ backgroundColor: `${mod.color}15`, color: mod.color }}
                  >
                    {iconMap[mod.iconName]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase">
                      {mod.code}
                    </span>
                    <h2 className="text-lg font-bold leading-snug">{mod.name}</h2>
                  </div>
                </div>
                <CardAction>
                  <Badge variant="outline">{modQuestions.length} câu hỏi</Badge>
                </CardAction>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{mod.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  <DifficultyBadge difficulty="Dễ" />
                  <DifficultyBadge difficulty="Trung bình" />
                  <DifficultyBadge difficulty="Khó" />
                </div>

                <div className="space-y-2 border-t pt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-medium">
                    <span>Tiến độ luyện tập</span>
                    <span>
                      {answeredMod}/{modQuestions.length} câu ({percent}%)
                    </span>
                  </div>
                  <Progress value={percent} className="bg-muted" indicatorClassName={progressColor(percent)} />
                </div>
              </CardContent>

              <CardFooter className="grid grid-cols-2 gap-3">
                <Button variant="outline" size="sm" onClick={() => navigate(`/modules/${mod.id}/study`)}>
                  <BookOpen />
                  Tóm tắt kiến thức
                </Button>
                <Button size="sm" onClick={() => navigate(`/practice/${mod.id}`)}>
                  <PenTool />
                  Luyện câu hỏi
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
