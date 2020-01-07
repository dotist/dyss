import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Trap from "./Trap"
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
const Edges = props => {
  const { children, ...other } = props
  const styleVars = {
    units: {
      main: 75,
    },
    colors: {
      bg_1: `#000000`,
      fg_1: `#ffffff`,
    },
  }
  const styles = {
    width: `25%`,
    transform: `translateX(0)`,
    background: `pink`,
    marginBottom: `10px`,
    marginLeft: `0`,
    transition: `transform 300ms ease-in`,
  }
  const sides = {
    top: { background: `green` },
    right: null,
    bottom: null,
    left: null,
  }
  const [frameStyles, updateFrameStyles] = useState(sides)
  const duration = 500
  useEffect(() => {
    const keys = Object.keys(sides)
    keys.reduce(
      (p, _, i) =>
        p.then(
          _ =>
            new Promise(resolve =>
              setTimeout(function() {
                const key = keys[i]
                const object = frameStyles
                Object.defineProperty(object, key, {
                  value: { transform: `translateX(1000px)` },
                })
                updateFrameStyles({ ...object })
                resolve()
              }, duration)
            )
        ),
      Promise.resolve()
    )
  }, [])
  return (
    <>
      {Object.keys(sides).map(key => {
        return (
          <div
            className="edge"
            key={key}
            style={{
              ...styles,
              ...frameStyles[key],
            }}
          >
            {key}
          </div>
        )
      })}
    </>
  )
}
export default Edges
