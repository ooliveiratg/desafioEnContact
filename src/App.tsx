import SingIn from "./pages/auth/SingIn";
import { ThemeProvider } from "./theme/theneProvider";

export default function App() {
  return (
  <ThemeProvider >
    <SingIn/>
  </ThemeProvider>
  )
}
