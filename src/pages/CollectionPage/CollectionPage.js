import React from 'react'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import './CollectionPageSASS.scss'
const CollectionPage = (props) => {
    const { match } = props;
    console.log("match--CollectionPage", match);
    console.log("match.params.categoryId", match.params.categoryId);
    return (
        <div className='category'>
            <h2>CollectionPage</h2>
        </div>
    )
}
export default CollectionPage
