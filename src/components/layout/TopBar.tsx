import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const TopBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-16 bg-card/80 backdrop-blur-md border-b px-4 sm:px-8 flex items-center justify-between transition-colors">
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="size-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-mono text-sm font-bold tracking-tight">
          AI
        </div>
        <div>
          <div className="font-bold text-base leading-tight tracking-tight flex items-center gap-1.5">
            AI Thực Chiến <Badge variant="outline" className="text-muted-foreground">VinUni</Badge>
          </div>
          <div className="text-[11px] text-muted-foreground">Ôn Thi Đánh Giá Năng Lực</div>
        </div>
      </Link>

      <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
        {theme === "dark" ? (
          <Sun className="size-5" />
        ) : (
          <Moon className="size-5" />
        )}
      </Button>
    </header>
  );
};
