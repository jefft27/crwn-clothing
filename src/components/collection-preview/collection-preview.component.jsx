import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({ title, items }) => {
    const collectionItems = items
        .filter((item, indx) => indx < 4)
        .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
        ))

    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">{collectionItems}</div>
        </div>
    )
}

export default CollectionPreview
