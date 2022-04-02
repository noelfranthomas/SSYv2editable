import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import MemberGallery from '../components/MemberGallery'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const TeamPageTemplate = ({ title, subtitle, featuredImage, gallery }) => (
  <main className="Team">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section">
      <div className="container">
      <MemberGallery images={gallery} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const TeamPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <TeamPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default TeamPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query TeamPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
        about
      }
    }
  }
`
