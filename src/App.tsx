import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ThemeProvider } from "./context/ThemeContext";
import { ProgressProvider } from "./context/ProgressContext";
import { Toaster } from "@/components/ui/sonner";

export function App() {
  return (
    <ThemeProvider>
      <ProgressProvider>
        <RouterProvider router={router} />
        <Toaster position="bottom-right" richColors={false} />
      </ProgressProvider>
    </ThemeProvider>
  );
}

export default App;
