const React = require("react")
const Frame = require("./src/components/Frame").default

exports.wrapPageElement = ({ element, props }) => {
  return <Frame {...props}>{element}</Frame>
}
