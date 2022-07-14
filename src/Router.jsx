import React from 'react'
import { Routes, Route, BrowserRouter as Routing, } from 'react-router-dom'
import About from './Pages/About'
import Home from './Pages/Home'
function Router() {
    return (
        <>
            <Routing>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Routing>


        </>
    )
}

export default Router