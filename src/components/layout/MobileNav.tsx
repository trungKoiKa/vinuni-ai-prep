import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "cn";
import { useProgress } from "../../context/ProgressContext";
import { navItems } from "./navItems";

export const MobileNav: React.FC = () => {
  const { progress } = useProgress();
  const incorrectCount = progress.incorrectQuestionIds.length;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-md border-t px-2 py-1 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              cn(
                "relative flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] font-medium transition-colors",
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )
            }
          >
            <Icon className="size-5 shrink-0" />
            <span>{item.shortLabel}</span>
            {item.showMistakeCount && incorrectCount > 0 && (
              <span className="absolute top-1 right-1 size-4 rounded-full bg-destructive text-white text-[9px] font-bold flex items-center justify-center">
                {incorrectCount}
              </span>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};
