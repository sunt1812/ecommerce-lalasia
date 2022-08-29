import React from 'react'
import PropTypes from 'prop-types'

const PostItem = ({img ,  title , desc , avatar , name , date,category,className}) => {
    return (
        <div className={`post ${className}`}>
            <img src={img} alt="" className="post__img" />
            <div className="post__content">
                <h6 className="post__category">{category}</h6>
                <h4 className="post__title">{title}</h4>
                <p className="post__desc">{desc}</p>
                <div className="post__body">
                    <div className="post__box">
                        <img src={avatar} alt="" className="post__avatar" />
                        <div className="post__name">{name}</div>
                    </div>
                    <div className="post__date">{date}</div>
                </div>
            </div>
        </div>
    )
}
PostItem.propTypes = {
    img:PropTypes.string,
    category:PropTypes.string,
    title:PropTypes.string,
    desc:PropTypes.string,
    avatar:PropTypes.string,
    name:PropTypes.string,
    date:PropTypes.string,
    className:PropTypes.string,
}

export default PostItem