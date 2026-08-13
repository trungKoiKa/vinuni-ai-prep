import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export const TopBar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-16 bg-bg-surface/80 backdrop-blur-md border-b border-border-color px-4 sm:px-8 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="font-bold text-base leading-tight tracking-tight text-text-primary flex items-center gap-1.5">
              AI Thực Chiến <span className="text-xs px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">VinUni</span>
            </div>
            <div className="text-[11px] text-text-secondary">Ôn Thi Đánh Giá Năng Lực</div>
          </div>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="p-2 rounded-xl border border-border-color bg-bg-surface hover:bg-bg-surface-hover text-text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-amber-400" />
          ) : (
            <Moon className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>
    </header>
  );
};
