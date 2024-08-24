import Footer from "../components/Footer"
import Hero from "../components/Hero"
import MiddleSection from "../components/MiddleSection"
import Navbar from "../components/Navbar"

const MainPage = () => {
  return (
    <div className="bg-zinc-900 h-dvh ">
            <Navbar/>
            <Hero/>
            <MiddleSection/>
            <Footer/>
    </div>
  )
}

export default MainPage
