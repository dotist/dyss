import React, { setGlobal, useEffect, useState } from "reactn"
const getColor = props => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}
const getInterval = (i, e) => {
  return Math.floor(Math.random() * e) + i
}

const Styles = props => {
  const [randomColor, updateRandomColor] = useState(getColor())
  const [randomInterval, updateRandomInterval] = useState(200)
  setGlobal({ randomColor: randomColor })
  const unit = 74
  const space = 2
  const units = {
    0: 0,
    1: unit,
    2: 0,
    3: 100,
    4: 1,
    u0: 0,
    u1: unit,
    u2: 100,
    space: space,
    near: `calc(100% - 16px)`,
    full: `calc(100% - ${unit}px - ${unit}px - ${space * 4}px)`,
    half: `50%`,
  }
  const colors = {
    1: `#000000`,
    2: `#ffffff`,
    3: `grey`,
    random: randomColor,
    color1: `#000000`,
    color2: `#ffffff`,
    color3: `grey`,
    color4: `#00F`,
    color5: `#ff0`,
  }

  setGlobal({
    units: units,
    colors: colors,
    elementStyles: {
      h1: {
        1: {
          fontSize: `${units["u1"]}px`,
          color: colors["color3"],
          margin: `0 auto`,
          display: `inline`,
          letterSpacing: `${units["u1"] / 2}px`,
          lineHeight: 0,
          top: `${units["u1"] / 2}px`,
          position: `relative`,
          transition: `color ${units["u2"]}ms ease-in`,
        },
      },
    },
  })
  useEffect(() => {
    const timer = setTimeout(() => {
      updateRandomColor(getColor)
      updateRandomInterval(getInterval(1, 100) * 10)
    }, randomInterval)
    return () => clearTimeout(timer)
  })
  return null
}
export default Styles
