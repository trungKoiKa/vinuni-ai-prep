import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  PenTool,
  Clock,
  RotateCcw,
  Settings,
} from "lucide-react";
import { clsx } from "clsx";
import { useProgress } from "../../context/ProgressContext";

export const MobileNav: React.FC = () => {
  const { progress } = useProgress();
  const incorrectCount = progress.incorrectQuestionIds.length;

  const navItems = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/modules", label: "Module", icon: BookOpen },
    { to: "/practice", label: "Luyện tập", icon: PenTool },
    { to: "/mock-test", label: "Thi thử", icon: Clock },
    {
      to: "/review",
      label: "Câu sai",
      icon: RotateCcw,
      badge: incorrectCount > 0 ? incorrectCount : null,
    },
    { to: "/settings", label: "Cài đặt", icon: Settings },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-bg-surface/90 backdrop-blur-md border-t border-border-color px-2 py-1 flex items-center justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              clsx(
                "relative flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition-colors",
                isActive ? "text-primary" : "text-text-secondary hover:text-text-primary"
              )
            }
          >
            <Icon className="w-5 h-5 shrink-0" />
            <span>{item.label}</span>
            {item.badge !== null && item.badge !== undefined && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-danger text-white text-[9px] font-bold flex items-center justify-center">
                {item.badge}
              </span>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};
