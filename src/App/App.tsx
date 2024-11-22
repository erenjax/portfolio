import Main from "./Main"
import "../tailwind.css"

const App = ():JSX.Element =>  {
  return (
      <div>
        <p className="text-xl">This is the App layer</p>
        <Main />
      </div>
  )
}

export default App
