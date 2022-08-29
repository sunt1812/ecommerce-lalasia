import React from 'react'
import PropTypes from 'prop-types'

const Benefits = ({ data }) => {
    return (
        <div className="benefits__content grid">
            {data.map((item,index) => (
                <div className="benefits__card" key={index}>
                    <div className="benefits__card-icon">
                        <img src={item.icon} alt="" />
                    </div>
                    <h4 className="benefits__card-title">{item.title}</h4>
                    <p className="benefits__card-desc">{item.desc}</p>
                </div>
            ))}
        </div>
    )
}
Benefits.propTypes = {
    data: PropTypes.array
}
export default Benefits