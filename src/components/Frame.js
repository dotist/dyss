import React, { useGlobal, setGlobal, useEffect, useState } from "reactn"
import PropTypes from "prop-types"
import Trap from "./Trap"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Frame = props => {
  const { children, data, ...other } = props
  const styleVars = {
    units: {
      main: 75,
    },
    colors: {
      bg_1: `#000000`,
      fg_1: `#ffffff`,
    },
  }

  const [frameClasses, updateFrameClasses] = useState({
    top: null,
    right: null,
    bottom: null,
    left: null,
  })

  const unit = styleVars.units.main
  const frameStylesAll = {
    padding: 0,
    position: `absolute`,
    transition: `transform 200ms ease-out`,
  }
  const frameLoop = duration => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(duration)
      }, duration)
    })
  }
  const duration = 100
  const frameClass = "frame-element-active"

  useEffect(() => {
    frameLoop(duration)
      .then(result => {
        frameClasses.top = frameClass
        updateFrameClasses(frameClasses)
        return frameLoop(duration)
      })
      .then(result => {
        frameClasses.right = frameClass
        updateFrameClasses(frameClasses)
        return frameLoop(duration)
      })
      .then(result => {
        frameClasses.bottom = frameClass
        updateFrameClasses(frameClasses)
        console.log(frameClasses)
        return frameLoop(duration)
      })
      .then(result => {
        frameClasses.left = frameClass
        updateFrameClasses(frameClasses)
        return true
      })
  }, [frameClasses])

  const frames = {
    top: {
      // children: data.title,
      styles: {
        top: 0,
        left: 0,
        height: `${unit}px`,
        width: `100%`,
        transform: `translateY(-${unit}px)`,
      },
    },
    right: {
      // children: data.right,
      rotate: `180deg`,
      styles: {
        right: 0,
        top: 0,
        height: `100%`,
        width: `${unit}px`,
        transform: `translateX(${unit}px)`,
      },
    },
    bottom: {
      // children: data.footer,
      rotate: `180deg`,
      styles: {
        right: 0,
        bottom: 0,
        width: `100%`,
        height: `${unit}px`,
        transform: `translateY(${unit}px)`,
      },
    },
    left: {
      // children: data.left,
      rotate: `0deg`,
      styles: {
        left: 0,
        top: 0,
        height: `100%`,
        width: `${unit}px`,
        transform: `translateX(-${unit}px)`,
      },
    },
  }

  const FrameElement = props => {
    const { frameStylesAll, frame, frameClass, children, ...other } = props
    return (
      <div
        className={frameClass}
        style={{
          ...frame.styles,
          ...frameStylesAll,
        }}
      >
        {children}
      </div>
    )
  }
  return (
    <>
      {Object.keys(frames).map(key => {
        const frame = frames[key]
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
                  {frame.children}
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
                      transform: `translateY(-50%) rotate(${frame.rotate})`,
                    },
                  }}
                >
                  {frame.children}
                </Typography>
              )
          }
        }
        {
          console.log(useState(frameClasses))
        }
        return (
          <FrameElement
            key={key}
            frameStylesAll={frameStylesAll}
            frame={frame}
            frameClass={frameClasses[key]}
          >
            <Trap key={key} element={frame} styleVars={styleVars} index={key}>
              <RenderElement />
            </Trap>
          </FrameElement>
        )
      })}
      {children}
    </>
  )
}

export default Frame
