import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const TopBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-16 bg-card/80 backdrop-blur-md border-b px-4 sm:px-8 flex items-center justify-between transition-colors">
      <Link to="/" className="flex items-center gap-2.5 group">
        <div className="size-9 rounded-xl bg-linear-to-tr from-primary to-brand flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
          <Sparkles className="size-5" />
        </div>
        <div>
          <div className="font-bold text-base leading-tight tracking-tight flex items-center gap-1.5">
            AI Thực Chiến <Badge variant="soft">VinUni</Badge>
          </div>
          <div className="text-[11px] text-muted-foreground">Ôn Thi Đánh Giá Năng Lực</div>
        </div>
      </Link>

      <Button variant="outline" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
        {theme === "dark" ? (
          <Sun className="size-5 text-amber-400" />
        ) : (
          <Moon className="size-5 text-slate-600" />
        )}
      </Button>
    </header>
  );
};
