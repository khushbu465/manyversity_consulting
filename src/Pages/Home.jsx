import React from 'react'
import Slider from '../Components/HomeComponents/Slider'
import About from '../Components/HomeComponents/About'
import Services from '../Components/HomeComponents/Services'
import Counter from '../Components/HomeComponents/Counter'
import Testimonial from '../Components/HomeComponents/Testimonial'

const Home = () => {
    return (
        <>
            <div className="page-wrapper">
                <Slider />
                <About />
                <Counter/>
                <Services />
               <Testimonial/>
            </div>

        </>
    )
}

export default Home
