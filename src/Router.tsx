import { Route, Routes } from "react-router-dom";
import SingIn from "./pages/auth/SingIn";
import Home from "./pages/home";
import { LayoutHome } from "./layout/Home";


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SingIn />} />
            <Route path="/home" element={<LayoutHome />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    )
}