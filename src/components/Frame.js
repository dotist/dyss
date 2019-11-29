import React, { useGlobal } from "reactn"
import PropTypes from "prop-types"
import { styled, makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"
import { For } from "react-loops"
import * as utils from "../utils.js"

const elements = {
  top: {
    coord: {
      top: 0,
      left: 0,
    },
  },
}

const array = Object.keys(elements)

const Frame = props => {
  const styles = utils.getState("styles")
  const { children, ...other } = props
  const array = ["1", "2"]
  return (
    <div>
      {Object.keys(elements).map(key => {
        {
          console.log(elements[key])
        }
        return <div key={key}>somehting</div>
      })}
      {children}
    </div>
  )
  // return <div>{children}FindMe</div>
}

export default Frame
