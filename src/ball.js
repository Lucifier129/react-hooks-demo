import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"

const App = ({ list = [0, 1, 1, 1, 1], delay = 100 }) => {
  let radius = 30
  let [position, setPosition] = useState([0, 0])
  useEffect(() => {
    let handleMove = event => {
      setPosition([event.x - radius, event.y - radius])
    }
    document.addEventListener("mousemove", handleMove)
    return () => {
      document.removeEventListener("mousemove", handleMove)
    }
  }, [])
  return (
    <React.Fragment>
      {list.map((_, index) => {
        return (
          <Ball
            key={index}
            radius={radius}
            position={position}
            delay={(index ) * delay / 1.6}
          />
        )
      })}
    </React.Fragment>
  )
}

const Ball = ({ radius, delay, position }) => {
  let [[x, y], setPosition] = useState([0, 0])
  let style = {
    position: "fixed",
    width: radius * 2,
    height: radius * 2,
    background:
      "url(https://pbs.twimg.com/profile_images/752339815002091520/d403dpBl_bigger.jpg) center center",
    borderRadius: radius,
    left: x,
    top: y
  }
  useEffect(() => {
    setTimeout(() => requestAnimationFrame(() => setPosition(position)), delay)
  }, position)
  return <div style={style} />
}

ReactDOM.render(<App />, document.getElementById("root"))
