import React from 'react'
import { Link } from 'react-router-dom'
import './StyledLink.scss'
const StyledLink = (props) => {
    return (
       <Link to={props.to} className={`styled-link ${props.styles}`}>{props.children}</Link>
    )
}

export default StyledLink
