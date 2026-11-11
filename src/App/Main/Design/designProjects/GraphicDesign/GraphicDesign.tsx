import { Navigate, useLocation } from "react-router-dom"

const GraphicDesign = (): JSX.Element => {
  const { hash, search } = useLocation()
  const project = hash.slice(1) || new URLSearchParams(search).get("project")
  return (
    <Navigate
      to={
        project === "oneAfternoon"
          ? "/design/one-afternoon"
          : "/design/insignia"
      }
      replace
    />
  )
}
export default GraphicDesign
