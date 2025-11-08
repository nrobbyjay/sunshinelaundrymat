import {Outlet} from "react-router-dom"

import UNavbar from "../components/navbars/UNavbar"

export default function UserLayout(){
    return(
        <div className="app-container">
            <UNavbar/>
            <main className="flex-1 container mx-auto p-4 main-content">
                <Outlet/>
            </main>            
        </div>

    )
}