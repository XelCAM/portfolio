import { ToastContainer,} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import ContactMe from "./components/ContactMe"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"


function App() {

  return (
    <div>
      <Navbar/>
      <main>
        <Banner/>
        <Skills/>
        <AboutMe/>
        <Projects/>
        <ContactMe/>
      </main>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App
