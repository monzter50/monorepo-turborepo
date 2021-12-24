import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

/**
 * Primary UI component for user interaction
 */
export const Card = ({ theme, backgroundColor, size, children, ...props }) => {
  return (
    <div
      className={['storybook-card', `storybook-card--${size}`, `storybook-card--${theme}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  theme: PropTypes.oneOf(['default', 'dark', 'light']),
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
  children: PropTypes.node.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}

Card.defaultProps = {
  backgroundColor: null,
  typeButton: 'primary',
  size: 'medium',
  onClick: undefined
}
