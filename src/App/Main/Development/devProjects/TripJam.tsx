import CaseStudy from "../../CaseStudy"
import { caseStudies } from "../../caseStudyContent"
import "./TripJam.css"

const TripJam = (): JSX.Element => (
  <CaseStudy
    content={caseStudies.tripjam}
    hero={
      <img
        src="/Development/trip-jam/board.png"
        width={2054}
        height={1230}
        alt="Trip Jam’s shared Tokyo planning board with places, votes, connecting arrows, and chat"
      />
    }
    secondary={
      <>
        <video
          className="tripjam-demo"
          ref={video => {
            if (video) {
              video.defaultPlaybackRate = 2
              video.playbackRate = 2
            }
          }}
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
      </>
    }
  >
    <div className="case-study-actions">
      <a
        href="https://github.com/erenjax/travel-playground"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source Code
      </a>
    </div>
  </CaseStudy>
)
export default TripJam
