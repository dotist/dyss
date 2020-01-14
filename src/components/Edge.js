import React, { useGlobal, setGlobal, useEffect, useState } from "reactn"
import PropTypes from "prop-types"
import Shape from "./Shape"

const Edge = props => {
  const { name, effects, children, ...other } = props

  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [keys] = useGlobal("keys")
  const index = keys.indexOf(name)
  const [hover, updateHover] = useState(false)
  const [hoverKey, updateHoverKey] = useGlobal("active")
  const effectIsSet = effects.hasOwnProperty(name)
  // const effectIsSet = Object.prototype.hasOwnProperty.call(effects, "name")
  const effect = effectIsSet ? effects[name] : {}
  // const [effect, updateEffect] = useState(effectIsSet ? effects[name] : {})
  console.log(effect)
  const [click, updateClick] = useState(false)

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
      const unit = () => {
        switch (effect) {
          case -1:
          case 0:
            return u1 + space
          default:
            return u0
        }
      }
      const u = unit()
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
    const padding = a => {
      keys.map(s => {
        a.push(s == name ? `${space}px` : 0)
      })
      return a.join(" ")
    }
    const opacity = () => {
      if (click == true || effect == -1 || effect == 0) return 0
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
      padding: padding([]),
      opacity: opacity(),
    }
  }
  const styles = {
    position: `fixed`,
    transition: `transform ${units[3]}ms cubic-bezier(0.785, 0.135, 0.15, 0.86), 
      opacity ${units[3]}ms ease-in`,
    // opacity: 0,
    textAlign: `center`,
    cursor: `pointer`,
  }
  const innerStyle = {
    fontSize: `${units["u1"]}px`,
    color: hover == false ? colors["color4"] : colors["color5"],
    margin: `0 auto`,
    display: `inline`,
    letterSpacing: `${units["u1"] / 2}px`,
    lineHeight: 0,
    top: `${units["u1"] / 2}px`,
    position: `relative`,
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
    }, 200)
    console.log(name)
  }

  const Inner = props => {
    const { styles } = props
    switch (name) {
      case "top":
        return <h1 style={styles}>DYSS.NET</h1>
      case "bottom":
        return (
          <h3 style={{ ...styles, fontSize: `${units["u1"] / 2}px` }}>
            2002 — {new Date().getFullYear()}
          </h3>
        )
      default:
        return `&nbsp;`
    }
  }
  return (
    <div
      style={{
        color: `transparent`,
        ...styles,
        ...edgeStyle,
        ...effect,
      }}
      onMouseEnter={e => hoverOn(e, name)}
      onMouseLeave={e => hoverOff(e, name)}
      onClick={e => onClick(e, name)}
    >
      <Shape name={name} />
      <Inner styles={innerStyle} />
    </div>
  )
}

export default Edge
