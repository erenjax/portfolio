import { Routes, Route, useLocation } from "react-router-dom"

import Header from "./Header"
import Development from "./Development"
import Design from "./Design"
import Experience from "./Experience"
import About from "./About"
import Home from "./Home"

import { GraphicDesign, Photography, DigitalArt } from "./Design/designProjects"

const Main = (): JSX.Element => {
  const location = useLocation()

  return (
    <div className="overflow-x-hidden">
      {location.pathname !== "/" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="development" element={<Development />} />
        <Route path="design" element={<Design />}>
          <Route path="graphicDesign" element={<GraphicDesign />} />
          <Route path="photography" element={<Photography />} />
          <Route path="digitalArt" element={<DigitalArt />} />
        </Route>
        <Route path="experience" element={<Experience />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

export default Main
