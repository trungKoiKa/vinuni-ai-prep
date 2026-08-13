import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { studyGuides } from "../data/studyContent";
import { modulesData } from "../data/modules";
import type { ModuleId } from "../types/question";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { ArrowLeft, BookOpen, PenTool, Lightbulb, AlertTriangle, Code } from "lucide-react";

export const ModuleStudyContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const activeModuleId: ModuleId = (id && ["A", "B", "C", "D"].includes(id.toUpperCase()) ? id.toUpperCase() : "A") as ModuleId;
  const guide = studyGuides[activeModuleId];
  const modMeta = modulesData.find((m) => m.id === activeModuleId)!;

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between gap-4 border-b border-border-color pb-4">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate("/modules")}
            icon={<ArrowLeft className="w-4 h-4" />}
          >
            Danh sách Module
          </Button>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => navigate(`/practice/${activeModuleId}`)}
          icon={<PenTool className="w-4 h-4" />}
        >
          Luyện tập ngay câu hỏi {modMeta.code}
        </Button>
      </div>

      <div className="flex items-center gap-2 border-b border-border-color overflow-x-auto pb-2">
        {modulesData.map((m) => (
          <Link
            key={m.id}
            to={`/modules/${m.id}/study`}
            className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-colors border ${
              m.id === activeModuleId
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-bg-surface text-text-secondary border-border-color hover:bg-bg-surface-hover"
            }`}
          >
            {m.code}: {m.name}
          </Link>
        ))}
      </div>

      <div className="p-6 rounded-3xl bg-gradient-to-r from-bg-surface to-bg-surface-hover border border-border-color space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Tài liệu ôn tập chuẩn hóa</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-text-primary">
          {guide.title}
        </h1>
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl">
          {guide.overview}
        </p>
      </div>

      <div className="space-y-6">
        {guide.topics.map((topic, idx) => (
          <Card key={idx} className="space-y-4 p-6">
            <h2 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-primary inline-block" />
              {topic.title}
            </h2>

            <p className="text-sm sm:text-base text-text-primary leading-relaxed">
              {topic.summary}
            </p>

            {topic.keyFormulas && topic.keyFormulas.length > 0 && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/15 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>Công thức & Nguyên lý cốt lõi</span>
                </div>
                <ul className="list-disc list-inside text-sm text-text-primary space-y-1 font-mono">
                  {topic.keyFormulas.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            {topic.codeExample && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-text-secondary uppercase tracking-wider">
                  <Code className="w-4 h-4" />
                  <span>Mã nguồn ví dụ Python</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800">
                  <pre className="m-0 leading-relaxed font-mono">{topic.codeExample}</pre>
                </div>
              </div>
            )}

            {topic.commonPitfalls && topic.commonPitfalls.length > 0 && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Lỗi sai thường gặp</span>
                </div>
                <ul className="list-disc list-inside text-sm text-text-primary space-y-1">
                  {topic.commonPitfalls.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};
