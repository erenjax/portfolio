const Insignia = (): JSX.Element => {
  const titleSrc = "/Design/insignia/title.png"
  const sketchesSrc = "/Design/insignia/sketches.png"
  const lineDrawingsSrc = "/Design/insignia/line_drawings.png"
  const colorSrc = "/Design/insignia/color.png"
  const grayscaleSrc = "/Design/insignia/grayscale.png"

  return (
    <div className="flex flex-col space-y-16 items-center w-full pt-8">
      <img src={titleSrc} className="w-[820px]" alt="Title Page"></img>
      <img src={sketchesSrc} className="w-[820px]" alt="20 Sketches"></img>
      <img
        src={lineDrawingsSrc}
        className="w-[820px]"
        alt="10 Line Drawings"
      ></img>
      <img
        src={colorSrc}
        className="w-[820px]"
        alt="5 Frull Color Versions"
      ></img>
      <img src={grayscaleSrc} className="w-[820px]" alt="Final Grayscale"></img>
    </div>
  )
}

export default Insignia
