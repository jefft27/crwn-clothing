import './menu-item.styles.scss'

import React from 'react'

// use functional component b/c no need for state or lifecycle methods

const MenuItem = ({ title, imageUrl, size, subtitle }) => {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">{subtitle}</span>
            </div>
        </div>
    )
}

export default MenuItem
