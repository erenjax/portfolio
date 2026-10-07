import { LinkedInLogo } from "../../Assets/logos"
import "./Footer.css"

const Footer = (): JSX.Element => (
  <footer className="site-footer">
    <div className="site-footer-content">
      <div>
        <p className="site-footer-name">Emily Ren Jackson</p>
        <a className="site-footer-email" href="mailto:erenjax@gmail.com">
          erenjax@gmail.com
        </a>
      </div>
      <a
        className="site-footer-linkedin"
        href="https://www.linkedin.com/in/emily-ren-jackson-32517a202/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Emily Ren Jackson on LinkedIn"
      >
        <LinkedInLogo classname="w-full h-full" />
      </a>
    </div>
  </footer>
)

export default Footer
