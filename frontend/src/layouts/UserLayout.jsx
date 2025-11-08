import {Outlet} from "react-router-dom"

import UNavbar from "../components/navbars/UNavbar"
import OffCanvasSidebar from "../components/navbars/OffCanvasSidebar"
import OffCanvasNotification from "../components/navbars/OffCanvasNotification"

export default function UserLayout(){
    return(
        <div className="app-container">
            <UNavbar/>
            <OffCanvasSidebar/>
            <OffCanvasNotification/>
            <main className="flex-1 container mx-auto p-4 main-content">
                <Outlet/>
            </main>            
        </div>

    )
}