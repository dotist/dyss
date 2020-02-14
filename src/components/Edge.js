import React, { useGlobal, setGlobal, useEffect, useState } from "reactn"
import PropTypes from "prop-types"
import Shape from "./Shape"
import EdgeInner from "./EdgeInner"
// import Styles from "./Styles"
import * as utils from "../utils.js"

const Edge = props => {
  const { name, effects, children, ...other } = props

  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [elementStyles] = useGlobal("elementStyles")
  const [keys] = useGlobal("keys")
  const index = keys.indexOf(name)
  // const activeSide = useGlobal("activeSide")
  const [hover, updateHover] = useState(false)
  const [hoverKey, updateHoverKey] = useGlobal("active")
  const effectIsSet = effects.hasOwnProperty(name)
  const effect = effectIsSet ? effects[name] : {}
  const [click, updateClick] = useState(false)

  const getStyles = props => {
    const { u0, u1, space, ...other } = props
    const top = () => {
      return name == "bottom" ? `unset` : `${space}px`
    }
    const bottom = () => {
      return name == "bottom" ? `${space}px` : `unset`
    }
    const left = () => {
      return name == "right" ? `unset` : `${space}px`
    }
    const right = () => {
      return name == "right" ? `${space}px` : `unset`
    }
    const height = () => {
      return index % 2 ? `calc(100% - ${space * 2}px)` : `${u1}px`
    }
    const width = () => {
      return index % 2 ? `${u1}px` : `calc(100% - ${space * 2}px)`
    }
    const transform = () => {
      const u = click == true || effect == -1 || effect == 0 ? u1 + space : u0
      let s = ``
      switch (name) {
        case "top":
          s = `translateY(-${u}px)`
          break
        case "right":
          s = `translateX(${u}px)`
          break
        case "bottom":
          s = `translateY(${u}px)`
          break
        case "left":
          s = `translateX(-${u}px)`
          break
      }
      return s
    }
    const opacity = () => {
      if (effect == -1) return 0
      else return 1
    }
    return {
      top: top(),
      left: left(),
      right: right(),
      bottom: bottom(),
      height: height(),
      width: width(),
      transform: transform(),
      opacity: opacity(),
    }
  }
  const edgeStyle = getStyles({ ...units, ...colors })
  const hoverOn = (e, name) => {
    updateHover(true)
    updateHoverKey(name)
  }
  const hoverOff = (e, name) => {
    updateHover(false)
    updateHoverKey(name)
  }
  const onClick = (e, name) => {
    // new Promise(resolve => {})
    updateClick(true)

    setTimeout(function() {
      updateClick(false)
    }, 900)
  }
  return (
    <div
      className={`edge`}
      style={{
        color: `transparent`,
        ...{
          position: `fixed`,
          transition: `transform ${units[3]}ms cubic-bezier(0.785, 0.135, 0.15, 0.86), 
      opacity ${units[3]}ms ease-in`,
          textAlign: `center`,
          cursor: `pointer`,
        },
        ...edgeStyle,
        ...effect,
        overflow: `hidden`,
        // backgroundColor: `#fccabf`,
      }}
      onMouseEnter={e => hoverOn(e, name)}
      onMouseLeave={e => hoverOff(e, name)}
      onClick={e => onClick(e, name)}
    >
      {children}
    </div>
  )
}

export default Edge
