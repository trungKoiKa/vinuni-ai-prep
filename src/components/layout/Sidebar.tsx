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

export const Sidebar: React.FC = () => {
  const { progress } = useProgress();
  const incorrectCount = progress.incorrectQuestionIds.length;

  const navItems = [
    { to: "/", label: "Dashboard", icon: LayoutDashboard },
    { to: "/modules", label: "Danh sách Module", icon: BookOpen },
    { to: "/practice", label: "Luyện tập", icon: PenTool },
    { to: "/mock-test", label: "Đề mô phỏng 90p", icon: Clock },
    {
      to: "/review",
      label: "Ôn lại câu sai",
      icon: RotateCcw,
      badge: incorrectCount > 0 ? incorrectCount : null,
    },
    { to: "/settings", label: "Cài đặt", icon: Settings },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r border-border-color bg-bg-surface shrink-0 min-h-[calc(100vh-4rem)] p-4 space-y-6">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                clsx(
                  "flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150",
                  isActive
                    ? "bg-primary text-white shadow-sm shadow-primary/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover"
                )
              }
            >
              <div className="flex items-center gap-3">
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.label}</span>
              </div>
              {item.badge !== null && item.badge !== undefined && (
                <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-danger text-white">
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Info Widget */}
      <div className="mt-auto p-4 rounded-2xl bg-bg-surface-hover border border-border-color text-xs space-y-2">
        <div className="font-bold text-text-primary">Chương trình AI Thực chiến</div>
        <p className="text-text-secondary leading-relaxed">
          Được thiết kế chuẩn hóa theo cấu trúc đánh giá năng lực Vingroup & VinUni.
        </p>
      </div>
    </aside>
  );
};
