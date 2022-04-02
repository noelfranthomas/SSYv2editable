import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import _kebabCase from 'lodash/kebabCase'

import MemberCard from './MemberCard'
import './MemberGallery.css'

export const query = graphql`
  fragment MemberGallery on MarkdownRemark {
    frontmatter {
      gallery {
        alt
        image
        title
        subtitle
        about
      }
    }
  }
`

export default class MemberGallery extends Component {
  state = {
    loaded: false,
    isOpen: false,
    sliderImages: [],
    index: 0
  }

  isOpen(isOpen, index) {
    if (typeof index === 'undefined') index = 0
    this.setState({ isOpen, index })
  }
  handleKeyDown = ev => {
    if (ev.keyCode === 13 && !this.state.isOpen) {
      // enter to open
      this.isOpen(true, this.state.index)
    }
  }

  getImageInfo = (img, index) =>
    fetch(img.image + '-/json/')
      .then(res => res.json())
      .then(
        result => {
          const newImagesArr = [...this.state.sliderImages]
          newImagesArr[index] = {
            src: img.image,
            title: img.title,
            w: result.width,
            h: result.height
          }
          this.setState({
            sliderImages: newImagesArr
          })
          return true
        },
        error => {
          console.log(error)
          return false
        }
      )

  componentDidMount() {
    const { images } = this.props,
      maxCount = images.length
    let loopCount = 1

    for (let i in images) {
      if (this.getImageInfo(images[i], i)) {
        this.setState({ loaded: loopCount === maxCount })
        loopCount++
      }
    }
  }

  render() {
    const { images } = this.props
    return (
      <div>
      <Fragment>
        {images && images.length > 0 && (
          <div className="MemberGallery">
            {images.map((image, index) => (
              <div
                className="MemberGallery--Item"
                key={_kebabCase(image.alt) + '-' + index}
                onClick={() => this.isOpen(true, index)}
                onKeyDown={this.handleKeyDown}
                tabIndex={0}
                aria-label="Toggle MemberGallery"
                role="button"
              >
                  <MemberCard
                  title={image.title}
                  image={image.image}
                  subtitle={image.subtitle}/>
              </div>
            ))}
          </div>
        )}
      </Fragment>
    </div>
    )
  }
}

MemberGallery.propTypes = {
  images: PropTypes.array.isRequired
}
