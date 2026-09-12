import ArtworkCarousel from "./ArtworkCarousel"

const OneAfternoon = (): JSX.Element => (
  <ArtworkCarousel
    title="One Afternoon"
    images={[
      { src: "/Design/one_afternoon/title.png", alt: "Title Page" },
      { src: "/Design/one_afternoon/fayer.png", alt: "Page 1" },
      { src: "/Design/one_afternoon/269.png", alt: "Page 2" },
      { src: "/Design/one_afternoon/exley.png", alt: "Page 3" },
      { src: "/Design/one_afternoon/olin.png", alt: "Page 4" },
      { src: "/Design/one_afternoon/foss.png", alt: "Page 5" },
      { src: "/Design/one_afternoon/end.png", alt: "Page 6" },
      { src: "/Design/one_afternoon/image1.png", alt: "Page 7" },
      { src: "/Design/one_afternoon/image2.png", alt: "Page 8" },
      { src: "/Design/one_afternoon/summary.png", alt: "All Comic Images" },
    ]}
  />
)
export default OneAfternoon
