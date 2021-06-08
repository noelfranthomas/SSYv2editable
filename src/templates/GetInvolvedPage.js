import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const GetInvolvedPageTemplate = ({ title, subtitle, featuredImage }) => (
  <main className="GetInvolved">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
  </main>
)

const GetInvolvedPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <GetInvolvedPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default GetInvolvedPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query GetInvolvedPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
