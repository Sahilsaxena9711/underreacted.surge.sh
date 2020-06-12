import React from "react";
import Layout from "../components/Layout";
import '../styles/global.css';
import '../styles/post.css';
import { graphql, Link } from "gatsby";
import Creator from "../components/Creator";

const Home = ({ data }) => {
  console.log(data);
  return <Layout>
    <Creator />
    <div className={"list-container"}>
      {data.allMarkdownRemark.edges.map((blog, k) =>
        <div className={"list-item"} key={k}>
          <Link className={"title"} to={blog.node.fields.slug}>{blog.node.frontmatter.title}</Link>
          <p className={"date"}>{blog.node.frontmatter.date}</p>
          <span className={"description"}>{blog.node.frontmatter.description}</span>
          <div dangerouslySetInnerHTML={blog.node.html} />
        </div>
      )}
    </div>
  </Layout>;
}
export default Home;

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___sno}) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date
            description
            title
          }
          excerpt
        }
      }
    }
  }
`
