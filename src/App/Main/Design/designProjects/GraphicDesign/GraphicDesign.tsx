import Insignia from "./Insignia"
import OneAfternoon from "./OneAfternoon"
import useProjectAnchor from "../useProjectAnchor"
import "../DesignProjectPages.css"

const GraphicDesign = (): JSX.Element => {
  useProjectAnchor()
  return (
    <main
      className="design-project-page"
      aria-labelledby="graphic-design-title"
    >
      <div className="design-project-content">
        <h1 id="graphic-design-title">Graphic Design</h1>
        <section
          id="insignia"
          className="design-project-section"
          aria-labelledby="insignia-title"
        >
          <h2 id="insignia-title">Insignia</h2>
          <Insignia />
          <div className="graphic-project-description">
            <p className="graphic-project-metadata">Designer · December 2022</p>
            <p>
              As part of a graphic design course, I was assigned to create a
              personal insignia using an object of my choice. I selected a jade
              ring given to me by my grandmother. The project included 20
              hand-drawn sketches, 10 vector line drawings created in Adobe
              Illustrator, five full-color versions, and one final render.
              Throughout the course, I explored the concept of light in both
              physical and digital art. I chose an up-close, three-dimensional
              rendering of the jade ring to highlight shading and digital
              shadowing techniques developed during the project. The final
              render was created in Adobe Illustrator.
            </p>
          </div>
        </section>
        <section
          id="oneAfternoon"
          className="design-project-section"
          aria-labelledby="one-afternoon-title"
        >
          <h2 id="one-afternoon-title">One Afternoon</h2>
          <OneAfternoon />
          <div className="graphic-project-description">
            <p className="graphic-project-metadata">Designer · May 2023</p>
            <p>
              This collection of images comes from a final project in a digital
              art class titled Replicas, Counterfeits, Forgeries, Imposters, a
              project focused on image manipulation and replication. I created a
              short comic by reworking images in a pop art style using Adobe
              Photoshop.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default GraphicDesign
