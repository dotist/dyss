import React, { useGlobal, setGlobal, useEffect, useState } from "reactn"
import PropTypes from "prop-types"
import Shape from "./Shape"

const Edge = props => {
  const { name, effects, children, data, ...other } = props

  const [units] = useGlobal("units")

  const styles = {
    position: `fixed`,
    transition: `transform ${units[3]}ms cubic-bezier(0.785, 0.135, 0.15, 0.86), 
      opacity ${units[3]}ms ease-in`,
    opacity: 0,
  }

  const sides = {
    top: {
      top: `${units[2]}px`,
      left: `${units[2]}px`,
      height: `${units[1]}px`,
      width: `100%`,
      transform: `translateY(-${units[1]}px)`,
      paddingTop: `${units[4]}px`,
    },
    right: {
      right: `${units[2]}px`,
      top: `${units[2]}px`,
      height: `100%`,
      width: `${units[1]}px`,
      transform: `translateX(${units[1]}px)`,
      paddingRight: `${units[4]}px`,
    },
    bottom: {
      right: `${units[2]}px`,
      bottom: `${units[2]}px`,
      width: `100%`,
      height: `${units[1]}px`,
      transform: `translateY(${units[1]}px)`,
      paddingBottom: `${units[4]}px`,
    },
    left: {
      left: `${units[2]}px`,
      top: `${units[2]}px`,
      height: `100%`,
      width: `${units[1]}px`,
      transform: `translateX(-${units[1]}px)`,
      paddingLeft: `${units[4]}px`,
    },
  }

  const effectIsSet = effects.hasOwnProperty(name)
  const effect = effectIsSet ? effects[name] : {}

  const hoverOn = (e, name) => {
    console.log(name)
  }
  const hoverOff = (e, name) => {
    console.log("off", name)
  }

  return (
    <div
      style={{
        ...styles,
        ...sides[name],
        ...effect,
      }}
      // onMouseEnter={e => hoverOn(e, name)}
      // onMouseLeave={e => hoverOff(e, name)}
    >
      <Shape name={name} />
    </div>
  )
}

export default Edge
