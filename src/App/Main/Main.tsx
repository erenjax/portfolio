import { Routes, Route, Navigate, useLocation } from "react-router-dom"

import Portfolio, { ScrollToLocation } from "./Portfolio"
import "./Portfolio.css"

import Header from "./Header"
import Footer from "./Footer"

import { GraphicDesign, Photography } from "./Design/designProjects"
import { Nordle, Evolv } from "./Development/devProjects"
import TripJam from "./Development/devProjects/TripJam"

const Main = (): JSX.Element => {
  const location = useLocation()

  return (
    <div
      className={`overflow-x-hidden ${location.pathname === "/" ? "home-layout" : "project-layout"}`}
    >
      <Header />
      <ScrollToLocation />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="projects" element={<Navigate to="/#projects" replace />} />
        <Route
          path="development"
          element={<Navigate to="/#projects" replace />}
        />
        <Route path="development/nordle" element={<Nordle />} />
        <Route path="development/tripjam" element={<TripJam />} />
        <Route path="development/evolv" element={<Evolv />} />
        <Route path="design" element={<Navigate to="/#projects" replace />} />
        <Route path="design/graphicDesign" element={<GraphicDesign />} />
        <Route path="design/photography" element={<Photography />} />
        <Route
          path="experience"
          element={<Navigate to="/#experience" replace />}
        />
        <Route path="experience/evolv" element={<Evolv />} />
        <Route path="about" element={<Navigate to="/#about" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Main
