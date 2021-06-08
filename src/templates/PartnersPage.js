import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import StaticGallery from '../components/StaticGallery'

import './PartnersPage.css'

// Export Template for use in CMS preview
export const PartnersPageTemplate = ({ title, subtitle, featuredImage, gallery }) => (
  <main className="Partners">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    

    <section className="section">
      <div className="container">
        <StaticGallery images={gallery} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const PartnersPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <PartnersPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default PartnersPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query PartnersPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`
