const React = require("react")
const Layout = require("./src/components/Layout").default
import("./src/components/styles.sass")
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
