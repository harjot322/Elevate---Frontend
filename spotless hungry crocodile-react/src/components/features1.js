import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="features1-feature1-title thq-heading-2">
                {props.feature1Title}
              </h2>
              <span className="features1-feature1-description thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="features1-feature2-title thq-heading-2">
                {props.feature2Title}
              </h2>
              <span className="features1-feature2-description thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="features1-feature3-title thq-heading-2">
                {props.feature3Title}
              </h2>
              <span className="features1-feature3-description thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature3ImgAlt: 'AI-Driven Insights Image Alt',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1477925650445-9dc5d0aa1595?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzYzMjU4NXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Role-Based Access Image Alt',
  feature2Description:
    'Users can explore innovation updates interactively through virtual spaces representing departments.',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1504197832061-98356e3dcdcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzYzMjU4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Virtual Campus Simulation',
  feature1Description:
    'Elevate offers secure and personalized experiences for students, faculty, and administrators.',
  feature2ImgAlt: 'Virtual Campus Simulation Image Alt',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1527249014055-1b2b9d5e9fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzYzMjU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Description:
    'Elevate integrates AI to analyze data, identify trends, and offer predictive insights for decision-making.',
  feature1Title: 'Role-Based Access',
  feature3Title: 'AI-Driven Insights',
}

Features1.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Description: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
}

export default Features1
