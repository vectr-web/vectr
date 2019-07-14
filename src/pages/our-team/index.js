import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {

  return (
    <Layout>
      <SEO title="Our Team" />
      <h1>Our Team</h1>
      {console.log(edges)}
      {edges.map(member => (
        <div key={member.node.frontmatter.name}>
          <Img fluid={member.node.frontmatter.image.childImageSharp.fluid} />
        </div>
      ))}
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query MemberQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "team" } } }) {
      edges {
        node {
          frontmatter {
            title
            name
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            category
          }
        }
      }
    }
  }
`
