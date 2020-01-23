import React, { useEffect, useState, setGlobal, useGlobal } from "reactn"
import PropTypes from "prop-types"
import Styles from "./Styles.js"
import Edge from "./Edge"
import "./styles.sass"
const Frame = props => {
  const { children, ...other } = props
  setGlobal(global)
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
  return (
    <>
      <div
        className="frame"
        style={{
          position: `fixed`,
          // opacity: 0,
          top: 0,
          left: 0,
          height: `100%`,
          width: `100%`,
        }}
      >
        <Styles />
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
