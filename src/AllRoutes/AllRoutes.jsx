import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Header from "../Common/Header"
import Footer from "../Common/Footer"
import AboutUs from "../Pages/AboutUs"

const AllRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AllRoutes
