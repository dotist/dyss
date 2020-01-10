import React, { useEffect, useState, setGlobal } from "reactn"
import PropTypes from "prop-types"
import Edge from "./Edge"
import "styles.sass"
const Layout = props => {
  const { children, ...other } = props
  const unit = 74
  const space = 2
  const global = {
    units: {
      0: 0,
      1: unit,
      2: 0,
      3: 100,
      4: 1,
      u0: 0,
      u1: unit,
      u2: 100,
      space: space,
      near: `calc(100% - 16px)`,
      full: `calc(100% - ${unit}px - ${unit}px - ${space * 4}px)`,
      half: `50%`,
    },
    colors: {
      1: `#000000`,
      2: `#ffffff`,
      3: `grey`,
      color1: `#000000`,
      color2: `#ffffff`,
      color3: `grey`,
    },
  }
  setGlobal(global)
  const sides = {
    top: null,
    right: null,
    bottom: null,
    left: null,
  }
  const [effects, updateEffects] = useState(sides)
  const keys = Object.keys(sides)
  setGlobal({ keys: keys })
  const duration = 150
  useEffect(() => {
    keys.reduce(
      (p, _, i) =>
        p.then(
          _ =>
            new Promise(resolve =>
              setTimeout(function() {
                const key = keys[i]
                const object = effects
                Object.defineProperty(object, key, {
                  value: { transform: `translateY(0)`, opacity: 1 },
                })
                updateEffects({ ...object })
                resolve()
              }, duration)
            )
        ),
      Promise.resolve()
    )
  }, [])
  return (
    <>
      <div
        style={{
          position: `fixed`,
          top: 0,
          left: 0,
          height: `100%`,
          width: `100%`,
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
    </>
  )
}
export default Layout
