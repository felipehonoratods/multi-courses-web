import { Layout } from "@/components/layout"
import { Courses } from "@/pages/Courses"
import { Home } from "@/pages/Home"
import { BrowserRouter, Route, Routes } from "react-router"

export const MainRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cursos" element={<Courses />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}