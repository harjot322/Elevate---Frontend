import React from 'react'

import PropTypes from 'prop-types'

import './steps.css'

const Steps = (props) => {
  return (
    <div className="steps-container1 thq-section-padding">
      <div className="steps-max-width thq-section-max-width">
        <div className="steps-container2 thq-grid-2">
          <div className="steps-section-header">
            <h2 className="steps-text10 thq-heading-2">
              Discover the Power of Elevate
            </h2>
            <p className="thq-body-large">
              <span className="steps-text12">
                Unlock the potential of your educational institution with
                Elevate! Our innovative platform empowers you to track, measure,
                and showcase innovation excellence seamlessly. With features
                like customizable dashboards, AI-driven analytics, and a virtual
                campus simulation, Elevate transforms how you manage and
                celebrate achievements. Foster collaboration, drive continuous
                improvement, and make informed decisions that enhance
                educational outcomes. Experience the future of innovation
                management and take your institution to new heights with
                Elevate!
              </span>
              <br className="steps-text13"></br>
              <br></br>
              <span className="steps-text15">
                Join us in shaping the future of education today!
              </span>
            </p>
            <div className="steps-actions">
              <button className="thq-button-filled thq-button-animated steps-button">
                <span className="steps-text16 thq-body-small">Join Now</span>
              </button>
            </div>
          </div>
          <div className="steps-container3">
            <div className="steps-container4 thq-card">
              <h2 className="thq-heading-2">{props.step1Title}</h2>
              <span className="steps-text18 thq-body-small">
                {props.step1Description}
              </span>
              <label className="steps-text19 thq-heading-3">01</label>
            </div>
            <div className="steps-container5 thq-card">
              <h2 className="thq-heading-2">{props.step2Title}</h2>
              <span className="thq-body-small">{props.step2Description}</span>
              <label className="steps-text22 thq-heading-3">02</label>
            </div>
            <div className="steps-container6 thq-card">
              <h2 className="thq-heading-2">{props.step3Title}</h2>
              <span className="steps-text24 thq-body-small">
                {props.step3Description}
              </span>
              <label className="steps-text25 thq-heading-3">03</label>
            </div>
            <div className="steps-container7 thq-card">
              <h2 className="thq-heading-2">{props.step4Title}</h2>
              <span className="steps-text27 thq-body-small">
                {props.step4Description}
              </span>
              <label className="steps-text28 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps.defaultProps = {
  step2Description:
    'Navigate through virtual spaces representing different departments to stay updated on ongoing projects and achievements.',
  step1Title: 'Sign Up for Elevate',
  step1Description:
    'Create an account on Elevate using your institution email to access the platform.',
  step3Title: 'Track Innovation Metrics',
  step4Title: 'Utilize AI-Driven Insights',
  step2Title: 'Explore Virtual Campus',
  step3Description:
    'Customize your dashboard to focus on specific indicators and receive dynamic updates on research trends and innovation progress.',
  step4Description:
    'Leverage AI capabilities to analyze data, identify trends, and receive predictive insights to guide decision-making.',
}

Steps.propTypes = {
  step2Description: PropTypes.string,
  step1Title: PropTypes.string,
  step1Description: PropTypes.string,
  step3Title: PropTypes.string,
  step4Title: PropTypes.string,
  step2Title: PropTypes.string,
  step3Description: PropTypes.string,
  step4Description: PropTypes.string,
}

export default Steps
