import React, { useGlobal } from "reactn"

export function getState(prop) {
  const state = useGlobal(prop)
  return state[0]
}
