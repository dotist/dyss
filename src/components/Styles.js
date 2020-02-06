import React, { setGlobal, useEffect, useState } from "reactn"
import * as utils from "../utils.js"

const Styles = props => {
  const [randomColor, updateRandomColor] = useState(utils.getColor())
  const [randomInterval, updateRandomInterval] = useState(200)
  const [pulseStep, updatePulseStep] = useState(0)
  const [pulseIndex, updatePulseIndex] = useState(0)
  const [hoverColor, updateHoverColor] = useState(utils.getColor())
  setGlobal({ randomColor: randomColor })
  const unit = 274
  const space = 2
  const units = {
    0: 0,
    1: unit,
    2: 0,
    3: 100,
    4: 1,
    u0: 0,
    u1: unit,
    u2: 50,
    u3: 1000,
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
    hover: hoverColor,
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
          transition: `color ${units["u3"]}ms ease-in`,
        },
      },
    },
  })
  const intervals = [100, 3000]
  const steps = 4
  useEffect(() => {
    // const timer = setTimeout(() => {
    //   updateRandomColor(utils.getColor())
    //   updateRandomInterval(utils.getInterval(1, 100) * 10)
    //   const nextIndex = pulseStep < steps ? 0 : 1
    //   if (pulseStep === steps) {
    //     updateHoverColor(utils.getColor())
    //     updatePulseStep(0)
    //   } else {
    //     updatePulseStep(pulseStep + 1)
    //   }
    //   updatePulseIndex(nextIndex)
    // }, intervals[pulseIndex])
    // return () => {
    //   clearTimeout(timer)
    // }
  })
  return null
}
export default Styles
