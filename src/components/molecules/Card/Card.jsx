import React from 'react'
import PropTypes from 'prop-types'
import './card.css'

/**
 * Primary UI component for user interaction
 */
export const Card = ({ theme, backgroundColor, children, ...props }) => {
  return (
    <div
      className={['storybook-card', `storybook-card--${theme}`].join(' ')}
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
  theme: PropTypes.oneOf(['default', 'dark']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * What background title to use
   */
  title: PropTypes.string,
  /**
   * How large should the card be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),

  /**
   * Card children
   */
  children: PropTypes.node,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}

Card.defaultProps = {
  backgroundColor: null,
  theme: 'default',
  // size: 'medium',
  onClick: undefined,
  children: null
}
