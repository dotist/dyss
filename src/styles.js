import React, { useState } from "react"
import * as utils from "./utils.js"

export const getStyles = props => {
  const [hoverColor] = useState(utils.getColor())
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
    random: utils.getColor(),
    hover: hoverColor,
    shape: `#000`,
    color1: `#000000`,
    color2: `#ffffff`,
    color3: `grey`,
    color4: `#00F`,
    color5: `#ff0`,
  }
  const elementStyles = {
    h1: {
      1: {
        fontSize: `${units["u1"]}px`,
        color: colors["color3"],
        margin: `0 auto`,
        // display: `inline`,
        letterSpacing: `${units["u1"] / 2}px`,
        lineHeight: 0,
        top: `${units["u1"] / 2}px`,
        position: `relative`,
      },
    },
  }
  return {
    units: units,
    colors: colors,
    elementStyles: elementStyles,
  }
}
