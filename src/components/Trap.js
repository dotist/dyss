import React, { useGlobal, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Trap = props => {
  const { children, element, styleVars, index, ...other } = props
  console.log(other)
  const unit = styleVars.units.main
  const bg_color = styleVars.colors.bg_1

  const nearHeight = `99.5%`
  const half = `50%`

  const trapElements = {
    top: {
      borderColor: `${bg_color} transparent transparent transparent`,
      borderWidth: `${unit}px ${unit}px 0 ${unit}px`,
      width: nearHeight,
      height: 0,
      right: half,
      transform: `translateX(-${half})`,
    },
    right: {
      borderColor: `transparent ${bg_color} transparent transparent`,
      borderWidth: `${unit}px ${unit}px ${unit}px 0`,
      width: `${unit}px`,
      height: `99%`,
      top: `50%`,
      transform: `translateY(-50%)`,
    },
    bottom: {
      borderColor: `transparent transparent ${bg_color} transparent`,
      borderWidth: `0 ${unit}px ${unit}px ${unit}px`,
      height: 0,
      width: `99%`,
    },
    left: {
      borderColor: `transparent transparent transparent ${bg_color}`,
      borderWidth: `${unit}px 0 ${unit}px ${unit}px`,
      width: `${unit}px`,
      height: `99%`,
      top: `50%`,
      transform: `translateY(-50%)`,
    },
  }
  const trapStyles = {
    ...element.styles,
    // ...trapElements[index],
    ...{
      // test styles
      position: `absolute`,
      padding: 0,
      // background: `yellow`,
      // borderColor: `${styleVars.colors.bg_1} transparent transparent transparent`,
      // borderWidth: `${unit}px ${unit}px 0 ${unit}px`,
      // borderStyle: `solid`,
      // border: `1px solid pink`,
    },
  }
  const TrapInner = styled(Container)({
    ...trapElements[index],
    ...{
      position: `absolute`,
      borderStyle: `solid`,
      padding: 0,
      margin: `auto`,
    },
  })
  const TrapElement = styled(Container)(trapStyles)
  // return <TrapElement maxWidth={false}>this</TrapElement>
  return (
    <TrapElement maxWidth={false}>
      <TrapInner maxWidth={false}>{children}</TrapInner>
    </TrapElement>
  )
}

export default Trap
