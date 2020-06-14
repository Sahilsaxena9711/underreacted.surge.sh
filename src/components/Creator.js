import React from "react";
import "../styles/creator.css";
const Creator = () => {
    return <div className={"creator"}>
        <img className={"avatar"} src={
            "https://avatars1.githubusercontent.com/u/29303089?s=400&u=025018fd3c068f49d53c613569a3799f87c070ae&v=4"
        } />
        <div className={"about-creator-container"}>
            <p className={"about-creator"}>
                Personal blog by <a href={"https://twitter.com/sahil_saxenaJS"} className={"creator-name"}>Sahil Saxena</a>
            </p>
            <p className={"about-creator"}>
                Just another confused coder
            </p>
        </div>
    </div>
}

export default Creator;