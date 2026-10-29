import React from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { cn } from "cn";
import { studyGuides } from "../data/studyContent";
import { modulesData } from "../data/modules";
import type { ModuleId } from "../types/question";
import { MathText } from "../components/ui/MathText";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, PenTool, Lightbulb, AlertTriangle, Code } from "lucide-react";

export const ModuleStudyContent: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const activeModuleId: ModuleId = (id && ["A", "B", "C", "D"].includes(id.toUpperCase()) ? id.toUpperCase() : "A") as ModuleId;
  const guide = studyGuides[activeModuleId];
  const modMeta = modulesData.find((m) => m.id === activeModuleId)!;

  return (
    <div className="space-y-8 animate-in fade-in duration-200">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4">
        <Button variant="outline" size="sm" onClick={() => navigate("/modules")}>
          <ArrowLeft />
          Danh sách Module
        </Button>

        <Button size="sm" onClick={() => navigate(`/practice/${activeModuleId}`)}>
          <PenTool />
          Luyện tập ngay câu hỏi {modMeta.code}
        </Button>
      </div>

      <nav className="flex items-center gap-2 border-b overflow-x-auto pb-2">
        {modulesData.map((m) => (
          <NavLink
            key={m.id}
            to={`/modules/${m.id}/study`}
            className={cn(
              buttonVariants({ variant: m.id === activeModuleId ? "default" : "outline" }),
              "font-semibold"
            )}
          >
            {m.code}: {m.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-6 rounded-lg bg-card border border-l-4 border-l-primary space-y-3">
        <Badge variant="soft" className="px-3 py-1 font-bold">
          <BookOpen />
          Tài liệu ôn tập chuẩn hóa
        </Badge>
        <h1 className="text-2xl sm:text-3xl font-extrabold">{guide.title}</h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
          <MathText text={guide.overview} />
        </p>
      </div>

      <div className="space-y-6">
        {guide.topics.map((topic, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle className="text-lg font-bold flex items-center gap-2">
                <span className="w-2 h-6 rounded-full bg-primary inline-block" />
                {topic.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="text-sm sm:text-base leading-relaxed">
                <MathText text={topic.summary} />
              </div>

              {topic.keyFormulas && topic.keyFormulas.length > 0 && (
                <Alert variant="info">
                  <Lightbulb />
                  <AlertTitle className="text-xs font-bold uppercase tracking-wider">
                    Công thức & Nguyên lý cốt lõi
                  </AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside space-y-1.5 font-mono">
                      {topic.keyFormulas.map((f, i) => (
                        <li key={i}>
                          <MathText text={f} />
                        </li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}

              {topic.codeExample && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <Code className="size-4" />
                    <span>Mã nguồn ví dụ Python</span>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-900 text-slate-100 font-mono text-xs sm:text-sm overflow-x-auto border border-slate-800">
                    <pre className="m-0 leading-relaxed font-mono">{topic.codeExample}</pre>
                  </div>
                </div>
              )}

              {topic.commonPitfalls && topic.commonPitfalls.length > 0 && (
                <Alert className="border-destructive/20 bg-destructive/10 text-destructive *:data-[slot=alert-description]:text-foreground">
                  <AlertTriangle />
                  <AlertTitle className="text-xs font-bold uppercase tracking-wider">
                    Lỗi sai thường gặp
                  </AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside space-y-1">
                      {topic.commonPitfalls.map((p, i) => (
                        <li key={i}>
                          <MathText text={p} />
                        </li>
                      ))}
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
