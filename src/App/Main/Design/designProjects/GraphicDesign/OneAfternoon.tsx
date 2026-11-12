import CaseStudy from "../../../CaseStudy"
import { caseStudies } from "../../../caseStudyContent"

const images = [
  {
    src: "/Design/one_afternoon/title.png",
    alt: "One Afternoon title page",
  },
  {
    src: "/Design/one_afternoon/fayer.png",
    alt: "One Afternoon comic page 1",
  },
  {
    src: "/Design/one_afternoon/269.png",
    alt: "One Afternoon comic page 2",
  },
  {
    src: "/Design/one_afternoon/exley.png",
    alt: "One Afternoon comic page 3",
  },
  {
    src: "/Design/one_afternoon/olin.png",
    alt: "One Afternoon comic page 4",
  },
  {
    src: "/Design/one_afternoon/foss.png",
    alt: "One Afternoon comic page 5",
  },
  {
    src: "/Design/one_afternoon/end.png",
    alt: "One Afternoon comic page 6",
  },
  {
    src: "/Design/one_afternoon/image1.png",
    alt: "One Afternoon comic page 7",
  },
  {
    src: "/Design/one_afternoon/image2.png",
    alt: "One Afternoon comic page 8",
  },
  {
    src: "/Design/one_afternoon/summary.png",
    alt: "All One Afternoon comic images",
  },
]

const OneAfternoon = (): JSX.Element => (
  <CaseStudy
    content={caseStudies.oneAfternoon}
    hero={<img src={images[9].src} alt={images[9].alt} />}
    secondary={
      <>
        {images.map(image => (
          <img
            className="case-study-artwork"
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        ))}
      </>
    }
  />
)
export default OneAfternoon
