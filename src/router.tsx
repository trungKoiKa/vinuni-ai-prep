import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { Dashboard } from "./pages/Dashboard";
import { ModuleList } from "./pages/ModuleList";
import { ModuleStudyContent } from "./pages/ModuleStudyContent";
import { Practice } from "./pages/Practice";
import { MockTest } from "./pages/MockTest";
import { Result } from "./pages/Result";
import { ReviewMistakes } from "./pages/ReviewMistakes";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "modules", element: <ModuleList /> },
      { path: "modules/:id/study", element: <ModuleStudyContent /> },
      { path: "practice", element: <Practice /> },
      { path: "practice/:moduleId", element: <Practice /> },
      { path: "mock-test", element: <MockTest /> },
      { path: "result/:attemptId", element: <Result /> },
      { path: "review", element: <ReviewMistakes /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
