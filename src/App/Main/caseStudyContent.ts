import { CaseStudyContent } from "./CaseStudy"

export const caseStudies: Record<string, CaseStudyContent> = {
  evolv: {
    title: "Security Operator Tablet",
    organization: "Evolv Technology",
    role: "Lead Designer and Developer",
    skills: [
      "Interaction design",
      "Figma",
      "React / TypeScript",
      "API integration",
      "WebSocket state management",
      "User testing",
    ],
    year: "2025",
    overview:
      "As a frontend software engineer and tablet project lead at Evolv Technology, I led a redesign of the interface security operators use every day. The company was expanding from a walk-through scanner to an ecosystem that also included an x-ray system. I brought design and implementation together to support monitoring multiple systems from one tablet.",
    challenge:
      "The initial task was to extend the tablet’s API to communicate with multiple systems. After meeting with the product team, I identified risks in adding new capabilities to the existing interface and proposed a full redesign, including a modernized design system. In a high-stakes security setting, operators need to understand what is happening and how to respond. The challenge was to accommodate a more complex system while keeping the experience clear.",
    impact:
      "The redesigned interface launched as part of a major release and received strong customer feedback. User testing became a focus for understanding how operators interact with the new experience and informing further refinements.",
    process: [
      "I reframed the work from an API extension into an opportunity to rethink the operator experience. I created wireframes and mockups, ran regular stakeholder demos, and iterated on feedback with support from design experts. Those conversations helped bring product and engineering along with the proposed changes.",
      "In parallel, I worked closely with the embedded systems team to establish communication between one tablet and multiple devices. I extended the API and reworked client-side state management to organize incoming WebSocket messages from the connected systems.",
      "Throughout the redesign, I used documentation and regular demos to keep product and engineering aligned on the evolving interface. Alongside delivery, I focused on user testing to learn how people would interact with the redesigned product.",
    ],
    solution:
      "The redesigned tablet brings connected systems, the alert queue, and settings into one experience. Updated interface patterns support the expanded product ecosystem, while the underlying API and state management allow the tablet to communicate with multiple systems. Owning both the interface and its implementation let me carry design decisions through to the working product.",

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
      "As a developer on the team, I help implement the interaction design, turning the team’s ideas into working interactions across the shared planning canvas. I connected the Google Maps and Grok AI APIs to support place discovery and AI-generated itineraries.",
      "One of the final steps was integrating the designer’s prototype from Cursor directly into our codebase, working out the AI generated kinks, adding fun fairs and details.",
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
    organization: "Wesleyan University · Graphic Design Course",
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
    organization: "Wesleyan University · Digital Art Course",
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

export const evolvRelatedWork = [
  {
    title: "Diagnostics Report Card",
    paragraphs: [
      "I designed and implemented a diagnostics Report Card across two digital products. It turns a large JSON response containing more than 30 tests into an organized, expandable view with clear result indicators. QA, developers, and field service reported using it instead of digging through logs, saving time and effort during troubleshooting.",
    ],
  },
  {
    title: "Clearer Errors and Self-Service Troubleshooting",
    paragraphs: [
      "I replaced raw error messages for common issues with plain-language explanations and QR codes linking to troubleshooting instructions. The team reported fewer service calls for those issues, allowing service staff to focus on problems that needed their expertise.",
    ],
  },
  {
    title: "Standalone X-Ray Tablet",
    paragraphs: [
      "For the new x-ray system, I supported a different device within the existing tablet codebase. I worked closely with the embedded systems team to coordinate WebSocket messages and endpoints that identified the connected system. I reviewed existing features for compatibility and hid capabilities that did not apply.",
      "The resulting tablet allowed operators to view alerted bag and x-ray images while monitoring the system, and gave the team a working interface for testing.",
    ],
  },
]
