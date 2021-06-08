import React from 'react'
import { graphql } from 'gatsby'

import TitleHeader from '../components/TitleHeader'
import Layout from '../components/Layout'
import Card from '../components/Card'

import ArrowRight from 'react-feather/dist/icons/arrow-right'

import "./HomePage.css"



// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, featuredImage, mstatement }) => (
  <main className="Home">
    <TitleHeader
      large
      title={title}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container taCenter">
        <h1 className="header">Our Mission</h1>
        <div className="rowFlexbox">
          <img src="https://ucarecdn.com/30bd66d3-0a33-4eae-9be1-0c572373bfbc/" className="image" alt=""/>
          <p className="ptext taLeft">{mstatement}</p>
        </div>
        <br/>
        <a className="Button" href='/programs/'>See What We're Doing  <ArrowRight style={{paddingLeft: "7px"}}/></a>
      </div>
    </section>

    <section className="section">
      <div className="container cardContainer">
        <Card 
          title="News"
          color="yellow"
          link="/news"
          image="https://ucarecdn.com/574cc9b5-3792-4916-9981-2b883fec3173/"/>
        <Card 
          title="Partners"
          color="pink"
          link="/partners"
          image="https://ucarecdn.com/d6ddbb35-ed64-4161-a82f-ad8e0285caaa/"/>
        <Card 
          title="Volunteer"
          color="green"
          link="/https://docs.google.com/forms/d/e/1FAIpQLSdmHUIeoXiPvhunvUIxb-zoDlOf9wg2wAi4_BamdtRVC6-n3Q/viewform"
          image="https://ucarecdn.com/a356c248-987e-499e-be7b-f473ba7f3b5d/"/>
      </div>
    </section>

  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
query HomePage($id: String!) {
  page: markdownRemark(id: { eq: $id }) {
    ...Meta
    html
    frontmatter {
      title
      featuredImage
      mstatement
    }
  }
}
`