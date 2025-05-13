import { Outlet } from "react-router"
import { Navbar } from "./navbar"

export const Layout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>
        </>
    )
}