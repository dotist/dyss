import React, { useState, useGlobal, useEffect } from "reactn"
import Menu from "./Menu"
import * as utils from "../utils.js"

const Layout = props => {
  const { children, ...other } = props
  const [colors, updateColors] = useGlobal("colors")
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
  return (
    <>
      <header
        style={{
          textAlign: `center`,
        }}
      >
        {/*<a
          href=""
          style={{ color: `transparent` }}
          onMouseEnter={e => hoverOn(e, "header")}
          onMouseLeave={e => hoverOff(e, "")}
        >
                    <h1
            style={{
              ...elementStyles.h1[1],
              ...{
                color: hover == "header" ? colors["color3"] : randomColor,
                transition: `color 1000ms`,
              },
            }}
          >
            DYSS.NET
          </h1>
          </a>*/}
      </header>
      <Menu />

      <div>{children}</div>
    </>
  )
}
export default Layout
