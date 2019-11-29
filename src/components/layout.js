import React, { useGlobal, setGlobal  } from "reactn"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core/styles';

import Frame from './Frame'
import Header from "./header"
import "./layout.css"

setGlobal({
  styles: {
    units: {
      main: 75,
    },
    colors: {
      bg_1: `#000000`,
      fg_1: `#ffffff`
    },
  },
})


const useStyles = makeStyles({
  wrapper: {
    width: `100%`,
    height: `100%`,
    // padding: `{${styleVars.units.main}px}`,
    position: `absolute`,
    // color: styleVars.colors.fg_1,

  }
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
  const style = useGlobal()
  return (
  <>
    <Frame>
      <Header siteTitle={data.site.siteMetadata.title} />
        <div className={'page-content'}>
          <main>{children}</main>
          <footer>
          © 2002 — {new Date().getFullYear()}
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
