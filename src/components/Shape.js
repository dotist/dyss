import React, { useGlobal, useState, setState, setGlobal } from "reactn"
import PropTypes from "prop-types"
import { styled, makeStyles, createMuiTheme } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"

const Shape = props => {
  const { name, children, ...other } = props
  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [keys] = useGlobal("keys")
  const index = keys.indexOf(name)
  // const [color, updateColor] = setState({})

  const getShapeStyles = props => {
    const { u0, u1, u2, full, half, color1, color2, ...other } = props
    const transparent = `transparent`
    const borderColor = a => {
      keys.map(s => a.push(s == name ? color1 : transparent))
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
    const transform = a => {
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

  const sides = {
    top: {
      borderColor: `${colors[1]} transparent transparent transparent`,
      borderWidth: `${units[1]}px ${units[1]}px 0 ${units[1]}px`,
      width: `${units["near"]}`,
      height: `${units[1]}px`,
      right: `${units["half"]}`,
      transform: `translateX(${units["half"]})`,
    },
    right: {
      borderColor: `transparent ${colors[1]} transparent transparent`,
      borderWidth: `${units[1]}px ${units[1]}px ${units[1]}px 0`,
      width: `${units[1]}px`,
      height: `${units["near"]}`,
      top: `${units["half"]}`,
      transform: `translateY(-${units["half"]})`,
    },
    bottom: {
      borderColor: `transparent transparent ${colors[1]} transparent`,
      borderWidth: `0 ${units[1]}px ${units[1]}px ${units[1]}px`,
      height: `${units[1]}px`,
      width: `${units["near"]}`,
      right: `${units["half"]}`,
      transform: `translateX(${units["half"]})`,
    },
    left: {
      borderColor: `transparent transparent transparent ${colors[1]}`,
      borderWidth: `${units[1]}px 0 ${units[1]}px ${units[1]}px`,
      width: `${units[1]}px`,
      height: `${units["near"]}`,
      top: `${units["half"]}`,
      transform: `translateY(-${units["half"]})`,
    },
  }

  const shapeStyle = getShapeStyles({ ...units, ...colors })
  const styles = {
    padding: 0,
    position: `absolute`,
    borderStyle: `solid`,
    margin: `auto`,
    color: `transparent`,
    ...shapeStyle,
  }
  console.log(styles)
  const Inner = styled(Container)({
    ...styles,
    // ...sides[name],
    // ...shape({ ...units, ...colors }),
  })
  const hoverOn = (e, name) => {
    console.log(name)
  }
  const hoverOff = (e, name) => {
    console.log("off", name)
  }
  return (
    <>
      {/* 
      <div style={{
        ...styles, ...sides[name]
      }}>{children != undefined ? children : " "}</div>
      */}
      <Inner
        maxWidth={false}
        onMouseEnter={e => hoverOn(e, name)}
        onMouseLeave={e => hoverOff(e, name)}
      >
        {children != undefined ? children : " "}
      </Inner>
    </>
    // </TrapElement>
  )
}

export default Shape
