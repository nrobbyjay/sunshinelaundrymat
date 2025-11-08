import {BrowserRouter, Routes, Route} from "react-router-dom"

import MainLayout from "./layouts/MainLayout";
import UserLayout from "./layouts/UserLayout";

import Home from "./pages/Home";
import User from "./pages/User"

export default function App() {
  //use auth mechanism later
  const user = false
  let routes
  if(!user){
    routes = (
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    )
  }
  else{
    routes = (
      <Route element={<UserLayout/>}>
        <Route path="/" element={<User/>}/>
      </Route>
    )
  }
  return(
      <BrowserRouter>
        <Routes>
          {routes}
        </Routes>
      </BrowserRouter>
  )
}