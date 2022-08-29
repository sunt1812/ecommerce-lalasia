import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Cta = ({title ,className,textBtn,icon}) => {
  return (
    <div className={`cta section ${className}`}>
        <h2 className="cta__title">{title}</h2>
        <Button className="btn-primary">{textBtn}
          {icon?<img src={icon} alt="" />:""}
        </Button>
    </div>
  )
}
Cta.propTypes = {
    title:PropTypes.string,
    className:PropTypes.string,
    textBtn:PropTypes.string,
    icon:PropTypes.string
}
export default Cta