import React, { useEffect, useState, setGlobal, useGlobal } from "reactn"
import PropTypes from "prop-types"
import * as utils from "../utils.js"
import * as styles from "../styles.js"
import Edge from "./Edge"
import Shape from "./Shape"
import EdgeInner from "./EdgeInner"
import "./styles.sass"
const Frame = props => {
  const { children, ...other } = props
  const globalStyles = styles.getStyles()
  setGlobal(styles.getStyles())
  const [initFrame, updateInitFrame] = useGlobal(null)
  const sides = {
    top: -1,
    right: -1,
    bottom: -1,
    left: -1,
  }
  const [effects, updateEffects] = useState(sides)
  const keys = Object.keys(sides)
  setGlobal({ keys: keys })
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
      updateInitFrame(true)
    }, 500)
  }, [])
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
              <Shape name={key} />
              <EdgeInner name={key} />
            </Edge>
          )
        })}
      </div>
      {children}
    </>
  )
}
export default Frame
