import React, { useGlobal, setGlobal, useEffect, useState } from "reactn"
import PropTypes from "prop-types"
// import Styles from "./Styles"
import * as utils from "../utils.js"

const EdgeInner = props => {
  const { name } = props
  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [elementStyles] = useGlobal("elementStyles")
  const [keys] = useGlobal("keys")
  const index = keys.indexOf(name)
  const [hover, updateHover] = useState(false)
  const [hoverKey, updateHoverKey] = useGlobal("active")
  const [click, updateClick] = useState(false)
  const [randomColor, updateRandomColor] = useState(utils.getColor())
  const styles = {
    ...elementStyles.h1[1],
    color: hover == false ? randomColor : colors["hover"],
    transition: `color 1000ms ease-in`,
  }
  const hoverOn = (e, name) => {
    updateHover(true)
    updateHoverKey(name)
  }
  const hoverOff = (e, name) => {
    updateHover(false)
    updateHoverKey(name)
  }
  const h3Styles = {
    ...styles,
    fontSize: `${units["u1"] / 2}px`,
    transform: `rotate(180deg)`,
  }
  switch (name) {
    case "top":
      return (
        <h1
          style={{ ...styles }}
          onMouseEnter={e => hoverOn(e, name)}
          onMouseLeave={e => hoverOff(e, name)}
        >
          DYSS.NET
        </h1>
      )
    case "bottom":
      return (
        <>
          <h3
            style={h3Styles}
            onMouseEnter={e => hoverOn(e, name)}
            onMouseLeave={e => hoverOff(e, name)}
            onClick={e => onClick(e, name)}
          >
            2002 ~
          </h3>
          <h3
            style={{
              ...h3Styles,
              ...{
                transform: `rotate(0deg) translateY(-${units["u1"] / 8}px)`,
              },
            }}
            onMouseEnter={e => hoverOn(e, name)}
            onMouseLeave={e => hoverOff(e, name)}
            onClick={e => onClick(e, name)}
          >
            {new Date().getFullYear()}
          </h3>
        </>
      )
    default:
      return `&nbsp;`
  }
}

export default EdgeInner
