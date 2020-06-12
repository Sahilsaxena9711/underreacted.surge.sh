import React from "react";
import "../styles/creator.css";
const Creator = () => {
    return <div className={"creator"}>
        <img className={"avatar"} src={
            "https://avatars3.githubusercontent.com/u/29303089?s=400&u=3701d81cb09b71b9c2432cc8999d425f21ebad0a&v=4"
        } />
        <div className={"about-creator-container"}>
            <p className={"about-creator"}>
                Personal blog by <a href={"https://twitter.com/SahilSa63821982"} className={"creator-name"}>Sahil Saxena</a>
            </p>
            <p className={"about-creator"}>
                Just another confused coder
            </p>
        </div>
    </div>
}

export default Creator;