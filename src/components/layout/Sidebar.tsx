import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "cn";
import { useProgress } from "../../context/ProgressContext";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { navItems } from "./navItems";

export const Sidebar: React.FC = () => {
  const { progress } = useProgress();
  const incorrectCount = progress.incorrectQuestionIds.length;

  return (
    <aside className="hidden lg:flex flex-col w-64 border-r bg-card shrink-0 min-h-[calc(100vh-4rem)] p-4 gap-6">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  buttonVariants({ variant: isActive ? "default" : "ghost" }),
                  "justify-between h-10 px-3.5 rounded-lg",
                  !isActive && "text-muted-foreground hover:text-foreground"
                )
              }
            >
              <span className="flex items-center gap-3">
                <Icon />
                {item.label}
              </span>
              {item.showMistakeCount && incorrectCount > 0 && (
                <Badge variant="destructive">{incorrectCount}</Badge>
              )}
            </NavLink>
          );
        })}
      </nav>

      <Card className="mt-auto py-4 gap-2 bg-muted shadow-none">
        <CardContent className="px-4 space-y-2 text-xs">
          <div className="font-bold">Chương trình AI Thực chiến</div>
          <p className="text-muted-foreground leading-relaxed">
            Được thiết kế chuẩn hóa theo cấu trúc đánh giá năng lực Vingroup & VinUni.
          </p>
        </CardContent>
      </Card>
    </aside>
  );
};
