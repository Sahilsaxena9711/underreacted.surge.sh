import React from "react";
import "../styles/footer.css";

const Footer = ({ twitter, github, npm }) => {
    console.log(twitter, github, npm);
    return <div className={"footer"}>
        <a className={"social"} onClick={() => window && window.open(twitter)}>Twitter</a>
        <a className={"social"} onClick={() => window && window.open(github)}>Github</a>
        <a className={"social"} onClick={() => window && window.open(npm)}>npm</a>
    </div>
}

export default Footer;