import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const useProjectAnchor = () => {
  const { hash, search } = useLocation()
  useEffect(() => {
    const id = hash.slice(1) || new URLSearchParams(search).get("project")
    if (!id) return
    document.getElementById(id)?.scrollIntoView()
  }, [hash, search])
}

export default useProjectAnchor
