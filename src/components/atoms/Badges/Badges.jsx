import React from 'react'
import PropTypes from 'prop-types'
import './badges.css'

/**
 * Primary UI component for user interaction
 */
export const Badges = ({ typeBadges, backgroundColor, size, label, ...props }) => {
  return (
    <div
      role="badges"
      className={['storybook-badges', `storybook-badges--${size}`, `storybook-badges--${typeBadges}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </div>
  )
}

Badges.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  typeBadges: PropTypes.oneOf(['bug', 'dark', 'dragon', 'fairy', 'flying', 'ghost', 'grass', 'ice', 'psychic', 'rock', 'steel', 'water', 'fighting', 'fire', 'electric', 'posion', 'ground', 'normal', 'dark']),
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

Badges.defaultProps = {
  typeBadges: 'normal',
  backgroundColor: null,
  size: 'medium',
  onClick: undefined
}
