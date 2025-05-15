import { Layout } from "@/components/layout"
import { Home } from "@/pages/Home"
import { BrowserRouter, Route, Routes } from "react-router"

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}