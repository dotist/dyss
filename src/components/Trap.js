import React, { useGlobal, useState, useEffect } from "reactn"
import PropTypes from "prop-types"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"

const Trap = props => {
  const { children, element, styleVars, index, ...other } = props
  const units = useGlobal(units)
  console.log(units)

  const TrapInner = styled(Container)({
    width: `100%`,
    height: `100%`,
    position: `absolute`,
    zIndex: 1,
    textAlign: `center`,
    padding: 0,
  })
  return <div>trap</div>
}

export default Trap
