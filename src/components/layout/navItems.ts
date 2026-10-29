import type { LucideIcon } from "lucide-react";
import { LayoutDashboard, BookOpen, PenTool, Clock, RotateCcw, Settings } from "lucide-react";

export interface NavItem {
  to: string;
  label: string;
  shortLabel: string;
  icon: LucideIcon;
  showMistakeCount?: boolean;
}

export const navItems: NavItem[] = [
  { to: "/", label: "Dashboard", shortLabel: "Dashboard", icon: LayoutDashboard },
  { to: "/modules", label: "Danh sách Module", shortLabel: "Module", icon: BookOpen },
  { to: "/practice", label: "Luyện tập", shortLabel: "Luyện tập", icon: PenTool },
  { to: "/mock-test", label: "Đề mô phỏng 90p", shortLabel: "Thi thử", icon: Clock },
  { to: "/review", label: "Ôn lại câu sai", shortLabel: "Câu sai", icon: RotateCcw, showMistakeCount: true },
  { to: "/settings", label: "Cài đặt", shortLabel: "Cài đặt", icon: Settings },
];
