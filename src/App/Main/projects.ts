type Project = {
  title: string
  category: string
  date: string
  to: string
  image: string
  thumbnailCrop?: {
    x: number
    y: number
    size: number
    width: number
    height: number
  }
}

export const projects: Project[] = [
  {
    title: "Trip Jam",
    category: "Product Design & Development",
    date: "2026",
    to: "/development/tripjam",
    image: "/Development/trip-jam/board.png",
  },
  {
    title: "Evolv",
    category: "Product Design & Development",
    date: "2025",
    to: "/experience/evolv",
    image: "/Development/evolv/imgReplaceFillWithYourScreen.png",
  },
  {
    title: "Nordle",
    category: "Frontend Development",
    date: "",
    to: "/development/nordle",
    image: "/Development/nordle/game-desktop.png",
    thumbnailCrop: { x: 286, y: 68, size: 457, width: 1075, height: 642 },
  },
  {
    title: "Insignia",
    category: "Graphic Design",
    date: "",
    to: "/design/graphicDesign#insignia",
    image: "/Design/insignia/color.png",
  },
  {
    title: "One Afternoon",
    category: "Graphic Design",
    date: "",
    to: "/design/graphicDesign#oneAfternoon",
    image: "/Design/one_afternoon/fayer.png",
    thumbnailCrop: { x: 1273, y: 481, size: 740, width: 2200, height: 1700 },
  },
]

export const projectPages = [
  { title: "Trip Jam", to: "/development/tripjam" },
  { title: "Evolv", to: "/experience/evolv" },
  { title: "Nordle", to: "/development/nordle" },
  { title: "Graphic Design", to: "/design/graphicDesign" },
]
