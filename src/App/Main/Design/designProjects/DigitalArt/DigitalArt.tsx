import { useState } from "react"

import DrawInverted from "./DrawInverted"
import FlashlightInverted from "./FlashlightInverted"
import MovingMap from "./MovingMap"

const DigitalArt = (): JSX.Element => {
  type DigitalArtProject = "drawInverted" | "flashlightInverted" | "movingMap"
  const [activeProject, setActiveProject] = useState(
    "drawInverted" as DigitalArtProject,
  )

  const digitalArtProjectToLabel = (project: DigitalArtProject): string => {
    switch (project) {
      case "drawInverted":
        return "Draw Inverted"
      case "flashlightInverted":
        return "Flashlight Inverted"
      case "movingMap":
        return "Moving Map"
    }
  }

  const activeClass =
    "bg-[#42113C] px-8 py-4 rounded-full border-1 border-customWhite border"
  const inactiveClass = "px-8 py4"

  const isProjectActive = (project: DigitalArtProject): boolean => {
    return activeProject === project
  }

  const handleOnClickProject = (project: DigitalArtProject) => (): void => {
    setActiveProject(project)
  }

  const projectOptionButton = (
    project: DigitalArtProject,
    handleOnClick: () => void,
  ): JSX.Element => {
    const buttonClass = isProjectActive(project) ? activeClass : inactiveClass
    const label = digitalArtProjectToLabel(project)
    return (
      <button className={buttonClass} onClick={handleOnClick}>
        {label}
      </button>
    )
  }

  const project = (project: DigitalArtProject): JSX.Element => {
    switch (project) {
      case "drawInverted":
        return <DrawInverted />
      case "flashlightInverted":
        return <FlashlightInverted />
      case "movingMap":
        return <MovingMap />
    }
  }

  return (
    <div className="bg-accent-purple-dark w-full h-screen rounded-xl flex flex-col p-8 text-customWhite">
      <p className="text-md font-light">Digital Art</p>
      <div className="bg-accent-purple-dark text-base font-light rounded-full flex flex-row border-1 border-customWhite border w-fit my-4">
        {projectOptionButton(
          "drawInverted",
          handleOnClickProject("drawInverted"),
        )}
        {projectOptionButton(
          "flashlightInverted",
          handleOnClickProject("flashlightInverted"),
        )}
        {projectOptionButton("movingMap", handleOnClickProject("movingMap"))}
      </div>
      {project(activeProject)}
    </div>
  )
}

export default DigitalArt
