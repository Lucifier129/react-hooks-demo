import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"

const useInput = defaultValue => {
  let [value, setValue] = useState(defaultValue)
  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

const useDocumentTitle = title => {
  useEffect(() => (document.title = title))
}

const useWindowWidth = () => {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    let handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  })

  return windowWidth
}

const useToggle = (first, second) => {
  let [value, setValue] = useState(first)
  let toggleValue = () => {
    switch (value) {
      case first:
        return setValue(second)
      case second:
        return setValue(first)
    }
  }
  return [value, toggleValue]
}

const Form = () => {
  let theme = useContext(ThemeContext)
  let name = useInput("Jade")
  let surname = useInput("Gu")
  let windowWidth = useWindowWidth()

  useDocumentTitle(name.value + " " + surname.value)

  return (
    <React.Fragment>
      <div style={{ color: theme }}>
        name: <input {...name} />
        <br />
        surname: <input {...surname} />
        <br />
        window width: {windowWidth}
      </div>
    </React.Fragment>
  )
}

const ThemeContext = React.createContext()
const App = () => {
  let [theme, toggle] = useToggle("red", "blue")
  return (
    <React.Fragment>
      <button onClick={toggle}>toggle theme</button>
      <ThemeContext.Provider value={theme}>
        <Form />
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
