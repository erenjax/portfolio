import { Routes, Route, useLocation } from "react-router-dom"

import Header from "./Header"
import Footer from "./Footer"
import CursorGlow from "./CursorGlow"
import Development from "./Development"
import Design from "./Design"
import Experience from "./Experience"
import About from "./About"
import Home from "./Home"

import { GraphicDesign, Photography } from "./Design/designProjects"
import { Nordle, Evolv } from "./Development/devProjects"
import TripJam from "./Development/devProjects/TripJam"

const Main = (): JSX.Element => {
  const location = useLocation()

  return (
    <div
      className={`overflow-x-hidden ${location.pathname === "/" ? "home-layout" : ""}`}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="development" element={<Development />} />
        <Route path="development/nordle" element={<Nordle />} />
        <Route path="development/tripjam" element={<TripJam />} />
        <Route path="development/evolv" element={<Evolv />} />
        <Route path="design" element={<Design />} />
        <Route path="design/graphicDesign" element={<GraphicDesign />} />
        <Route path="design/photography" element={<Photography />} />
        <Route path="experience" element={<Experience />} />
        <Route path="experience/evolv" element={<Evolv />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
      <CursorGlow />
    </div>
  )
}

export default Main
