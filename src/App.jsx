
import { useEffect, useState } from "react"
import AllRoutes from "./AllRoutes/AllRoutes"
import Preloader from "./Common/Preloader";
import AOS from "aos";
import "aos/dist/aos.css"; // You need to import the CSS

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);


  }, []);

  return (
    <>
      {/* {loading ? <Preloader /> : <AllRoutes />} */}
      <AllRoutes />
    </>
  )
}

export default App
