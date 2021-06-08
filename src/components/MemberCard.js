import React from 'react'
import PropTypes from 'prop-types'

import './MemberCard.css'

const MemberCard = ({
  title,
  image,
  subtitle
}) => {
  return (
<div className="MemberCard">
        <img src={image} alt={title}/>
        <div class="info">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
</div>
    
  )
}

MemberCard.propTypes = {
  title: PropTypes.string
}

export default MemberCard
