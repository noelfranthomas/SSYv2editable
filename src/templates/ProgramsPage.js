import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import ArrowRight from 'react-feather/dist/icons/arrow-right'

import './ProgramsPage.css'

// Export Template for use in CMS preview
export const ProgramsPageTemplate = ({ title, subtitle, featuredImage, accordionOne, accordionTwo, accordionThree }) => (
  <main className="Programs">    
  
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <div className="rowFlexbox">
          <img src="https://ucarecdn.com/40ac8c45-8c1a-47a1-b046-d9b7eaf83006/SSY1on1PartnerPageTransparent.png" className="image" alt=""/>
          <Accordion items={accordionOne} />
        </div>

        <div className="rowFlexbox">
          <img src="https://ucarecdn.com/073f4256-c07c-4e6e-bc11-d2e58d6bdbc7/SSYConversationClubPartnerPageTransparent.png" className="image" alt=""/>
          <Accordion items={accordionTwo} />
        </div>

        <div className="rowFlexbox">
          <img src="https://ucarecdn.com/b03fc4f7-4ac0-4923-939d-af680c4b5f9f/KidsCanCodeTransparent.png" className="image" alt=""/>
          <Accordion items={accordionThree} />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="taCenter">
        <h1 className="thankYou">A Huge Thank You</h1>
        <h1 className="thankYouSub">to our sponsors for making this possible</h1>
        <br />
        <a className="Button" href='/partners/'>See How They Contributed <ArrowRight style={{paddingLeft: "7px"}}/></a>
      </div>
    </section>
    <br />
    <br />
  </main>
)

// Export Default HomePage for front-end
const ProgramsPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ProgramsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProgramsPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ProgramsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        accordionOne {
          title
          bold
          description
        }
        accordionTwo {
          title
          bold
          description
        }
        accordionThree {
          title
          bold
          description
        }
      }
    }
  }
`
