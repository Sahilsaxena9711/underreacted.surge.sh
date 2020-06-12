import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import Creator from "../components/Creator";
const BlogPosts = ({ data, pageContext, location }) => {
    console.log(data, pageContext, location);
    const post = data.markdownRemark
    const { previous, next } = pageContext
    return <Layout small>
        <div className={"list-container list-item"}>
            <h2 className={"title"} style={{
                fontSize: "1.5rem"
            }}>{post.frontmatter.title}</h2>
            <div className={"html-text"} dangerouslySetInnerHTML={{ __html: post.html.split("class=").join("className=") }} />
        </div>
        <Creator />
        <nav style={{
            marginTop: "2rem"
        }}>
            <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                    marginLeft: 0
                }}
            >
                <li>
                    {previous && (
                        <Link className={"social"} to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link style={{
                            marginRight: 0
                        }} className={"social"} to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    </Layout>;
}
export default BlogPosts;

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`