import React, { useEffect, useState, setGlobal, useGlobal } from "reactn"
import PropTypes from "prop-types"
import * as utils from "../utils.js"
import * as styles from "../styles.js"
import Edge from "./Edge"
import "./styles.sass"
const Frame = props => {
  const { children, ...other } = props
  const globalStyles = styles.getStyles()
  setGlobal(styles.getStyles())
  const sides = {
    top: -1,
    right: -1,
    bottom: -1,
    left: -1,
  }
  const [effects, updateEffects] = useState(sides)
  const keys = Object.keys(sides)
  setGlobal({ keys: keys })
  setGlobal({ active: null })
  setGlobal({ initFrame: false })
  const duration = 100
  useEffect(() => {
    setTimeout(function() {
      keys.reduce(
        (p, _, i) =>
          p.then(
            _ =>
              new Promise(resolve =>
                setTimeout(function() {
                  const key = keys[i]
                  const object = effects
                  Object.defineProperty(object, key, { value: 1 })
                  updateEffects({ ...object })
                  resolve()
                }, duration)
              )
          ),
        Promise.resolve()
      )
    }, 500)
  }, [])
  useEffect(() => {
    setTimeout(() => {
      keys.map(side => {
        globalStyles.colors[side] = utils.getColor()
      })
      setGlobal(globalStyles)
    }, 3000)
  })
  return (
    <>
      <div
        className="frame"
        style={{
          position: `fixed`,
          top: 0,
          left: 0,
          height: `100%`,
          width: `100%`,
          opacity: 0.5,
        }}
      >
        {keys.map(key => {
          return (
            <Edge name={key} key={key} effects={effects}>
              &nbsp;
            </Edge>
          )
        })}
      </div>
      {children}
    </>
  )
}
export default Frame
