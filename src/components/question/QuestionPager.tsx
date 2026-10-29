import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface QuestionPagerProps {
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export const QuestionPager: React.FC<QuestionPagerProps> = ({ currentIndex, total, onPrev, onNext }) => (
  <Card className="py-4">
    <CardContent className="px-4 flex items-center justify-between">
      <Button variant="outline" onClick={onPrev} disabled={currentIndex === 0}>
        <ArrowLeft />
        Câu trước
      </Button>

      <span className="text-xs font-semibold text-muted-foreground">
        Câu {currentIndex + 1} / {total}
      </span>

      <Button onClick={onNext} disabled={currentIndex === total - 1}>
        Câu tiếp
        <ArrowRight />
      </Button>
    </CardContent>
  </Card>
);
