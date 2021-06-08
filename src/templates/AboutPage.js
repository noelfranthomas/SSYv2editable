import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

import './AboutPage.css'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({ title, subtitle, featuredImage, mission, about, vision }) => (
  <main className="About">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <div className="flexContainer">
          <h1 className="flexItem textSection">Mission</h1>
          <p className="flexItem">{mission}</p>
        </div>
        <div className="flexContainer">
          <h1 className="flexItem textSection">About</h1>
          <p className="flexItem">{about}</p>
        </div>
        <div className="flexContainer">
          <h1 className="flexItem textSection">Vision</h1>
          <p className="flexItem">{vision}</p>
        </div>
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const AboutPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        mission
        about
        vision
      }
    }
  }
`
