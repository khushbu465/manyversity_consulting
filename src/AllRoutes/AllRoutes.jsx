import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Header from "../Common/Header"
import Footer from "../Common/Footer"
import AboutUs from "../Pages/AboutUs"
import StudentSubsequent from "../Pages/StudentVisas/StudentSubsequent"
import StudentVisaExtension from "../Pages/StudentVisas/StudentVisaExtension"
import StudentVisaJourney from "../Pages/StudentVisas/StudentVisaJourney"
import StudentGuardian_Visa from "../Pages/StudentVisas/StudentGuardian_Visa"
import Contact from "../Pages/Contact"

const AllRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/student_subsequent_dependent_visa_500" element={<StudentSubsequent />} />
                    <Route path="/student_visa_extension" element={<StudentVisaExtension />} />
                    <Route path="/student_visa_journey" element={<StudentVisaJourney />} />
                    <Route path="/student_guardian_visa" element={<StudentGuardian_Visa />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AllRoutes
