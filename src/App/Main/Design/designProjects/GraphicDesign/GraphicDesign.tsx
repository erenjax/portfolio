import { useState } from "react"

import Insignia from "./Insignia"
import OneAfternoon from "./OneAfternoon"

const GraphicDesign = (): JSX.Element => {
  type GraphicDesignProject = "insignia" | "oneAfternoon"
  const graphicDesignProjectToLabel = (
    project: GraphicDesignProject,
  ): string => {
    switch (project) {
      case "insignia":
        return "Insignia"
      case "oneAfternoon":
        return "One Afternoon"
    }
  }

  const [activeProject, setActiveProject] = useState(
    "insignia" as GraphicDesignProject,
  )

  const activeClass =
    "bg-[#42113C] px-4 py-2 md:px-8 md:py-4 rounded-full border-1 border-customWhite border"
  const inactiveClass = "px-4 py-2 md:px-8 md:py-4"

  const projectOptionButton = (
    project: GraphicDesignProject,
    handleOnClick: () => void,
  ): JSX.Element => {
    const buttonClass = isProjectActive(project) ? activeClass : inactiveClass
    const label = graphicDesignProjectToLabel(project)
    return (
      <button className={buttonClass} onClick={handleOnClick}>
        {label}
      </button>
    )
  }

  const isProjectActive = (project: GraphicDesignProject): boolean => {
    return activeProject === project
  }

  const handleOnClickProject = (project: GraphicDesignProject) => (): void => {
    setActiveProject(project)
  }

  const project = (project: GraphicDesignProject): JSX.Element => {
    switch (project) {
      case "insignia":
        return <Insignia />
      case "oneAfternoon":
        return <OneAfternoon />
    }
  }

  return (
    <div className="bg-accent-purple-dark w-full h-fit pb-16 rounded-xl flex flex-col p-8 text-customWhite">
      <p className="text-base md:text-md font-light">Graphic Design</p>
      <div className="bg-accent-purple-dark text-sm md:text-base font-light rounded-full flex flex-row border-1 border-customWhite border w-fit my-4">
        {projectOptionButton("insignia", handleOnClickProject("insignia"))}
        {projectOptionButton(
          "oneAfternoon",
          handleOnClickProject("oneAfternoon"),
        )}
      </div>
      {project(activeProject)}
    </div>
  )
}

export default GraphicDesign
