import React, { useState, useGlobal, useEffect } from "reactn"
import Menu from "./Menu"
import * as utils from "../utils.js"

const Layout = props => {
  const { children, ...other } = props
  const [colors, updateColors] = useGlobal("colors")
  const units = utils.getState("units")
  const unit = units["u1"]
  const [randomColor, updateRandomColor] = useState(utils.getColor())
  const [elementStyles] = useGlobal("elementStyles")
  const [hover, updateHover] = useState(null)
  const hoverOn = (e, name) => {
    updateHover(name)
  }
  const hoverOff = (e, name) => {
    updateHover(null)
  }
  const click = (e, name) => {}
  useEffect(() => {
    const timer = setTimeout(() => {
      updateRandomColor(utils.getColor())
    }, 3000)
    return () => clearTimeout(timer)
  })
  const h1Styles = {
    ...elementStyles.h1[1],
    ...{
      // color: hover == "header" ? colors["color3"] : randomColor,
      transition: `color 1000ms`,
      position: `relative`,
      // width: `100%`,
      // height: `${unit}px`,
    },
  }
  return (
    <>
      <header
        style={{
          textAlign: `center`,
          overflow: `hidden`,
          position: `relative`,
        }}
      >
        <a
          onMouseEnter={e => hoverOn(e, "header")}
          onMouseLeave={e => hoverOff(e, "")}
        >
          <h1 style={h1Styles}>DYSS</h1>{" "}
        </a>{" "}
        <div
          style={{
            display: `block`,
            position: `fixed`,
            transform: `rotate(90deg)`,
            transformOrigin: `100% 100%`,
            width: `100%`,
            height: `${unit}px`,
            left: `-${unit}px`,
            top: `100%`,
          }}
        >
          <h3 style={{ ...h1Styles, ...{ fontSize: `${unit / 3}px` } }}>
            <span>.</span>NET
          </h3>
        </div>
        {/* <Menu /> */}
      </header>

      <div>{children}</div>
    </>
  )
}
export default Layout
