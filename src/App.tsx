import { Toaster } from "sonner";
import { ThemeProvider } from "./theme/theneProvider";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export default function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
