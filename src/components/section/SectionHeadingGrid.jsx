import React from 'react'
import PropTypes from 'prop-types'

const SectionHeadingGrid = props => {
  return (
    <section className={`${props.className} section `}>
        <div className="section__grid">
            <div className="section__left">
                <h5 className='section__subtitle subheading'>{props.subtitle}</h5>
                <h2 className="section__title heading">{props.title}</h2>
            </div>
            <div className="section__right">
                <p className="section__desc">{props.desc}</p>
                {props.textbtn ? <a href="#" className="section__textbtn">{props.textbtn}</a> :""}
            </div>
        </div>
        {props.children}
    </section>
  )
}

SectionHeadingGrid.propTypes = {
    className:PropTypes.string,
    subtitle:PropTypes.string,
    title:PropTypes.string,
    desc:PropTypes.string,
    textbtn:PropTypes.string,
    children:PropTypes.any
}

export default SectionHeadingGrid