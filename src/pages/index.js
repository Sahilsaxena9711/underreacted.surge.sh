import React from "react";
import Layout from "../components/Layout";
import '../styles/global.css';
import '../styles/post.css';
import { graphql, Link } from "gatsby";
import Creator from "../components/Creator";

const Home = ({ data }) => {
  const calculateBeers = (time) => {
    let beer = "🍺";
    return beer.repeat(time / 5);
  }
  return <Layout>
    <Creator />
    <div className={"list-container"}>
      {data.allMarkdownRemark.edges.map((blog, k) =>
        <div className={"list-item"} key={k}>
          <Link
            className={"title"}
            to={blog.node.fields.slug}
            dangerouslySetInnerHTML={{ __html: blog.node.frontmatter.title }}
          />
          <p className={"date"}>{blog.node.frontmatter.date} • {calculateBeers(blog.node.frontmatter.time)}{blog.node.frontmatter.time}min read</p>
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
            time
          }
          excerpt
        }
      }
    }
  }
`
