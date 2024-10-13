import { NavLink, Outlet } from "react-router-dom"

export const Home = () => {



    return <>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/basket">Basket</NavLink>

        </nav>
        <Outlet/>
    </>
}