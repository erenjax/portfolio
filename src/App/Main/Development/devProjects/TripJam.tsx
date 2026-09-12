import useScrollReveal from "../../useScrollReveal"
import "./TripJam.css"

const features = [
  {
    title: "Explore together",
    text: "Find hotels, attractions, and restaurants with Google Places, then drag options onto the shared canvas.",
  },
  {
    title: "Make decisions as a group",
    text: "Vote on cards and see the top contenders in each category. Notes, drawings, stickers, and arrows help everyone connect ideas.",
  },
  {
    title: "Keep the conversation close",
    text: "Live cursors and in-room chat keep the discussion beside the plan. Changes sync across the group in real time.",
  },
  {
    title: "Turn ideas into an itinerary",
    text: "Grok uses the board’s cards, votes, and connections to generate a day-by-day itinerary that everyone can view and download as a PDF.",
  },
]

const TripJam = (): JSX.Element => {
  const image = useScrollReveal()
  const overview = useScrollReveal<HTMLElement>()
  const process = useScrollReveal<HTMLElement>()

  return (
    <article className="tripjam-page">
      <div className="tripjam-content">
        <header className="tripjam-heading">
          <h1>Trip Jam</h1>
          <div className="tripjam-metadata">
            <p>2026</p>
            <p>CMU Hackathon</p>
            <p>Developer</p>
          </div>
        </header>
        <img
          ref={image}
          className="tripjam-board"
          src="/Development/trip-jam/board.png"
          width={2054}
          height={1230}
          alt="Trip Jam’s Tokyo planning board with hotel cards, votes, connecting arrows, live chat, and a places search sidebar"
        />
        <section
          ref={overview}
          className="tripjam-overview"
          aria-labelledby="tripjam-overview-title"
        >
          <h2 id="tripjam-overview-title">Plan the trip together.</h2>
          <p>
            Trip Jam brings group travel planning onto one shared canvas. Create
            a trip, invite friends with a room code, and explore places
            together. Search, drag, vote, sketch, and chat in real time, then
            turn the group’s decisions into a day-by-day itinerary.
          </p>
          <div className="tripjam-actions">
            <a
              href="https://github.com/erenjax/travel-playground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
        </section>
        <section aria-labelledby="tripjam-demo-title">
          <h2 id="tripjam-demo-title">Trip Jam in action.</h2>
          <video
            className="tripjam-demo"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label="Trip Jam product demonstration"
          >
            <source src="/Development/trip-jam/demo.mp4" type="video/mp4" />
            Your browser does not support video playback.
          </video>
        </section>
        <section aria-labelledby="tripjam-features-title">
          <h2 id="tripjam-features-title">From possibilities to a plan.</h2>
          <div className="tripjam-features">
            {features.map((feature, index) => (
              <div className="tripjam-feature" key={feature.title}>
                <span className="tripjam-step">0{index + 1}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section ref={process} aria-labelledby="tripjam-process-title">
          <h2 id="tripjam-process-title">Design and development, together.</h2>
          <p>
            The team explored the visual system in Figma while building the
            collaboration, search, and voting features. The designs were then
            refined against the working interactions, bringing the board, cards,
            sidebar, chat, and itinerary into one cohesive experience.
          </p>
          <ul className="tripjam-stack" aria-label="Technologies used">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Liveblocks",
              "Google Places",
              "xAI Grok",
            ].map(tool => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}

export default TripJam
