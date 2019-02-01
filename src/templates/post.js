import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PostHeader from '../components/PostHeader'
import SEO from '../components/SEO'
import Confetti from '../components/Confetti'
import { graphql } from 'gatsby'

export default function Post({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO postData={post.frontmatter} postSlug={post.fields.slug} />
      <article className="post">
        <PostHeader post={post} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Confetti />
      </article>
    </Layout>
  )
}

export const postQuery = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        type
        section
        slug
      }
      frontmatter {
        title
        roles
        link
        description
        date(formatString: "MMMM D, YYYY")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 640, maxHeight: 480, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`
