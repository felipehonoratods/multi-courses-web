import { Layout } from "@/components/layout"
import { BrowserRouter, Route, Routes } from "react-router"

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<h1>Home</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}