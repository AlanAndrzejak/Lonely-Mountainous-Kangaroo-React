import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text6">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text5">
                    Feel free to reach out to us for any inquiries or orders.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text3 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text4">
                    Basque Cheese Cake Cafe
                  </span>
                </Fragment>
              )}
            </h3>
            <div className="contact10-container3"></div>
          </div>
          <div className="contact10-container4">
            <div className="contact10-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1ODcxNDk1OHw&ixlib=rb-4.1.0&q=80&w=1080',
  content1: undefined,
  location1ImageAlt: 'Cafe Location Image',
  heading1: undefined,
}

Contact10.propTypes = {
  location1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
}

export default Contact10
