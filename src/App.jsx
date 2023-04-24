import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Background} from './components';


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Background />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <div className="section-spacing">
            <Hero />
          </div>
        </div>
        <div className="section-spacing">
          <About />
        </div>
        <Experience />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
