import React from "react";
import { Lightbulb } from "lucide-react";
import { MathText } from "../ui/MathText";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface ExplanationBoxProps {
  explanation: string;
}

export const ExplanationBox: React.FC<ExplanationBoxProps> = ({ explanation }) => {
  return (
    <Alert variant="warning" className="mt-6 p-4 sm:p-5 animate-in fade-in duration-200">
      <Lightbulb />
      <AlertTitle className="font-bold">Lời giải & Giải thích chi tiết</AlertTitle>
      <AlertDescription className="block leading-relaxed">
        <MathText text={explanation} />
      </AlertDescription>
    </Alert>
  );
};
