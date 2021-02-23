import React from 'react'
import './ListItem.scss'
import RubberBand from 'react-reveal/RubberBand';

const ListItem = (props) => {
    return (
        <div className="list-item">
            <span className="bullet"></span>
            <RubberBand> <span className="text">{props.children}</span></RubberBand>
        </div>
    )
}

export default ListItem;
