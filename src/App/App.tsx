import { BrowserRouter as Router } from "react-router-dom"

import Main from "./Main"
import "../tailwind.css"

const App = (): JSX.Element => {
  return (
    <Router>
      <Main />
    </Router>
  )
}

export default App
