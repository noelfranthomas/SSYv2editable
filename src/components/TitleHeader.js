import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import './TitleHeader.css'

const TitleHeader = ({
  title,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' TitleHeader-large'
  return (
    <div className={`TitleHeader relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="TitleHeader--Title">{title}</h1>
      </div>
    </div>
  )
}

TitleHeader.propTypes = {
  title: PropTypes.string
}

export default TitleHeader
