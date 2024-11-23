import { Routes, Route, useLocation } from "react-router-dom"

import Header from "./Header"
import Projects from "./Projects"
import Experience from "./Experience"
import About from "./About"
import Home from "./Home"

const Main = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className="overflow-x-hidden">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Main
