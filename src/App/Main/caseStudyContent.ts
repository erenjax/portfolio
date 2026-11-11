import { CaseStudyContent } from "./CaseStudy"

export const caseStudies: Record<string, CaseStudyContent> = {
  evolv: {
    title: "Security Operator Tablet",
    organization: "Evolv Technology",
    role: "Lead Designer and Developer",
    skills: ["TypeScript", "React", "Figma", "API integration", "User testing"],
    year: "2025",
    overview:
      "I led the design and development of a security operator tablet interface as Evolv expanded from a single walk-through scanner to an additional x-ray system.",
    challenge:
      "The original plan was to monitor both systems through the existing tablet interface unchanged. In a security setting, usability is tied directly to safety. The redesign also needed to address operators’ concerns about a steeper learning curve.",
    impact:
      "The redesigned interface has launched to strong customer feedback. Ongoing user tests are helping me understand how operators use it in practice.",
    process: [
      "I worked with product and engineering to understand operators’ concerns, then led the project through wireframes, prototypes, and regular stakeholder demos.",
      "Alongside the design work, I extended the API to communicate with multiple systems at once and reworked client-side state management for incoming websocket messages.",
    ],
    solution:
      "A redesigned tablet experience brings connected systems, the alert queue, and settings into one interface, supporting operators as they monitor multiple security systems.",
  },
  tripjam: {
    title: "Trip Jam",
    organization: "CMU Hackathon",
    role: "Developer",
    skills: [
      "React",
      "TypeScript",
      "Vite",
      "Liveblocks",
      "Google Places",
      "xAI Grok",
      "Figma",
    ],
    year: "2026",
    overview:
      "Trip Jam brings group travel planning onto one shared canvas. Create a trip, invite friends with a room code, and explore places together.",
    challenge:
      "Group travel planning requires people to compare places, discuss options, and agree on an itinerary. Trip Jam brings those activities together so the discussion stays close to the plan.",
    impact:
      "The working application lets a group search, drag, vote, sketch, and chat in real time, then turn its decisions into a day-by-day itinerary that can be downloaded as a PDF.",
    process: [
      "The team explored the visual system in Figma while building collaboration, search, and voting features.",
      "We refined the designs against the working interactions, bringing the board, cards, sidebar, chat, and itinerary into one cohesive experience.",
    ],
    solution:
      "Google Places helps travelers find hotels, attractions, and restaurants to add to the board. Live cursors, notes, drawings, and voting support shared decisions. Grok uses the board’s cards, votes, and connections to generate an itinerary.",
  },
  nordle: {
    title: "Nordle",
    organization: "Personal Project",
    role: "Lead Designer and Developer",
    skills: ["Frontend development", "Interaction design", "Responsive design"],
    year: "2025",
    overview:
      "Wordle, but with numbers! Nordle is a number-guessing game where players try to crack a four-digit code.",
    challenge:
      "Players need to understand how each guess narrows the possibilities. The game needs clear feedback and instructions, with controls that work on both desktop and mobile screens.",
    impact:
      "Players can follow color-coded feedback, track their tries, and see a success screen when they crack the code. The game includes instructions and music settings.",
    process: [
      "I brought the guessing controls, number of tries, instructions, and music settings together in one interface.",
      "Desktop and mobile layouts carry the same gameplay and feedback into different screen sizes.",
    ],
    solution:
      "Each guess receives color-coded feedback: red means a digit is not in the code, yellow means it belongs in another position, and green means it is correct and in the right position.",
  },
  insignia: {
    title: "Insignia",
    organization: "Graphic Design Course",
    role: "Designer",
    skills: [
      "Adobe Illustrator",
      "Vector illustration",
      "Shading",
      "Digital shadowing",
    ],
    year: "2022",
    overview:
      "For a graphic design course, I created a personal insignia using a jade ring given to me by my grandmother.",
    challenge:
      "The assignment asked me to develop a personal insignia from an object of my choice. I explored how light and form could express the ring in both physical and digital artwork.",
    impact:
      "The project produced 20 hand-drawn sketches, 10 vector line drawings, five full-color versions, and a final grayscale rendering.",
    process: [
      "I began with 20 hand-drawn sketches, then developed 10 vector line drawings in Adobe Illustrator.",
      "I explored five full-color versions and refined shading and digital shadows to describe the ring’s three-dimensional form.",
    ],
    solution:
      "An up-close, three-dimensional rendering of the jade ring highlights the shading and digital shadowing techniques developed throughout the course. The final artwork was created in Adobe Illustrator.",
  },
  oneAfternoon: {
    title: "One Afternoon",
    organization: "Digital Art Course",
    role: "Designer",
    skills: [
      "Adobe Photoshop",
      "Image manipulation",
      "Pop art",
      "Visual storytelling",
    ],
    year: "2023",
    overview:
      "One Afternoon is a short comic created as a final project for a digital art class titled Replicas, Counterfeits, Forgeries, Imposters.",
    challenge:
      "The project focused on image manipulation and replication. I used that brief to explore how reworking photographs in a pop art style could form a short comic.",
    impact:
      "The finished collection brings the manipulated images together as a sequential visual story.",
    process: [
      "I reworked the images in Adobe Photoshop, using a pop art style across the collection.",
    ],
    solution:
      "A short comic uses a consistent visual treatment to connect the individual images into One Afternoon.",
  },
}
