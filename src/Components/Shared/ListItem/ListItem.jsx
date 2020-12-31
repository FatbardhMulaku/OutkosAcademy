import React from 'react'
import './ListItem.scss'
const ListItem = (props) => {
    return (
        <div className="list-item">
            <span className="bullet"></span>
            <span className="text">{props.children}</span>
        </div>
    )
}

export default ListItem
