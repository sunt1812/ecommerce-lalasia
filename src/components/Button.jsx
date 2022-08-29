import React from 'react'
import PropTypes from 'prop-types'

const Button = ({className,onClick,children}) => {

    return (
        <button
            className={`btn ${className}`}
            onClick={onClick ? () => onClick() : null}
        >
            <span>{children}</span>
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func,
    className:PropTypes.string,
}

export default Button