import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../pages/home"
import { Repos } from "../components/Pages/repos"

const Routers = () => {
    return (

        <BrowserRouter >
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/repos/:username' element={<Repos/>}></Route>
        </Routes>
        </BrowserRouter >

    )
}

export { Routers }