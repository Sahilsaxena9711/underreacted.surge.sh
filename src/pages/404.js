import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
    return <Layout>
        <h1 style={{
            marginTop: "2rem",
            marginBottom: "1rem",
            textAlign: "center"
        }}>404</h1>
        <h3 style={{
            marginBottom: "2rem",
            textAlign: "center"
        }}>oops! page not found</h3>
    </Layout>
}

export default NotFound;