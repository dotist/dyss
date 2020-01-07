import React, { useGlobal, useState, useEffect } from "reactn"
import PropTypes from "prop-types"
import { styled, makeStyles, createMuiTheme } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Trap = props => {
  const { children, element, styleVars, index, ...other } = props
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
      transform: `translateX(${half})`,
    },
    right: {
      borderColor: `transparent ${bg_color} transparent transparent`,
      borderWidth: `${unit}px ${unit}px ${unit}px 0`,
      width: `${unit}px`,
      height: nearHeight,
      top: half,
      transform: `translateY(-${half})`,
    },
    bottom: {
      borderColor: `transparent transparent ${bg_color} transparent`,
      borderWidth: `0 ${unit}px ${unit}px ${unit}px`,
      height: 0,
      width: nearHeight,
      right: half,
      transform: `translateX(${half})`,
    },
    left: {
      borderColor: `transparent transparent transparent ${bg_color}`,
      borderWidth: `${unit}px 0 ${unit}px ${unit}px`,
      width: `${unit}px`,
      height: nearHeight,
      top: half,
      transform: `translateY(-${half})`,
    },
  }
  const frameStyles = utils.getState("frameStyles")
  const trapStyles = {
    // ...element.styles,
    ...frameStyles,
  }
  const TrapElement = styled(Container)(trapStyles)
  const TrapShape = styled(Container)({
    ...trapElements[index],
    ...{
      padding: 0,
      position: `absolute`,
      borderStyle: `solid`,
      margin: `auto`,
      color: `transparent`,
    },
  })
  const TrapInner = styled(Container)({
    width: `100%`,
    height: `100%`,
    position: `absolute`,
    zIndex: 1,
    textAlign: `center`,
    padding: 0,
  })
  return (
    // <TrapElement maxWidth={false} className="trap--wrapper">
    <>
      <TrapShape maxWidth={false} className="trap--shape">
        &nbsp;
      </TrapShape>
      <TrapInner maxWidth={false} className="trap--inner">
        {children}
      </TrapInner>
    </>
    // </TrapElement>
  )
}

export default Trap
