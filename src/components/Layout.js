import React, { useGlobal } from "reactn"

const Layout = props => {
  const { children, ...other } = props
  const [colors, updateColors] = useGlobal("colors")
  const [elementStyles] = useGlobal("elementStyles")
  return (
    <>
      <header
        style={{
          textAlign: `center`,
        }}
      >
        <h1 style={elementStyles.h1[1]}>DYSS.NET</h1>
      </header>
      <div>{children}</div>
    </>
  )
}
export default Layout
