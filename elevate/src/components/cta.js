import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="cta-text1 thq-heading-2">
                  {props.heading1}
                </span>
                <p className="cta-text2 thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="cta-button thq-button-filled">
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  content1:
    'Join Elevate today and revolutionize how your institution tracks, measures, and promotes innovation.',
  action1: 'Get Started',
  heading1: 'Ready to Elevate Your Innovation Efforts?',
}

CTA.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
}

export default CTA
