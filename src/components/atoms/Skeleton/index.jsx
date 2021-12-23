import React from 'react'
import PropTypes from 'prop-types'
import './skeleton.css'

/**
 * Primary UI component for user interaction
 */
export const Skeleton = ({ typeSkeleton, backgroundColor, ...props }) => {
  return (
    <div
      className={['storybook-skeleton', `storybook-skeleton--${typeSkeleton}`].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    /
    >

  )
}

Skeleton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  typeSkeleton: PropTypes.oneOf(['card', 'avatar', 'text']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func
}

Skeleton.defaultProps = {
  backgroundColor: null,
  typeSkeleton: 'card',
  //   size: 'medium',
  onClick: undefined
}
