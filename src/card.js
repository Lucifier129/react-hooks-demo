import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import "./card.css"

const usePress = (range = 10) => {
  let [x, setX] = useState(0)
  let [y, setY] = useState(0)
  let handleMouseMove = event => {
    let { clientX, clientY } = event
    let originX = window.innerWidth / 2
    let originY = window.innerHeight / 2
    let positionX = clientX - originX
    let positionY = clientY - originY
    let ratioX = positionX / originX
    let ratioY = positionY / originY
    let valueX = ratioX * range
    let valueY = ratioY * range
    setX(valueX)
    setY(-valueY)
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  let styles = {
    body: {
      transform: `rotateX(${y}deg) rotateY(${x}deg)`
    },
    image: {
      transform: `translateX(${-x * 1.5}px) translateY(${y * 1.5}px)`
    },
    background: {
      backgroundPosition: `${-x * 2.5}px ${y * 2.5}px`
    }
  }

  return styles
}

const data = [
  {
    title: "Princess Mononoke",
    image: "ttps://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png",
    background:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_monobg.jpg"
  }
]

const App = () => {
  let styles = usePress(20)
  let [title, setTitle] = useState("Popular")
  let [type, setType] = useState("Movies")
  let [first, setFirst] = useState("Princess Mononoke")
  // let [second, setSecond]

  useEffect(() => {
    document.title = type + ": " + title
  })

  return (
    <React.Fragment>
      <div className="cards" style={styles.body}>
        <input
          className="type__input"
          style={{ color: "#c6426e" }}
          value={type}
          onChange={e => setType(e.target.value)}
        />
        <input
          className="title__input"
          style={{ color: "#642b73" }}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <div className="card card__one">
          <div style={styles.background} className="card__bg" />
          <img
            style={styles.image}
            className="card__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png"
          />
          <div className="card__text">
            <p className="card__title">Princess Mononoke</p>
          </div>
        </div>
        <div className="card card__two">
          <div style={styles.background} className="card__bg" />
          <img
            style={styles.image}
            className="card__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png"
          />
          <div className="card__text">
            <p className="card__title">Spirited Away</p>
          </div>
        </div>
        <div className="card card__three">
          <div style={styles.background} className="card__bg" />
          <img
            style={styles.image}
            className="card__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png"
          />
          <div className="card__text">
            <p className="card__title">Howl's Moving Castle</p>
          </div>
        </div>
      </div>

      <span className="notice">view on desktop for mousemove</span>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
