import React from "react";
import { Link } from "gatsby";
import "../styles/header.css"

const Headers = (props) => {
    console.log(props)
    return <Link>
        <h1 className={
            props.small ? "small-header-text" : "header-text"
        }>
            {props.title1}
            <span style={{ color: "dodgerblue" }}>
                {props.title2}
            </span>
            {props.title3}
        </h1>
    </Link>;
}

export default Headers;