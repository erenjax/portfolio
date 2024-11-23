import { Routes, Route, useLocation } from "react-router-dom"

import Header from "./Header"
import Projects from "./Projects"
import Additional from "./Additional"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"

const Main = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className="overflow-x-hidden">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="additional" element={<Additional />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Main
