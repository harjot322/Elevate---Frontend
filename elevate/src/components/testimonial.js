import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="testimonial-text10 thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  review2:
    'As a research coordinator, Elevate has made it incredibly easy to monitor the progress of various projects across departments. The virtual campus simulation is a game-changer!',
  author3Name: 'Michael Johnson',
  author4Src:
    'https://images.unsplash.com/photo-1574182245530-967d9b3831af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzYzMjU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  author1Src:
    'https://images.unsplash.com/photo-1535462931506-5dcf03a52e7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzYzMjU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1514626585111-9aa86183ac98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzYzMjU4NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Alt: 'Image of Michael Johnson',
  review3:
    "Elevate has truly transformed how we approach innovation within our institution. The platform's analytics tools have provided valuable insights that have helped us drive impactful change.",
  author1Name: 'John Doe',
  heading1: 'Testimonials',
  author2Position: 'Research Coordinator',
  author3Position: 'Dean of Engineering',
  review1:
    "Elevate has revolutionized how we track and showcase our innovation efforts. The platform's intuitive interface and AI-driven insights have been instrumental in guiding our decision-making processes.",
  author4Alt: 'Image of Sarah Lee',
  author2Name: 'Jane Smith',
  author4Position: 'Student Representative',
  author1Position: 'Professor of Innovation',
  author2Src:
    'https://images.unsplash.com/photo-1505876104692-2f34b9d54303?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzYzMjU4M3w&ixlib=rb-4.0.3&q=80&w=1080',
  review4:
    'As a student, Elevate has given me a unique perspective on the innovative work happening within our university. The virtual campus simulation is both engaging and informative.',
  author4Name: 'Sarah Lee',
  content1:
    "Elevate has revolutionized how we track and showcase our innovation efforts. The platform's intuitive interface and AI-driven insights have been instrumental in guiding our decision-making processes.",
  author2Alt: 'Image of Jane Smith',
}

Testimonial.propTypes = {
  review2: PropTypes.string,
  author3Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Src: PropTypes.string,
  author3Src: PropTypes.string,
  author3Alt: PropTypes.string,
  review3: PropTypes.string,
  author1Name: PropTypes.string,
  heading1: PropTypes.string,
  author2Position: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  author1Position: PropTypes.string,
  author2Src: PropTypes.string,
  review4: PropTypes.string,
  author4Name: PropTypes.string,
  content1: PropTypes.string,
  author2Alt: PropTypes.string,
}

export default Testimonial
