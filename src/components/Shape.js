import React, {
  useGlobal,
  useState,
  setState,
  setGlobal,
  useEffect,
} from "reactn"
import PropTypes from "prop-types"
import { styled, makeStyles, createMuiTheme } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Shape = props => {
  const { name, children, ...other } = props
  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [keys] = useGlobal("keys")
  const [hoverKey, updateHoverKey] = useGlobal("active")
  const index = keys.indexOf(name)
  const [hover, updateHoverOn] = useState(false)
  const [randomColor, updateRandomColor] = useState(colors["color4"])

  const getShapeStyles = props => {
    const { u0, u1, u2, full, half, color1, color2, color3, ...other } = props
    const transparent = `transparent`
    const borderColor = a => {
      keys.map(s => {
        const color = hover != true ? randomColor : color3
        // const color = hover != true ? color1 : color3
        a.push(s == name ? color : transparent)
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
    transition: `all 800ms ease-in`,
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
    const timer = setTimeout(() => {
      updateRandomColor(utils.getColor())
    }, 3000)
    return () => clearTimeout(timer)
  })
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
