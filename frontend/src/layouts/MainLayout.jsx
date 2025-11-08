import {Outlet} from "react-router-dom"

import Navbar from "../components/navbars/MainNavbar"
import Footer from "../components/MainFooter"

export default function MainLayout(){
    return(
        <div className="app-container">
            <Navbar/>
            <main className="flex-1 container mx-auto p-4 main-content">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}