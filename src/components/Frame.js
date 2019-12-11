import React, { useGlobal, setGlobal, useEffect } from "reactn"
import PropTypes from "prop-types"
import Trap from "./Trap"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Frame = props => {
  const { children, data, ...other } = props
  const styleVars = utils.getState("styleVars")
  const unit = styleVars.units.main
  const [frameEffects, updateEffects] = useGlobal("frameEffects")

  const frameLoop = duration => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(duration)
      }, duration)
    })
  }
  const duration = 100
  useEffect(() => {
    frameLoop(duration)
      .then(result => {
        frameEffects.top = !frameEffects.top
        updateEffects(frameEffects)
        return frameLoop(duration)
      })
      .then(result => {
        frameEffects.right = !frameEffects.right
        updateEffects(frameEffects)
        return frameLoop(duration)
      })
      .then(result => {
        frameEffects.bottom = !frameEffects.bottom
        updateEffects(frameEffects)
        return frameLoop(duration)
      })
      .then(result => {
        frameEffects.left = !frameEffects.left
        updateEffects(frameEffects)
        return true
      })
  }, [true])

  const elements = {
    top: {
      children: data.title,
      styles: {
        top: 0,
        left: 0,
        height: `${unit}px`,
        width: `100%`,
        transform:
          frameEffects.top === true
            ? `translateY(0)`
            : `translateY(-${unit}px)`,
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
        transform:
          frameEffects.right == true
            ? `translateX(0)`
            : `translateX(${unit}px)`,
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
        transform:
          frameEffects.bottom == true
            ? `translateY(0)`
            : `translateY(${unit}px)`,
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
        transform:
          frameEffects.left == true
            ? `translateX(0)`
            : `translateX(-${unit}px)`,
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
          <div className={"frame-element"}>
            <Trap key={key} element={element} styleVars={styleVars} index={key}>
              <RenderElement />
            </Trap>
          </div>
        )
      })}
      {children}
    </>
  )
}

export default Frame
