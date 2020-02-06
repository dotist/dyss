import React, { useGlobal } from "reactn"

export function getState(prop) {
  const state = useGlobal(prop)
  return state[0]
}

export const getColor = props => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16)
}

export const getInterval = (i, e) => {
  return Math.floor(Math.random() * e) + i
}
