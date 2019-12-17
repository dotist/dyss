const React = require("react")
// const Layout = require("./src/components/layout").default
const Frame = require("./src/components/Frame").default

exports.wrapPageElement = ({ element, props }) => {
  return <Frame {...props}>{element}</Frame>
}
