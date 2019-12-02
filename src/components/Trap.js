import React, { useGlobal } from "react"
import PropTypes from "prop-types"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Trap = props => {
  console.log(props)
  const {data, styles, element, ...other} = props
  const trapStyles = {...styles, ...{
    width: `100%`,
    height: 0,
    position: `absolute`,
    top: `${element.styles.top}px`,
    left: `${element.styles.left}px`,
    borderColor: `${element.bg} transparent transparent transparent`,
    borderWidth: `${element.unit}px ${element.unit}px 0 ${element.unit}px`,
    borderStyle: `solid`,
  }}
  return (
    styled(Container)(trapStyles)
  )
}

export default Trap
