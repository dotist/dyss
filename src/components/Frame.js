import React, { useGlobal, setGlobal } from "reactn"
import PropTypes from "prop-types"
import Trap from "./Trap"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Frame = props => {
  const { children, data, ...other } = props
  const styleVars = utils.getState("styleVars")
  const unit = styleVars.units.main
  const effects = {
    top: false,
    right: false,
    bottom: false,
    left: false,
  }
  setGlobal({ frameEffects: effects })
  const elements = {
    top: {
      children: data.title,
      styles: {
        top: 0,
        left: 0,
        height: `${unit}px`,
        width: `100%`,
        padding: 0,
        transform: effects.top ? `translateY(-${unit}px)` : ``,
      },
    },
    right: {
      children: data.right,
      rotate: `180deg`,
      styles: {
        right: 0,
        top: 0,
        height: `100%`,
        width: `${unit}px`,
      },
    },
    bottom: {
      children: data.footer,
      rotate: `180deg`,
      styles: {
        right: 0,
        bottom: 0,
        width: `100%`,
        height: `${unit}px`,
      },
    },
    left: {
      children: data.left,
      rotate: `0deg`,
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
          const typoStyles = utils.getState("typoStyles")
          switch (key) {
            case "top":
              return (
                <h1
                  style={{
                    ...typoStyles,
                    ...{
                      fontSize: `${unit}px`,
                    },
                  }}
                >
                  {element.children}
                </h1>
              )
            default:
              return (
                <Typography
                  variant="h5"
                  style={{
                    ...typoStyles,
                    ...{
                      color: styleVars.colors.fg_1,
                      position: `relative`,
                      top: `50%`,
                      transform: `translateY(-50%) rotate(${element.rotate})`,
                    },
                  }}
                >
                  {element.children}
                </Typography>
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
