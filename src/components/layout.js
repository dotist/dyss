import React, { useGlobal, setGlobal } from "reactn"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"
import Frame from "./Frame"
import Header from "./header"
import "./layout.css"
import "./styles.sass"

const useStyles = makeStyles({
  wrapper: {
    width: `100%`,
    height: `100%`,
    position: `absolute`,
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

  const typoStyles = {
    color: styleVars.colors.fg_1,
    lineHeight: `${styleVars.units.main}px`,
    textTransform: `uppercase`,
    fontStyle: `italic`,
    letterSpacing: `15px`,
  }
  const frameStyles = {
    padding: 0,
    position: `absolute`,
    transition: `transform 200ms ease-out !important`,
  }
  const frameClasses = {
    top: null,
    right: null,
    bottom: null,
    left: null,
  }
  setGlobal({
    styleVars: styleVars,
    frameStyles: frameStyles,
    typoStyles: typoStyles,
    frameClasses: frameClasses,
  })

  siteData.footer = `© 2002 — ` + new Date().getFullYear()
  // siteData.right = `immer`
  // siteData.left = `werdender`
  siteData.right = ``
  siteData.left = ``
  return (
    <>
      <Frame
        data={siteData}
        style={{
          position: `relative`,
          overflow: `hidden`,
        }}
      >
        <Header title={siteData.title} />
        <div style={{}}>
          <h1
            style={{
              ...typoStyles,
              ...{
                color: styleVars.colors.bg_1,
                fontSize: `${styleVars.units.main}px`,
                lineHeight: `${styleVars.units.main}px`,
                fontStyle: `italic`,
                textAlign: `center`,
              },
            }}
          >
            {siteData.title}
          </h1>
        </div>
        <div className={"page-content"}>
          <main>{children}</main>
          <footer
            style={{
              position: `absolute`,
              left: 0,
              bottom: 0,
              width: `100%`,
            }}
          >
            <Typography
              variant="h5"
              style={{
                ...typoStyles,
                ...{
                  width: `100%`,
                  textAlign: `center`,
                  color: styleVars.colors.bg_1,
                  transform: `rotate(180deg)`,
                  opacity: 0,
                },
              }}
            >
              {siteData.footer}
            </Typography>
          </footer>
        </div>
      </Frame>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
