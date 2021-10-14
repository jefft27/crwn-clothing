import './menu-item.styles.scss'

import React from 'react'
import { withRouter } from 'react-router-dom'

// use functional component b/c no need for state or lifecycle methods
// history error: https://stackoverflow.com/questions/53712860/react-js-history-push-is-not-a-function-error-and-it-isnt-navigating-to-a-dif/53714027

const MenuItem = ({
    title,
    imageUrl,
    size,
    subtitle,
    linkUrl,
    match,
    history,
}) => {
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
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

export default withRouter(MenuItem)
