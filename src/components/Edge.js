import React, { useGlobal, setGlobal, useEffect, useState } from "reactn"
import PropTypes from "prop-types"
import Shape from "./Shape"

const Edge = props => {
  const { name, effects, children, ...other } = props

  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [keys] = useGlobal("keys")
  const index = keys.indexOf(name)
  const [hover, updateHoverOn] = useState(false)

  const getStyles = props => {
    const { u0, u1, space, ...other } = props
    const top = () => {
      return name == "bottom" ? `unset` : 0
    }
    const bottom = () => {
      return name == "bottom" ? 0 : `unset`
    }
    const left = () => {
      return name == "right" ? `unset` : `${u0}px`
    }
    const right = () => {
      return name == "right" ? `${u0}px` : `unset`
    }
    const height = () => {
      return index % 2 ? `100%` : `${u1}px`
    }
    const width = () => {
      return index % 2 ? `${u1}px` : `100%`
    }
    const transform = () => {
      let s = ``
      switch (name) {
        case "top":
          s = `translateY(-${u1}px)`
          break
        case "right":
          s = `translateX(${u1}px)`
          break
        case "bottom":
          s = `translateY(${u1}px)`
          break
        case "left":
          s = `translateX(-${u1}px)`
          break
      }
      return s
    }
    const padding = a => {
      keys.map(s => {
        a.push(s == name ? `${space}px` : 0)
      })
      return a.join(" ")
    }
    return {
      top: top(),
      left: left(),
      right: right(),
      bottom: bottom(),
      height: height(),
      width: width(),
      transform: transform(),
      padding: padding([]),
    }
  }
  const styles = {
    position: `fixed`,
    transition: `transform ${units[3]}ms cubic-bezier(0.785, 0.135, 0.15, 0.86), 
      opacity ${units[3]}ms ease-in`,
    opacity: 0,
    textAlign: `center`,
  }
  const innerStyle = {
    fontSize: `${units["u1"]}px`,
    color: colors["color2"],
    margin: `0 auto`,
    zIndex: 1,
    position: `relative`,
    width: `100%`,
  }
  const edgeStyle = getStyles({ ...units, ...colors })
  const effectIsSet = effects.hasOwnProperty(name)
  const effect = effectIsSet ? effects[name] : {}
  const hoverOn = (e, name) => {
    console.log(name)
  }
  const hoverOff = (e, name) => {
    console.log("off", name)
  }

  const Inner = props => {
    const { styles } = props
    switch (name) {
      case "top":
        return <h1 style={styles}>DYSS.NET</h1>
        break
      case "bottom":
        return <h3 style={styles}>2002 — {new Date().getFullYear()}</h3>
        break
      default:
        return `&nbsp;`
    }
  }
  return (
    <div
      style={{
        ...styles,
        ...edgeStyle,
        ...effect,
      }}
      onMouseEnter={e => hoverOn(e, name)}
      onMouseLeave={e => hoverOff(e, name)}
    >
      <Shape name={name} />
      <Inner styles={innerStyle} />
    </div>
  )
}

export default Edge
