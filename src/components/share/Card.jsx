import React from 'react'
import PropTypes from 'prop-types'
const Card = ({children,reverse}) => {
  const reverseStyling = {
    backgroundColor:reverse?'rgba(0,0,0,0.4)':"#fff",
    color:reverse?'#fff':"#333",
  }
  return (
    // Conditional Class
    // <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    // Conditional Styles
    <div className='card' style={reverseStyling}>{children}</div>
  )
}
Card.defaultProps = {
  reverse: false
}
Card.propTypes = {
  reverse: PropTypes.bool.isRequired,
  children: PropTypes.node,
}
export default Card