import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Projects from "./Projects"
import AdditionalProjects from "./AdditionalProjects"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"

const Main = (): JSX.Element => {
  return (
    <Router>
      <div className="text-200">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="additional" element={<AdditionalProjects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  )
}

export default Main
