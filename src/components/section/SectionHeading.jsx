import React from 'react'
import PropTypes from 'prop-types'

const SectionHeading = (props) => {
  return (
    <section className={`${props.className} section `}>
        <h5 className='section__subtitle subheading'>{props.subtitle}</h5>
        <h2 className="section__title heading">{props.title}</h2>
        <p className="section__desc">{props.desc}</p>
        {props.children}
    </section>
  )
}

SectionHeading.propTypes = {
    className:PropTypes.string,
    subtitle:PropTypes.string,
    title:PropTypes.string,
    desc:PropTypes.string,
    children:PropTypes.any
}

export default SectionHeading