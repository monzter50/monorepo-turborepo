import React from 'react'
import PropTypes from 'prop-types'
import Pokeball from './pokeball.svg'
import './loader.css'

/**
 * Primary UI component for user interaction
 */
export const Loader = ({ typeButton, backgroundColor, size, label, ...props }) => {
  // const mode = {
  //   primary: 'storybook-button--primary',
  //   secondary: 'storybook-button--secondary',
  //   link: 'storybook-button--link'
  // }
  return (
    <div className={'loading'}>
      <img src={Pokeball} className={'pokemon'} alt="" />
    </div>
  )
}

Loader.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  typeButton: PropTypes.oneOf(['primary', 'secondary', 'link']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}

Loader.defaultProps = {
  backgroundColor: null,
  typeButton: 'primary',
  size: 'medium',
  onClick: undefined
}
