import { Link } from "react-router-dom"
import { MailIcon, LinkedInLogo } from "../../../Assets/logos"
import { openResume, workHistory } from "../Experience/workHistory"
import { projects } from "../projects"
import useScrollReveal from "../useScrollReveal"
import "./Home.css"

const spinPortrait = (image: HTMLImageElement, direction = 1): void => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const currentTransform = getComputedStyle(image).transform
  image.getAnimations().forEach(animation => animation.cancel())
  image.animate(
    [
      {
        transform:
          currentTransform === "none"
            ? "perspective(1000px) rotateY(0deg)"
            : currentTransform,
      },
      { transform: `perspective(1000px) rotateY(${direction * 720}deg)` },
    ],
    { duration: 2400, easing: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
  )
}

const Home = (): JSX.Element => {
  const blurb = useScrollReveal<HTMLParagraphElement>()
  const aboutImage = useScrollReveal()

  return (
    <div className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-content">
          <div
            className="home-portrait-frame"
            onPointerEnter={event => {
              if (event.pointerType !== "mouse") return
              const bounds = event.currentTarget.getBoundingClientRect()
              const image = event.currentTarget.querySelector("img")
              if (image)
                spinPortrait(
                  image,
                  event.clientX < bounds.left + bounds.width / 2 ? 1 : -1,
                )
            }}
          >
            <img
              src="/about_image.png"
              alt="Emily"
              className="home-portrait"
              onLoad={event => spinPortrait(event.currentTarget)}
            />
          </div>
          <div className="home-introduction">
            <h1 id="home-title">
              Emily
              <br />
              Ren Jackson
            </h1>
            <h2>Design Engineer | Product Manager</h2>
            <div className="home-socials">
              <a
                href="https://www.linkedin.com/in/emily-ren-jackson-32517a202/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Emily Ren Jackson on LinkedIn"
              >
                <LinkedInLogo classname="w-full h-full" />
              </a>
              <a
                href="mailto:erenjax@gmail.com"
                aria-label="Send Emily Ren Jackson an email"
              >
                <MailIcon classname="w-full h-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-about home-container" aria-label="About Emily">
        <p ref={blurb}>
          I'm a design engineer with a background in frontend software
          engineering and a focus on user experience design. I bring leadership
          and product management skills to every project, and I'm happiest
          collaborating closely with designers, engineers, and stakeholders to
          turn ideas into polished, usable products. I care about clear,
          ethical, human-centered experiences, and I bring a lot of energy to
          the work!
        </p>
        <img
          ref={aboutImage}
          className="home-hcii-image"
          src="/HCII.png"
          alt="Emily at Carnegie Mellon's Human-Computer Interaction Institute"
          width={3024}
          height={1775}
          loading="lazy"
        />
      </section>
      <section className="home-projects" aria-label="Projects">
        <div className="home-project-track">
          {[0, 1].map(copy => (
            <div
              className="home-project-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {projects.map(project => (
                <Link
                  className="home-project-card"
                  to={project.to}
                  key={project.title}
                  tabIndex={copy === 1 ? -1 : undefined}
                >
                  <div className="home-project-image">
                    {project.thumbnailCrop ? (
                      <div className="home-project-image-crop">
                        <img
                          src={project.image}
                          alt=""
                          loading="lazy"
                          style={{
                            width: `${(project.thumbnailCrop.width / project.thumbnailCrop.size) * 100}%`,
                            height: `${(project.thumbnailCrop.height / project.thumbnailCrop.size) * 100}%`,
                            left: `${(-project.thumbnailCrop.x / project.thumbnailCrop.size) * 100}%`,
                            top: `${(-project.thumbnailCrop.y / project.thumbnailCrop.size) * 100}%`,
                          }}
                        />
                      </div>
                    ) : (
                      project.image && (
                        <img src={project.image} alt="" loading="lazy" />
                      )
                    )}
                  </div>
                  <div className="home-project-caption">
                    <h3>{project.title}</h3>
                    <p title={project.category}>{project.category}</p>
                    {project.date && <p>{project.date}</p>}
                  </div>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section
        className="home-experience home-container"
        aria-label="Work experience"
      >
        <div className="home-work-history">
          {workHistory.map(item => (
            <div className="home-work-row" key={item.date}>
              <p className="home-work-date">{item.date}</p>
              <div>
                {item.link ? (
                  <Link to={item.link}>{item.organization}</Link>
                ) : (
                  <h3>{item.organization}</h3>
                )}
                <p>{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="home-experience-actions">
          <button onClick={openResume}>Resume</button>
          <Link to="/experience">More</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
