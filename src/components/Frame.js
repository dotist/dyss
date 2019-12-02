import React, { useGlobal } from "reactn"
import PropTypes from "prop-types"
import Trap from './Trap'
import { styled, makeStyles } from "@material-ui/core/styles"
import { Container, Typography } from "@material-ui/core"
import * as utils from "../utils.js"

const Frame = props => {
  const { children, data, ...other } = props
  const styles = utils.getState('styles')
  // console.log(props)
  // console.log(styles)
  const unit = styles.units.main
  const baseStyles = {
    top: 0,
    left: 0,
    fg: styles.colors.fg_1,
    bg: styles.colors.bg_1,
  }
  const elements = {
    top: {
      string: '1',
      styles: {...baseStyles},
    },
    right: {
      string: '2',
      styles: {...baseStyles, ...{
        transform: 'rotate(70deg) translate(0, -100%)',
        transformOrigin: 'right bottom',
      }},
    }
  }

  return (
    <>
      {Object.keys(elements).map(key => {
        const element = elements[key]
        const RenderElement = () => {
          switch (key) {
            case 'top':
              return <h1 style={{
                color: styles.colors.fg_1,
                fontSize: `${styles.units.main}px`,
                lineHeight: `${styles.units.main}px`,
                textTransform: `uppercase`,
                fontStyle: `italic`,
              }}>{element.string}</h1>
            default:
             return element.string
            }
        }
        return (
          <Trap key={key} element={element}>
            <RenderElement/>
          </Trap>
        )
      })}
      {children}
    </>
  )
}

export default Frame
