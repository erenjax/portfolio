import ArtworkCarousel from "./ArtworkCarousel"

const Insignia = (): JSX.Element => (
  <ArtworkCarousel
    title="Insignia"
    images={[
      { src: "/Design/insignia/title.png", alt: "Title Page" },
      { src: "/Design/insignia/sketches.png", alt: "20 Sketches" },
      { src: "/Design/insignia/line_drawings.png", alt: "10 Line Drawings" },
      { src: "/Design/insignia/color.png", alt: "5 Full Color Versions" },
      { src: "/Design/insignia/grayscale.png", alt: "Final Grayscale" },
    ]}
  />
)
export default Insignia
