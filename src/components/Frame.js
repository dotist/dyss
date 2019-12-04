import React, { useGlobal } from "reactn"
import PropTypes from "prop-types"
import Trap from "./Trap"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Frame = props => {
  const { children, data, ...other } = props
  const styleVars = utils.getState("styleVars")
  const unit = styleVars.units.main
  const elements = {
    top: {
      styles: {
        top: 0,
        left: 0,
        height: `${unit}px`,
        width: `100%`,
        padding: 0,
      },
    },
    right: {
      styles: {
        right: 0,
        top: 0,
        height: `100%`,
        width: `${unit}px`,
      },
    },
    bottom: {
      styles: {
        right: 0,
        bottom: 0,
        width: `100%`,
        height: `${unit}px`,
      },
    },
    left: {
      styles: {
        left: 0,
        top: 0,
        height: `100%`,
        width: `${unit}px`,
      },
    },
  }

  return (
    <>
      {Object.keys(elements).map(key => {
        const element = elements[key]
        const RenderElement = () => {
          switch (key) {
            case "top":
              return (
                <h1
                  style={{
                    color: styleVars.colors.fg_1,
                    fontSize: `${unit}px`,
                    lineHeight: `${unit}px`,
                    textTransform: `uppercase`,
                    fontStyle: `italic`,
                  }}
                >
                  {key}
                </h1>
              )
            default:
              return (
                <h3
                  style={{
                    color: styleVars.colors.fg_1,
                    // fontSize: `${unit}px`,
                    // lineHeight: `${unit}px`,
                    // textTransform: `uppercase`,
                    fontStyle: `italic`,
                  }}
                >
                  {key}
                </h3>
              )
          }
        }
        return (
          <Trap key={key} element={element} styleVars={styleVars} index={key}>
            <RenderElement />
          </Trap>
        )
      })}
      {children}
    </>
  )
}

export default Frame
