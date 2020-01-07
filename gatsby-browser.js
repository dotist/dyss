const React = require("react")
// const Layout = require("./src/components/layout").default
// const Frame = require("./src/components/Frame").default
const Edges = require("./src/components/Edges").default

// exports.wrapPageElement = ({ element, props }) => {
//   return <Frame {...props}>{element}</Frame>
// }
exports.wrapPageElement = ({ element, props }) => {
  return <Edges {...props}>{element}</Edges>
}
