import React, { useState, useGlobal } from "reactn"
import * as utils from "../utils.js"
import * as styles from "../styles.js"

const Menu = props => {
  const [units] = useGlobal("units")
  const [colors] = useGlobal("colors")
  const [elementStyles] = useGlobal("elementStyles")
  return (
    <ul
      style={{
        width: `500px`,
        height: `500px`,
        padding: `100px`,
      }}
    >
      <li>Audio</li>
      <li>Links</li>
    </ul>
  )
}
export default Menu
