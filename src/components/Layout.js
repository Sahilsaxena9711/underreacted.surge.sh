import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/layout.css";
import Header from "./Header";
import Blacked from "blacked";
import Footer from "./Footer";

const Layout = (props) => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                siteMetadata {
                    title1
                    title2
                    title3
                    twitter
                    github
                    npm
                }
                }
            }
        `
    );
    return <div style={{
        display: "flex",
        marginTop: "1rem",
        marginBottom: "1rem",
        flexDirection: "column",
        alignItems: "center"
    }}>
        <div className={"layout"}>
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <Header small={props.small} {...data.site.siteMetadata} />
                {typeof document !== 'undefined' && Blacked && <Blacked />}
            </div>
            {props.children}
            <Footer {...data.site.siteMetadata} />
        </div>
    </div>
}

export default Layout;