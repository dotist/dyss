import React, { useState, useGlobal } from "reactn"
import Menu from "./Menu"

const Layout = props => {
  const { children, ...other } = props
  const [colors, updateColors] = useGlobal("colors")
  const randomColor = useGlobal("randomColor")
  const [elementStyles] = useGlobal("elementStyles")
  const [hover, updateHover] = useState(null)
  const hoverOn = (e, name) => {
    updateHover(name)
  }
  const hoverOff = (e, name) => {
    console.log("off")
    updateHover(null)
  }
  const click = (e, name) => {}
  return (
    <>
      <header
        style={{
          textAlign: `center`,
        }}
      >
        <a
          href=""
          style={{ color: `transparent` }}
          onMouseEnter={e => hoverOn(e, "header")}
          onMouseLeave={e => hoverOff(e, "")}
        >
          <h1
            style={{
              ...elementStyles.h1[1],
              ...{
                color: hover == "header" ? colors["color4"] : randomColor[0],
              },
            }}
          >
            DYSS.NET
          </h1>
        </a>
      </header>
      <Menu />

      <div>{children}</div>
    </>
  )
}
export default Layout
