import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({
  title,
  image,
  color,
  link
}) => {
  return (
<div className="Card">
    <a href={link} class={`card ${color}`}>
     <div class="overlay"></div>
   <div class="circle">
       <img src={image} alt=""/>
   </div>
  <h1 className="cardText">{title}</h1>
</a>
</div>




    
  )
}

Card.propTypes = {
  title: PropTypes.string
}

export default Card
