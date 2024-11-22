import Main from "./Main"
import "../tailwind.css"

const App = ():JSX.Element =>  {
  return (
      <div>
        <p className="text-100">This is the App layber</p>
        <Main />
      </div>
  )
}

export default App
