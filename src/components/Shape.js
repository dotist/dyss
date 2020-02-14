import React, { useGlobal, useState, useEffect } from "reactn"
import PropTypes from "prop-types"
import * as utils from "../utils.js"

const Shape = props => {
  const { name, children, ...other } = props
  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [keys] = useGlobal("keys")
  const index = keys.indexOf(name)
  const duration = 200
  const factor = index * 50
  const transition = duration + factor
  const [hover, updateHoverOn] = useState(false)
  const [hoverKey, updateHoverKey] = useGlobal("active")
  const [color, updateColor] = useState(colors["shape"])
  const [hoverColor, updateHoverColor] = useState(utils.getColor())
  const getShapeStyles = props => {
    const { u0, u1, u2, full, half, color1, color2, color3, ...other } = props
    const transparent = `transparent`
    const borderColor = a => {
      keys.map(s => {
        const borderColor = hover != true ? color : hoverColor
        // const color = hover != true ? color1 : color3
        a.push(s == name ? borderColor : transparent)
      })
      return a.join(" ")
    }
    const borderWidth = a => {
      let i = index + 2
      let l = keys.length
      i = i > l - 1 ? i - l : i
      keys.map(s => a.push(keys.indexOf(s) != i ? `${u1}px` : `${u0}px`))
      return a.join(" ")
    }
    const width = () => (!(index % 2) ? full : `${u0}px`)
    const height = () => (index % 2 ? full : `${u0}px`)
    const top = () => (index % 2 ? `${half}` : `unset`)
    const right = () => (index % 2 ? `unset` : half)
    const transform = () => {
      return index % 2 ? `translateY(-${half})` : `translateX(${half})`
    }
    return {
      borderColor: borderColor([]),
      borderWidth: borderWidth([]),
      width: width(),
      height: height(),
      right: right(),
      transform: transform([]),
      top: top(),
    }
  }

  const shapeStyle = getShapeStyles({ ...units, ...colors })
  const styles = {
    padding: 0,
    opacity: hover == false ? 0.7 : 1,
    position: `absolute`,
    borderStyle: `solid`,
    margin: `auto`,
    color: `transparent`,
    transition: `all ${transition}ms ease-in`,
    cursor: `pointer`,
    fontSize: `2em`,
    display: `block`,
    ...shapeStyle,
  }
  const hoverOn = (e, name) => {
    updateHoverOn(true)
    updateHoverKey(name)
  }
  const hoverOff = (e, name) => {
    updateHoverOn(false)
    updateHoverKey(null)
  }
  useEffect(() => {
    setTimeout(() => {
      // updateColor(utils.getColor())
    }, 1000)
  })
  useEffect(() => {
    const timer = setTimeout(() => {
      updateColor(utils.getColor())
    }, 1000)
    return () => clearTimeout(timer)
  }, [])
  // useEffect(() => {
  //   setTimeout(() => {
  //     updateRandomColor(utils.getColor())
  //   }, 3000)
  // }, [])
  return (
    <>
      <div
        style={styles}
        onMouseEnter={e => hoverOn(e, name)}
        onMouseLeave={e => hoverOff(e, name)}
      >
        {children != undefined ? children : " "}
      </div>
    </>
  )
}

export default Shape
