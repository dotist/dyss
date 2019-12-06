import React, { useGlobal, setGlobal } from "reactn"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import * as utils from "../utils.js"
import Frame from "./Frame"
import Header from "./header"
import "./layout.css"

const useStyles = makeStyles({
  wrapper: {
    width: `100%`,
    height: `100%`,
    // padding: `{${styleVars.units.main}px}`,
    position: `absolute`,
    // color: styleVars.colors.fg_1,
  },
})

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteData = data.site.siteMetadata

  const styleVars = {
    units: {
      main: 75,
    },
    colors: {
      bg_1: `#000000`,
      fg_1: `#ffffff`,
    },
  }

  setGlobal({
    styleVars: styleVars,
  })

  siteData.footer = `© 2002 — ` + new Date().getFullYear()

  return (
    <>
      <Frame data={siteData}>
        <Header title={siteData.title} />
        <div style={{ margin: `100px 0 0 0` }}>
          <h1
            style={{
              color: styleVars.colors.bg_1,
              fontSize: `${styleVars.units.main}px`,
              lineHeight: `${styleVars.units.main}px`,
              textTransform: `uppercase`,
              fontStyle: `italic`,
              textAlign: `center`,
            }}
          >
            {siteData.title}
          </h1>
        </div>
        <div className={"page-content"}>
          <main>{children}</main>
          <footer>{siteData.footer}</footer>
        </div>
      </Frame>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
