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
import Training_visa_407 from "../Pages/StudentVisas/Training_visa_407"
import Student_Extension from "../Pages/StudentVisas/Student_Extension"
import Student_visa_information from "../Pages/StudentVisas/Student_visa_information"
import Student_subsequent_visa from "../Pages/StudentVisas/Student_subsequent_visa"

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
                    <Route path="/training_visa_407" element={<Training_visa_407 />} />
                    <Route path="/student_extension" element={<Student_Extension />} />
                    <Route path="/student_visa_information" element={<Student_visa_information />} />
                    <Route path="/student_subsequent_visa" element={<Student_subsequent_visa />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AllRoutes
