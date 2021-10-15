import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        };
    }

    render() {
        const { collections } = this.state;

        const collectionsItems = collections.map(
            ({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            )
        );

        return <div className="shop-page">{collectionsItems}</div>;
    }
}

export default Shop;
